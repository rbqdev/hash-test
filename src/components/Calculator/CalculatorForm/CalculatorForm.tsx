import { useState, useContext } from "react";
import { CallbackInputPayload } from "@components/InputText";
import CalculatorContext from "@contexts/Calculator";
import Loader from "@components/Loader";
import InputAmmount from "@components/InputAmmount";
import InputInstallments from "@components/InputInstallments";
import InputMdr from "@components/InputMdr";
import {
  NAME_AMMOUNT,
  NAME_INSTALLMENTS,
  NAME_MDR,
  DEBOUNCE_TIME_FOR_TRIGGER_REQUEST
} from "@components/Calculator/constants";
import useDebounce from "@hooks/useDebounce/useDebounce";
import getListOfDays from "@utils/getListOfDays";
import * as Styled from "./CalculatorForm.styles";
import formRules from "./rules";

interface FormState {
  [key: string]: {
    value: number;
    inputInvalid: boolean;
  };
}

const DeafaultFormValues = {
  value: 0,
  inputInvalid: false
};

function validateInput(name: string, value: number): boolean {
  return formRules[name](value);
}

function validateForm(
  callback: (payload: boolean) => void,
  formValues: FormState
): void {
  const isFormInvalid = Object.keys(formValues).some(key =>
    validateInput(key, formValues[key].value)
  );
  callback(isFormInvalid);
}

export default function CalculatorForm() {
  const [formValues, setFormValues] = useState<FormState>({
    [NAME_AMMOUNT]: DeafaultFormValues,
    [NAME_INSTALLMENTS]: DeafaultFormValues,
    [NAME_MDR]: DeafaultFormValues
  });

  const { isLoading, requestTakeToLong, requestAnticipation } = useContext(
    CalculatorContext
  );

  const handleChangeInput = ({ value, name }: CallbackInputPayload): void => {
    const numberValue = Number(value);

    setFormValues({
      ...formValues,
      [name]: {
        value: numberValue,
        inputInvalid: validateInput(name, numberValue)
      }
    });
  };

  const sendRequest = async (): Promise<void> => {
    const days = getListOfDays();

    await requestAnticipation({
      amount: formValues[NAME_AMMOUNT].value,
      installments: formValues[NAME_INSTALLMENTS].value,
      mdr: formValues[NAME_MDR].value,
      days
    });
  };

  useDebounce(
    () => {
      validateForm(isFormInvalid => {
        if (isFormInvalid) {
          return;
        }

        sendRequest();
      }, formValues);
    },
    DEBOUNCE_TIME_FOR_TRIGGER_REQUEST,
    [formValues]
  );

  return (
    <Styled.Wrapper>
      <Styled.Title>Simule sua Antecipação</Styled.Title>

      <form>
        <InputAmmount
          callbackFunction={handleChangeInput}
          name={NAME_AMMOUNT}
          error={formValues[NAME_AMMOUNT].inputInvalid}
        />
        <InputInstallments
          callbackFunction={handleChangeInput}
          name={NAME_INSTALLMENTS}
          error={formValues[NAME_INSTALLMENTS].inputInvalid}
        />
        <InputMdr
          callbackFunction={handleChangeInput}
          name={NAME_MDR}
          error={formValues[NAME_MDR].inputInvalid}
        />
      </form>

      {isLoading && (
        <Loader
          customText={
            requestTakeToLong
              ? "A requisição ainda está processamento, aguarde..."
              : ""
          }
        />
      )}
    </Styled.Wrapper>
  );
}
