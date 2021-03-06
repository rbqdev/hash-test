import { useContext } from "react";
import CalculatorContext from "@contexts/Calculator";
import CalculatorDetailsValues from "@components/Calculator/CalculatorDetailsValues";
import * as Styled from "./CalculatorDetailsWrapper.styles";

export default function CalculatorDetailsWrapper() {
  const { response, isLoading } = useContext(CalculatorContext);

  return (
    <Styled.Wrapper>
      <Styled.WrapperArticle>
        <Styled.Title>Você Receberá:</Styled.Title>

        <CalculatorDetailsValues
          values={response ?? {}}
          isLoading={isLoading}
        />
      </Styled.WrapperArticle>
    </Styled.Wrapper>
  );
}
