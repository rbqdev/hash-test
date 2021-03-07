import { CustomThemeProvider } from "@contexts/Theme";
import { ToastProvider } from "@contexts/Toast";
import CalculatorCard from "@components/Calculator/CalculatorCard";
import GlobalStyle, { AppWrapper, ScreenReaderText } from "@styles/global";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <AppWrapper>
        <ScreenReaderText>
          <h1>Calculdora de Antecipação</h1>
        </ScreenReaderText>

        <ToastProvider>
          <CalculatorCard />
        </ToastProvider>
      </AppWrapper>
    </CustomThemeProvider>
  );
}

export default App;
