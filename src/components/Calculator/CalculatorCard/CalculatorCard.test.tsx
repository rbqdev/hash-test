import render from "@testsUtils/renderWithTheme";
import CalculatorCard from ".";

describe("Component: CalculatorCard", () => {
  const regexMessage =
    "Você está sem conexão com a internet. Verifique sua conexão e tente novamente mais tarde.";

  it("should render component correctly", () => {
    const { baseElement } = render(<CalculatorCard />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should NOT render message if network is online", () => {
    const { queryByText } = render(<CalculatorCard />);

    const text = queryByText(regexMessage);

    expect(text).not.toBeInTheDocument();
  });

  it("should render message if network is offline", () => {
    const { queryByText } = render(<CalculatorCard isOffline />);

    const text = queryByText(regexMessage);

    expect(text).toBeInTheDocument();
  });
});
