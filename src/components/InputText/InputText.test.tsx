import render from "@testsUtils/renderWithTheme";
import { RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { light as theme } from "@styles/themes";
import InputText from ".";

const mockLabel = "input-test";

const renderComponent = ({ error = false, textInfo = "" } = {}) =>
  render(
    <InputText
      label={mockLabel}
      name={mockLabel}
      error={error}
      textInfo={textInfo}
    />
  );

describe("Component: InputText", () => {
  let wrapper: RenderResult;
  let input: HTMLElement;

  it("should render component correctly", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  describe("if prop 'error' is 'false'", () => {
    beforeEach(() => {
      wrapper = renderComponent({ error: false });
      input = wrapper.getByLabelText(mockLabel);
    });

    it("should show border with style default", () => {
      expect(input).toHaveStyle({
        border: `1px solid ${theme.colors.border}`
      });
    });

    it("should NOT render icon error", () => {
      const iconError = wrapper.queryByTestId("icon-error");
      expect(iconError).not.toBeInTheDocument();
    });
  });

  describe("if prop 'error' is 'true'", () => {
    beforeEach(() => {
      wrapper = renderComponent({ error: true });
      input = wrapper.getByLabelText(mockLabel);

      userEvent.type(input, "0");
    });

    it("should show border with style error", () => {
      expect(input).toHaveStyle({
        border: `1px solid ${theme.colors.error}`
      });
    });

    it("should render icon error", () => {
      const iconError = wrapper.queryByTestId("icon-error");
      expect(iconError).toBeInTheDocument();
    });
  });

  describe("Text info", () => {
    const textInfo = "textInfoTest";

    it("should show text info if passed", () => {
      const { queryByText } = renderComponent({ textInfo });
      expect(queryByText(textInfo)).toBeInTheDocument();
    });

    it("should not show text info if not passed", () => {
      const { queryByText } = renderComponent();
      expect(queryByText(textInfo)).not.toBeInTheDocument();
    });
  });
});
