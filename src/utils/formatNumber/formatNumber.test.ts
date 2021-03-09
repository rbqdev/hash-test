import formatNumber, { currencyConfigs, percentConfigs } from "./formatNumber";

describe("Util: formatNumber", () => {
  it("should format to currency", () => {
    const value = formatNumber({
      value: "2222",
      ...currencyConfigs
    });

    expect(value).toEqual("R$ 22,22");
  });

  it("should format to percent", () => {
    const value = formatNumber({
      value: "100",
      ...percentConfigs
    });

    expect(value).toEqual("100%");
  });
});
