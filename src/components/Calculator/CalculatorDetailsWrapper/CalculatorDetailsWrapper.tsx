import { useContext, useState, useEffect } from "react";
import CalculatorContext from "@contexts/Calculator";
import CalculatorDetailsValues from "@components/Calculator/CalculatorDetailsValues";
import * as Styled from "./CalculatorDetailsWrapper.styles";

export default function CalculatorDetailsWrapper() {
  const { response, resetFetchValues, isLoading } = useContext(
    CalculatorContext
  );

  const [isMobileVisible, setIsMobileVisible] = useState(false);

  useEffect(() => {
    const notHasValues = !response || Object.keys(response).length === 0;

    if (notHasValues) {
      return;
    }

    setIsMobileVisible(true);
  }, [response]);

  const handleOverlayClick = () => {
    setIsMobileVisible(false);
    resetFetchValues();
  };

  return (
    <Styled.Wrapper>
      <Styled.WrapperArticle isMobileVisible={isMobileVisible}>
        <Styled.Title>Você Receberá:</Styled.Title>

        <CalculatorDetailsValues
          values={response ?? {}}
          isLoading={isLoading}
        />
      </Styled.WrapperArticle>

      <Styled.OverlayMobile
        onClick={handleOverlayClick}
        isMobileVisible={isMobileVisible}
        aria-hidden={!isMobileVisible}
      />
    </Styled.Wrapper>
  );
}
