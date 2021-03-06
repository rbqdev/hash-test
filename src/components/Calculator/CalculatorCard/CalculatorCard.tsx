import { CalculatorProvider } from "@contexts/Calculator";
import CalculatorForm from "@components/Calculator/CalculatorForm";
import CalculatorDetailsWrapper from "@components/Calculator/CalculatorDetailsWrapper";
import * as Styled from "./CalculatorCard.styles";

export default function CalculatorCard() {
  return (
    <CalculatorProvider>
      <Styled.Wrapper>
        <CalculatorForm />
        <CalculatorDetailsWrapper />
      </Styled.Wrapper>
    </CalculatorProvider>
  );
}
