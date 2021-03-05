import CalculatorForm from "../CalculatorForm";
import CalculatorDetailsWrapper from "../CalculatorDetailsWrapper";
import * as Styled from "./CalculatorCard.styles";

export default function CalculatorCard() {
  return (
    <Styled.Wrapper>
      <CalculatorForm />
      <CalculatorDetailsWrapper />
    </Styled.Wrapper>
  );
}