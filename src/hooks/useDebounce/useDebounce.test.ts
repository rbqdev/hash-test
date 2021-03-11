import { renderHook } from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

describe("Hook: useDebounce", () => {
  const timer = 100;
  const mockDebounceFunction = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    renderHook(() => useDebounce(mockDebounceFunction, timer, []));
  });

  it("should call function in after time", () => {
    jest.advanceTimersByTime(timer);
    expect(mockDebounceFunction).toHaveBeenCalledTimes(1);
  });
});
