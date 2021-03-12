import { ScreenReaderText } from "@styles/global";
import * as Styled from "./Loader.styles";

interface ILoader {
  customText?: string;
}

export default function Loader({ customText = "" }: ILoader) {
  return (
    <Styled.Wrapper role="status">
      <ScreenReaderText>Carregando...</ScreenReaderText>
      {customText && <Styled.LoaderText>{customText}</Styled.LoaderText>}
    </Styled.Wrapper>
  );
}
