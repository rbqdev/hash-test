import { renderHook, act } from "@testing-library/react-hooks";
import { screen } from "@testing-library/react";
import { CustomThemeProvider } from "@contexts/Theme";
import { ToastProvider } from "@contexts/Toast";
import useToast from "@hooks/useToast";

let hook;

describe("Hook: useToast", () => {
  const message = "Toast Message";

  beforeEach(() => {
    jest.useFakeTimers();

    const wrapper = ({ children }) => (
      <CustomThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </CustomThemeProvider>
    );

    hook = renderHook(() => useToast(), { wrapper });
  });

  describe("when call 'dispatchToast'", () => {
    const testCases = [["success"], ["error"], ["info"]];

    test.each(testCases)(
      "should append a new element on doom with a type: '%s'",
      type => {
        act(() => {
          hook.result.current.dispatchToast({
            type,
            message
          });
        });

        const element = screen.getByTestId(`toast-${type}`);

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(message);
      }
    );
  });

  describe("when call 'removeToast'", () => {
    it("should remove toast element from body", () => {
      const type = "success";
      const idToast = 4;

      act(() => {
        hook.result.current.dispatchToast({
          type,
          message
        });
      });

      expect(screen.getByTestId(`toast-${type}`)).toBeInTheDocument();

      act(() => {
        hook.result.current.removeToast(idToast);
      });

      expect(hook.result.current.toasts).toEqual([]);
    });
  });
});
