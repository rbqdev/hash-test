import getOnlyDigits from "./getOnlyDigits";

describe("Util: getOnlyDigits", () => {
  test.each([
    [23, "2#3"],
    [23, "2#3"],
    [444, ".4#4,4"],
    [1, "*&%%%%1"],
    [13, ".1#3.()."]
  ])(
    "should return a number '%s' if passed value '%s'",
    (numberExpected, value) => {
      expect(getOnlyDigits(value)).toEqual(numberExpected);
    }
  );
});
