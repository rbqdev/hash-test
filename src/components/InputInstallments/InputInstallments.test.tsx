import render from "@testsUtils/renderWithTheme";
import { NAME_INSTALLMENTS } from "@components/Calculator/constants";
import { RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputInstallments from ".";

interface PropsRender {
  callbackFunction: jest.Mock<any, any> | undefined;
  error: boolean;
}

const mockCallbackFunction = jest.fn();

const renderComponent = ({ callbackFunction, error }: PropsRender) =>
  render(
    <InputInstallments
      name={NAME_INSTALLMENTS}
      callbackFunction={callbackFunction}
      error={error}
    />
  );

describe("Component: InputInstallments", () => {
  const inputRole = { name: /em quantas parcelas /i };
  let inputInstallments: HTMLElement;

  it("should render component correctly", () => {
    const { baseElement } = renderComponent({
      error: false,
      callbackFunction: mockCallbackFunction
    });

    expect(baseElement).toMatchSnapshot();
  });

  describe("when 'callbackFunction' is passed", () => {
    let wrapper: RenderResult;

    beforeEach(() => {
      wrapper = renderComponent({
        error: false,
        callbackFunction: mockCallbackFunction
      });

      inputInstallments = wrapper.getByRole("textbox", inputRole);

      userEvent.type(inputInstallments, "12");
    });

    it("should set value", () => {
      expect(inputInstallments).toHaveValue("12");
    });

    it("should render text info", () => {
      expect(wrapper.queryByText("Máximo de 12 parcelas")).toBeInTheDocument();
    });

    it("should call 'callbackFunction' when user type on input", () => {
      inputInstallments = wrapper.getByRole("textbox", inputRole);

      userEvent.type(inputInstallments, "12");

      expect(mockCallbackFunction).toBeCalledWith({
        value: 12,
        name: NAME_INSTALLMENTS
      });
    });
  });

  describe("when 'callbackFunction' not passed", () => {
    it("should not be called when user type on input", () => {
      const { getByRole } = renderComponent({
        error: false,
        callbackFunction: undefined
      });

      inputInstallments = getByRole("textbox", inputRole);

      userEvent.type(inputInstallments, "12");

      expect(mockCallbackFunction).not.toHaveBeenCalled();
    });
  });
});
