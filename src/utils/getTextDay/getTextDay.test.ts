import getTextDay from "./getTextDay";

describe("Util: getTextDay", () => {
  test.each([
    ["Amanhã", 1],
    ["Em 20 dias", 20],
    ["Em 1000 dias", 1000]
  ])("should return a text: '%s' if passed: '%s'", (textExpected, day) => {
    expect(getTextDay(day)).toEqual(textExpected);
  });
});
