import getListOfDays, {
  DEFAULT_DAYS,
  KEY_PARAM_CUSTOM_DAYS
} from "./getListOfDays";

describe("Util: getListOfDays", () => {
  describe("when there is not params on url", () => {
    it("should return default days", () => {
      expect(getListOfDays()).toEqual(DEFAULT_DAYS);
    });
  });

  describe("when there are params on url", () => {
    global.window = Object.create(window);

    it("should return days based on params", () => {
      const params = `?${KEY_PARAM_CUSTOM_DAYS}=[1,15,120]`;

      Object.defineProperty(window, "location", {
        value: {
          href: `http://test-url/${params}`,
          search: `${params}`
        }
      });

      const daysResult = getListOfDays();

      expect(daysResult).toEqual([1, 15, 120]);
    });
  });
});
