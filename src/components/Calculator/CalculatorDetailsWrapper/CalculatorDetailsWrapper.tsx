import CalculatorDetailsValues from "../CalculatorDetailsValues";
import * as Styled from "./CalculatorDetailsWrapper.styles";

export default function CalculatorDetailsWrapper() {
  return (
    <Styled.Wrapper>
      <Styled.WrapperArticle>
        <Styled.Title>Você Receberá:</Styled.Title>

        <CalculatorDetailsValues
          values={{}}
          isLoading={false}
        />
      </Styled.WrapperArticle>
    </Styled.Wrapper>
  );
}
