import { useRef } from "react";
import InputText, { CustomInputProps } from "../InputText";
import formatNumber, { percentConfigs } from "../../utils/formatNumber";
import getOnlyDigits from "../../utils/getOnlyDigits";

export const LABEL_MDR = "Informe o percentual de MDR *";

function InputMdr({ callbackFunction, name, error }: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (): void => {
    const element = inputRef.current;

    if (element === null) {
      return;
    }

    element.value = formatNumber({
      value: element.value,
      ...percentConfigs
    });

    const positionCaret = element.value.length - 1;
    element.setSelectionRange(positionCaret, positionCaret);

    if (typeof callbackFunction !== "function") {
      return;
    }

    callbackFunction({
      value: getOnlyDigits(element.value),
      name
    });
  };

  return (
    <InputText
      label={LABEL_MDR}
      aria-label={LABEL_MDR}
      aria-required="true"
      name={name}
      error={error}
      onChange={handleChange}
      ref={inputRef}
    />
  );
}

export default InputMdr;
