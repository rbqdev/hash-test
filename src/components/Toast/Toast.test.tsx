import render from "@testsUtils/renderWithTheme";
import Toast, { ToastType } from ".";

describe("Component: Toast", () => {
  const mockMessage = "testMessage";

  it("should render toast with message passed", () => {
    const { queryByText } = render(<Toast type="info" message={mockMessage} />);
    expect(queryByText(mockMessage)).toBeInTheDocument();
  });

  test.each([
    ["success" as ToastType],
    ["error" as ToastType],
    ["info" as ToastType],
    ["warning" as ToastType]
  ])("should render toast with icon type '%s' passed", type => {
    const { getByTestId } = render(<Toast type={type} message={mockMessage} />);
    expect(getByTestId(`toast-${type}`)).toBeInTheDocument();
  });
});
