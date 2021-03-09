import CalculatorContext from "@contexts/Calculator";
import render from "@testsUtils/renderWithTheme";
import { screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  NAME_AMMOUNT,
  NAME_INSTALLMENTS,
  NAME_MDR
} from "@components/Calculator/constants";
import { LABEL_AMMOUNT } from "@components/InputAmmount";
import { LABEL_INSTALLMENTS } from "@components/InputInstallments";
import { LABEL_MDR } from "@components/InputMdr";
import { light as theme } from "@styles/themes";
import getListOfDays from "@utils/getListOfDays";
import CalculatorForm from ".";

const mockRequestAnticipation = jest.fn();

const renderComponent = ({
  response = null,
  error = null,
  isLoading = false,
  requestTakeToLong = false,
  requestAnticipation = mockRequestAnticipation,
  resetFetchValues = jest.fn()
} = {}) =>
  render(
    <CalculatorContext.Provider
      value={{
        response,
        error,
        isLoading,
        requestTakeToLong,
        requestAnticipation,
        resetFetchValues
      }}
    >
      <CalculatorForm />
    </CalculatorContext.Provider>
  );

describe("Component: CalculatorForm", () => {
  it("should render component correctly", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render title", () => {
    const { getByRole } = renderComponent();
    expect(
      getByRole("heading", { name: /simule sua antecipação/i })
    ).toBeInTheDocument();
  });

  describe("Inputs validations rules", () => {
    const errorStyle = { border: `1px solid ${theme.colors.error}` };

    beforeEach(() => {
      renderComponent();
    });

    test.each([
      ["value === 0", "0"],
      ["value > 100000000", "100000001"]
    ])(
      `should invalidate input ${NAME_AMMOUNT} if value not passaed on rule: '%s'`,
      async (_, value) => {
        const input = screen.getByRole("textbox", {
          name: LABEL_AMMOUNT
        });

        await act(async () => {
          await userEvent.type(input, value);
        });

        expect(input).toHaveStyle(errorStyle);
      }
    );

    test.each([
      ["value === 0", "0"],
      ["value > 12", "13"]
    ])(
      `should invalidate input ${NAME_INSTALLMENTS} if value not passaed on rule: '%s'`,
      async (_, value) => {
        const input = screen.getByRole("textbox", {
          name: LABEL_INSTALLMENTS
        });

        await act(async () => {
          await userEvent.type(input, value);
        });

        expect(input).toHaveStyle(errorStyle);
      }
    );

    test.each([
      ["value === 0", "0"],
      ["value > 100", "101"]
    ])(
      `should invalidate input ${NAME_MDR} if value not passed on rule: '%s'`,
      async (_, value) => {
        const input = screen.getByRole("textbox", {
          name: LABEL_MDR
        });

        await act(async () => {
          await userEvent.type(input, value);
        });

        expect(input).toHaveStyle(errorStyle);
      }
    );
  });

  describe("Event requestAnticipation", () => {
    it("should call if formValues are all valid", async () => {
      jest.useFakeTimers();

      const { getByRole } = renderComponent();

      const inputAmmount = getByRole("textbox", {
        name: LABEL_AMMOUNT
      });
      const inputInstallments = getByRole("textbox", {
        name: LABEL_INSTALLMENTS
      });
      const inputMdr = getByRole("textbox", {
        name: LABEL_MDR
      });

      const days = getListOfDays();

      await act(async () => {
        await userEvent.type(inputAmmount, "2222");
        await userEvent.type(inputInstallments, "12");
        await userEvent.type(inputMdr, "100");

        await waitFor(() =>
          expect(mockRequestAnticipation).toBeCalledWith({
            amount: 2222,
            installments: 12,
            mdr: 100,
            days
          })
        );
      });
    });
  });

  describe("Loader messages", () => {
    const requestLongMessage =
      "A requisição ainda está processamento, aguarde...";

    it("should show loader component when prop 'isLoading' of context are 'true'", async () => {
      const { queryByText } = renderComponent({
        isLoading: true,
        requestTakeToLong: false
      });

      expect(queryByText("Carregando...")).toBeInTheDocument();
      expect(queryByText(requestLongMessage)).not.toBeInTheDocument();
    });

    it("should show message when prop 'requestTakeToLong' of context are 'true'", async () => {
      const { queryByText } = renderComponent({
        isLoading: true,
        requestTakeToLong: true
      });

      expect(queryByText(requestLongMessage)).toBeInTheDocument();
    });
  });
});
