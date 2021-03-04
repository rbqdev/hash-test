import { DefaultTheme } from "styled-components";
import commonColors from "./_commonColors";
import constants from "./_constants";

const themeDark: DefaultTheme = {
  title: constants.THEME_DARK,

  colors: {
    ...commonColors,
    mainBg: "#151618",
    secondaryBg: "#1c1e21",
    text: "#a9abb3",
    textLight: "#cecece",
    border: "#33373d"
  }
};

export default themeDark;
