import { CustomThemeProvider } from "@contexts/Theme";
import { ToastProvider } from "@contexts/Toast";
import CalculatorCard from "@components/Calculator/CalculatorCard";
import GlobalStyle, { AppWrapper, ScreenReaderText } from "@styles/global";
import useConnection from "@hooks/useConnection";

function App() {
  const { isOffline } = useConnection();

  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <AppWrapper>
        <ScreenReaderText>
          <h1>Calculdora de Antecipação</h1>
        </ScreenReaderText>

        <ToastProvider>
          <CalculatorCard isOffline={isOffline} />
        </ToastProvider>
      </AppWrapper>
    </CustomThemeProvider>
  );
}

export default App;
