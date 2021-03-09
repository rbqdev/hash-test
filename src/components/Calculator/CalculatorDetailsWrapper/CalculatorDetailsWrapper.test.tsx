import CalculatorContext from "@contexts/Calculator";
import render from "@testsUtils/renderWithTheme";
import { fireEvent } from "@testing-library/react";
import CalculatorDetailsWrapper from ".";

const mobileOverlayId = "overlay-mobile";
const mockResetFetchValues = jest.fn();
const mockContextValues = {
  response: null,
  error: null,
  isLoading: false,
  requestTakeToLong: false,
  requestAnticipation: () => {},
  resetFetchValues: mockResetFetchValues
};

const renderComponent = () =>
  render(
    <CalculatorContext.Provider
      value={{
        ...mockContextValues
      }}
    >
      <CalculatorDetailsWrapper />
    </CalculatorContext.Provider>
  );

describe("Component: CalculatorDetailsWrapper", () => {
  it("should render component correctly", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render title", () => {
    const { getByRole } = renderComponent();

    expect(
      getByRole("heading", { name: /você receberá/i })
    ).toBeInTheDocument();
  });

  it("should call 'resetFetchValues' when clicked on overlay", () => {
    const { getByTestId } = renderComponent();

    fireEvent.click(getByTestId(mobileOverlayId));

    expect(mockResetFetchValues).toBeCalledTimes(1);
  });
});
