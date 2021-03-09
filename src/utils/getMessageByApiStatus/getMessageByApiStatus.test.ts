import getMessageByApiStatus from "./getMessageByApiStatus";

describe("Util: getMessageByApiStatus", () => {
  test.each([
    ["Tempo de processamento excedido! Tente novamente mais tarde", 408],
    ["Houve algum erro com a requisição! Tente novamente mais tarde", 500]
  ])("should show the text '%s' if passed the status '%s'", (text, status) => {
    const textExpected = getMessageByApiStatus(status);
    expect(text).toEqual(textExpected);
  });
});
