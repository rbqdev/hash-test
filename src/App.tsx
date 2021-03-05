import { CustomThemeProvider } from "@contexts/Theme";
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

        <CalculatorCard />
      </AppWrapper>
    </CustomThemeProvider>
  );
}

export default App;
