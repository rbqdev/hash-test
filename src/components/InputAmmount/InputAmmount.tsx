import { useRef, useEffect } from "react";
import formatNumber, { currencyConfigs } from "@utils/formatNumber";
import getOnlyDigits from "@utils/getOnlyDigits";
import InputText, { CustomInputProps } from "@components/InputText";

export const LABEL_AMMOUNT = "Informe o valor da venda *";

function InputAmmount({ callbackFunction, name, error }: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (): void => {
    const element = inputRef?.current;

    if (element === null) {
      return;
    }

    element.value = formatNumber({
      value: element.value,
      ...currencyConfigs
    });

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
      label={LABEL_AMMOUNT}
      aria-label={LABEL_AMMOUNT}
      aria-required="true"
      name={name}
      error={error}
      onChange={handleChange}
      ref={inputRef}
    />
  );
}

export default InputAmmount;
