import { renderHook, act } from "@testing-library/react-hooks";
import useConnection from "./useConnection";

describe("Hook: useConnection", () => {
  let hook: any;

  beforeEach(() => {
    hook = renderHook(() => useConnection());
  });

  it("should mounted with value 'false'", () => {
    expect(hook.result.current.isOffline).toEqual(false);
  });

  it("should set new value", () => {
    act(() => {
      hook.result.current.setIsOffline(true);
    });

    expect(hook.result.current.isOffline).toEqual(true);
  });
});
