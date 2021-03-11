import getUrlAnticipation from "./getUrlAnticipation";
import api from "@configs/api";

const { baseUrl } = api;
global.window = Object.create(window);

describe("Util: getUrlAnticipation", () => {
  describe("when NOT exists valid params on url", () => {
    it("should return baseUrl", () => {
      const urlResult = getUrlAnticipation();
      expect(urlResult).toBe(baseUrl);
    });
  });
  describe("when exists valid params on url", () => {
    beforeEach(() => {
      //@ts-ignore
      delete global.window.location;
      global.window = Object.create(window);
    });

    test.each([
      [`${baseUrl}?internalError=`, "?internalError"],
      [`${baseUrl}?timeout=`, "?timeout"],
      [`${baseUrl}?delay=`, "?delay"]
    ])("should return url: '%s'", (urlExpected, params) => {
      Object.defineProperty(window, "location", {
        value: {
          href: `http://test-url/${params}`,
          search: `${params}`
        },
        configurable: true
      });

      const urlResult = getUrlAnticipation();
      expect(urlResult).toBe(urlExpected);
    });
  });
});
