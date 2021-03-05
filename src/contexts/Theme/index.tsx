import React, { useState, useCallback } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import ToggleTheme from "../../components/ToggleTheme";
import {
  light as themeLight,
  dark as themeDark,
  _constants as themeConstants
} from "../../styles/themes";
import ButtonWrapper from "./Theme.styles";

interface IThemeContext {
  theme: DefaultTheme;
  handleChangeTheme: (newTheme: DefaultTheme) => void;
}

const { THEME_LIGHT, KEY_THEME_STORAGE } = themeConstants;

const ThemeContext = React.createContext({} as IThemeContext);

export const CustomThemeProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const responseStorage = localStorage.getItem(KEY_THEME_STORAGE);

    return responseStorage ? JSON.parse(responseStorage) : themeLight;
  });

  const handleChangeTheme = useCallback(() => {
    const newTheme = theme.title === THEME_LIGHT ? themeDark : themeLight;

    localStorage.setItem(KEY_THEME_STORAGE, JSON.stringify(newTheme));
    setTheme(newTheme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <ButtonWrapper>
          <ToggleTheme themeTitle={theme.title} trigger={handleChangeTheme} />
        </ButtonWrapper>

        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContext;
