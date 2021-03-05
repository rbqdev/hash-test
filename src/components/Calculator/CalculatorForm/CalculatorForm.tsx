import { useState } from "react";
import { CallbackInputPayload } from "../../../components/InputText";
import InputAmmount from "../../../components/InputAmmount";
import InputInstallments from "../../../components/InputInstallments";
import InputMdr from "../../../components/InputMdr";
import {
  NAME_AMMOUNT,
  NAME_INSTALLMENTS,
  NAME_MDR
} from "../../../components/Calculator/constants";

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

export default function CalculatorForm() {
  const [formValues, setFormValues] = useState<FormState>({
    [NAME_AMMOUNT]: DeafaultFormValues,
    [NAME_INSTALLMENTS]: DeafaultFormValues,
    [NAME_MDR]: DeafaultFormValues
  });

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
    </Styled.Wrapper>
  );
}
