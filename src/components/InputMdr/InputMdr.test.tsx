import render from "@testsUtils/renderWithTheme";
import { NAME_MDR } from "@components/Calculator/constants";
import userEvent from "@testing-library/user-event";
import InputMdr from ".";

interface PropsRender {
  callbackFunction: jest.Mock<any, any> | undefined;
  error: boolean;
}

const mockCallbackFunction = jest.fn();

const renderComponent = ({ callbackFunction, error }: PropsRender) =>
  render(
    <InputMdr
      name={NAME_MDR}
      callbackFunction={callbackFunction}
      error={error}
    />
  );

describe("Component: InputMdr", () => {
  const inputRole = { name: /informe o percentual de mdr \*/i };
  let inputMdr: HTMLElement;

  it("should render component correctly", () => {
    const { baseElement } = renderComponent({
      error: false,
      callbackFunction: mockCallbackFunction
    });
    expect(baseElement).toMatchSnapshot();
  });

  describe("when user type on input", () => {
    beforeEach(() => {
      const { getByRole } = renderComponent({
        error: false,
        callbackFunction: mockCallbackFunction
      });

      inputMdr = getByRole("textbox", inputRole);

      userEvent.type(inputMdr, "100");
    });

    it("should set value and format to percent", () => {
      expect(inputMdr).toHaveValue("100%");
    });

    it("should call 'callbackFunction'", () => {
      expect(mockCallbackFunction).toBeCalledWith({
        value: 100,
        name: NAME_MDR
      });
    });
  });

  describe("when callbackFunction not passed", () => {
    it("should not be called when user type on input", () => {
      const { getByRole } = renderComponent({
        error: false,
        callbackFunction: undefined
      });

      inputMdr = getByRole("textbox", inputRole);

      userEvent.type(inputMdr, "100");

      expect(mockCallbackFunction).not.toHaveBeenCalled();
    });
  });
});
