import CalculatorForm from "@components/Calculator/CalculatorForm";
import CalculatorDetailsWrapper from "@components/Calculator/CalculatorDetailsWrapper";
import * as Styled from "./CalculatorCard.styles";

export default function CalculatorCard() {
  return (
    <Styled.Wrapper>
      <CalculatorForm />
      <CalculatorDetailsWrapper />
    </Styled.Wrapper>
  );
}
