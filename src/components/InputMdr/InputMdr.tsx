import { useRef, memo } from "react";
import InputText, { ICustomInput } from "@components/InputText";
import formatNumber, { percentConfigs } from "@utils/formatNumber";
import getOnlyDigits from "@utils/getOnlyDigits";

export const LABEL_MDR = "Informe o percentual de MDR *";

function setInputCaretToPenultimatePosition(element: HTMLInputElement) {
  const positionCaret = element.value.length - 1;
  element.setSelectionRange(positionCaret, positionCaret);
}

function InputMdr({ callbackFunction, name, error }: ICustomInput) {
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

    setInputCaretToPenultimatePosition(element);

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

export default memo(InputMdr);
