import { useRef, memo } from "react";
import InputText, { ICustomInput } from "@components/InputText";
import getOnlyDigits from "@utils/getOnlyDigits";

export const LABEL_INSTALLMENTS = "Em quantas parcelas *";

function InputInstallments({ callbackFunction, name, error }: ICustomInput) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (): void => {
    const element = inputRef.current;

    if (element === null) {
      return;
    }

    element.value = `${getOnlyDigits(element.value)}`;

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
      label={LABEL_INSTALLMENTS}
      aria-label={LABEL_INSTALLMENTS}
      aria-required="true"
      textInfo="Máximo de 12 parcelas"
      name={name}
      error={error}
      onChange={handleChange}
      ref={inputRef}
    />
  );
}

export default memo(InputInstallments);
