import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should match snapshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should render a H1 with content: 'Calculadora de Antecipação'", () => {
    render(<App />);

    const expected = screen.getByRole("heading", {
      name: /calculdora de antecipação/i
    });

    expect(expected).toBeInTheDocument();
  });
});
