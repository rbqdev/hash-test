import render from "@testsUtils/renderWithTheme";
import { NAME_AMMOUNT } from "@components/Calculator/constants";
import userEvent from "@testing-library/user-event";
import InputAmmount from ".";

interface PropsRender {
  callbackFunction: jest.Mock<any, any> | undefined;
  error: boolean;
}

const mockCallbackFunction = jest.fn();

const renderComponent = ({ callbackFunction, error }: PropsRender) =>
  render(
    <InputAmmount
      name={NAME_AMMOUNT}
      callbackFunction={callbackFunction}
      error={error}
    />
  );

describe("Component: InputAmmount", () => {
  it("should render component correctly", () => {
    const { baseElement } = renderComponent({
      error: false,
      callbackFunction: mockCallbackFunction
    });
    expect(baseElement).toMatchSnapshot();
  });

  describe("when user type on input", () => {
    const inputRole = { name: /informe o valor da venda \*/i };
    let inputAmmount: HTMLElement;

    describe("and 'callbackFunction' is passed", () => {
      beforeEach(() => {
        const { getByRole } = renderComponent({
          error: false,
          callbackFunction: mockCallbackFunction
        });

        inputAmmount = getByRole("textbox", inputRole);

        userEvent.type(inputAmmount, "2222");
      });

      it("should set value and format to currency", () => {
        expect(inputAmmount).toHaveValue("R$ 22,22");
      });

      it("should call 'callbackFunction'", () => {
        expect(mockCallbackFunction).toBeCalledWith({
          value: 2222,
          name: NAME_AMMOUNT
        });
      });
    });

    describe("and 'callbackFunction' not passed", () => {
      it("should not be called when user type on input", () => {
        const { getByRole } = renderComponent({
          error: false,
          callbackFunction: undefined
        });

        inputAmmount = getByRole("textbox", inputRole);

        userEvent.type(inputAmmount, "12");

        expect(mockCallbackFunction).not.toHaveBeenCalled();
      });
    });
  });
});
