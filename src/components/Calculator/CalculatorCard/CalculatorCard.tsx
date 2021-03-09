import { CalculatorProvider } from "@contexts/Calculator";
import CalculatorForm from "@components/Calculator/CalculatorForm";
import CalculatorDetailsWrapper from "@components/Calculator/CalculatorDetailsWrapper";
import * as Styled from "./CalculatorCard.styles";
import { FiWifiOff } from "react-icons/fi";
interface Props {
  isOffline?: boolean;
}

export default function CalculatorCard({ isOffline = false }: Props) {
  return (
    <CalculatorProvider>
      <Styled.Wrapper>
        <CalculatorForm />
        <CalculatorDetailsWrapper />

        {isOffline && (
          <Styled.MessageOfflineWrapper>
            <Styled.MessageOfflineText>
              <FiWifiOff />
              Você está sem conexão com a internet. Verifique sua conexão e
              tente novamente mais tarde.
            </Styled.MessageOfflineText>
          </Styled.MessageOfflineWrapper>
        )}
      </Styled.Wrapper>
    </CalculatorProvider>
  );
}
