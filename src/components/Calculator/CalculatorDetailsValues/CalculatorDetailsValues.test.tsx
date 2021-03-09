import render from "@testsUtils/renderWithTheme";
import CalculatorDetailsValues from ".";

const renderComponent = ({ values = {}, isLoading = false }: any = {}) =>
  render(<CalculatorDetailsValues values={values} isLoading={isLoading} />);

describe("Component: CalculatorDetailsValues", () => {
  it("should render component correctly", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  describe("if prop 'isLoading'", () => {
    it("is `true`, should render squeleton elements", () => {
      const { container } = renderComponent({ isLoading: true });
      const elementExpected = container.querySelector(
        ".react-loading-skeleton"
      );

      expect(elementExpected).toBeInTheDocument();
    });

    it("is `false`, should NOT render squeleton elements", () => {
      const { container } = renderComponent();

      expect(
        container.querySelector(".react-loading-skeleton")
      ).not.toBeInTheDocument();
    });

    const mockTextAmanha = "Amanhã:";
    const mockText_15_dias = "Em 15 dias:";
    const mockCurrency_0 = "R$ 0,00";

    test.each([
      [mockTextAmanha, mockCurrency_0, {}],
      [mockText_15_dias, mockCurrency_0, {}],
      [mockTextAmanha, mockCurrency_0, { 1: 0 }],
      [mockText_15_dias, mockCurrency_0, { 15: 0 }],
      [mockTextAmanha, "R$ 20,92", { 1: 2092 }],
      [mockText_15_dias, "R$ 21,12", { 15: 2112 }]
    ])(
      "should render text: '%s' with currency: '%s', getting data: '%s'",
      (textExpected, currencyExpected, values) => {
        const { getByRole, getAllByText } = renderComponent({ values });

        expect(
          getByRole("heading", {
            name: textExpected
          })
        ).toBeInTheDocument();

        expect(getAllByText(currencyExpected)[0]).toBeInTheDocument();
      }
    );
  });
});
