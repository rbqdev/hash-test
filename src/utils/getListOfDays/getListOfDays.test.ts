import getListOfDays, { DEFAULT_DAYS } from "./getListOfDays";

describe("Util: getListOfDays", () => {
  describe("when no have url parms", () => {
    it("should return default days", () => {
      expect(getListOfDays()).toEqual(DEFAULT_DAYS);
    });
  });

  describe("when has url parms", () => {
    global.window = Object.create(window);

    it("should return days based on params", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "http://test-url/?days[1,15,120]",
          search: "days=[1,15,120]"
        }
      });

      const days = getListOfDays();

      expect(days).toEqual([1, 15, 120]);
    });
  });
});
