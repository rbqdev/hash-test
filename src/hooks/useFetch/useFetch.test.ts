import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFetch, { ACTIONS, initialState } from "./useFetch";

const mockDispatchToast = jest.fn();

jest.mock("@hooks/useToast", () => () => ({
  dispatchToast: mockDispatchToast
}));

const mockUrl = "http://url-test.com/";

const mockBody = {
  amount: "22",
  installments: "12",
  mdr: "100",
  days: [1, 15, 30]
};

const mockRequest = {
  url: mockUrl,
  method: "POST",
  body: mockBody
};

const mockResponse = {
  1: 1,
  15: 1,
  30: 1,
  90: 1
};

let hook: any;

describe("Hook: useFetch", () => {
  beforeEach(() => {
    hook = renderHook(() => useFetch());
  });

  afterEach(() => {
    //@ts-ignore
    fetch.resetMocks();
  });

  describe("when handle with state", () => {
    const testCases = [
      ["isLoading", true, ACTIONS.SET_IS_LOADING],
      ["requestTakeToLong", true, ACTIONS.SET_REQUEST_TAKE_TO_LONG],
      ["response", { 1: 1 }, ACTIONS.SET_RESPONSE],
      ["error", { message: "error" }, ACTIONS.SET_ERROR]
    ];

    test.each(testCases)(
      "should set prop '%s' with value '%s'",
      async (prop, value, action) => {
        const {
          result: {
            current: { dispatchState }
          }
        } = hook;

        await act(async () => {
          dispatchState({
            type: action,
            payload: { value }
          });
        });

        expect(hook.result.current[prop]).toBe(value);
      }
    );

    test.each(testCases)(
      "should reset prop '%s' when call 'resetFetchValues()'",
      async (prop, value, action) => {
        await act(async () => {
          hook.result.current.dispatchState({
            type: action,
            payload: { value }
          });

          hook.result.current.resetFetchValues();
        });

        expect(hook.result.current[prop]).toEqual(initialState[prop]);
      }
    );
  });

  describe("when call 'dispatchRequest()'", () => {
    beforeEach(() => {
      // @ts-ignore
      fetch.mockClear();
    });

    describe("if success", () => {
      beforeEach(async () => {
        // @ts-ignore
        fetch.mockReturnValue({ json: () => mockResponse, ok: true });

        const {
          result: {
            current: { dispatchRequest }
          }
        } = hook;

        await act(async () => {
          await dispatchRequest(mockRequest);
        });
      });

      it("should called with params passed", () => {
        // @ts-ignore
        const fetchCalls = fetch.mock.calls[0];

        expect(fetchCalls[0]).toEqual(mockUrl);
        expect(fetchCalls[1]).toEqual({
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(mockBody)
        });
      });

      it("should set 'response' with value returned from api", () => {
        expect(hook.result.current.response).toEqual(mockResponse);
      });
    });

    describe("if error", () => {
      test.each([
        [408, "Tempo de processamento excedido! Tente novamente mais tarde"],
        [500, "Houve algum erro com a requisição! Tente novamente mais tarde"]
      ])(
        "should set the prop 'error' and call 'toast' passing status from api",
        async (status, message) => {
          // @ts-ignore
          fetch.mockReturnValue({ status, ok: false });

          const {
            result: {
              current: { dispatchRequest }
            }
          } = hook;

          await act(async () => {
            await dispatchRequest(mockRequest);
          });

          expect(hook.result.current.error).toEqual(new Error(message));
          expect(mockDispatchToast).toBeCalledWith({
            message,
            type: "error",
            duration: 3000
          });
        }
      );
    });

    describe("if prop 'isLoading' is true", () => {
      it("should not call rest of the function", async () => {
        await act(async () => {
          await hook.result.current.dispatchState({
            type: ACTIONS.SET_IS_LOADING,
            payload: { value: true }
          });

          await hook.result.current.dispatchRequest(mockRequest);
        });

        expect(fetch).not.toHaveBeenCalled();
      });
    });
  });
});
