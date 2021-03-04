import { DefaultTheme } from "styled-components";
import commonColors from "./_commonColors";
import constants from "./_constants";

const themeLight: DefaultTheme = {
  title: constants.THEME_LIGHT,

  colors: {
    ...commonColors,
    mainBg: "#f5f7fa",
    secondaryBg: "#f7f9fa",
    text: "#656565",
    textLight: "#cecece",
    border: "#d1dce3"
  }
};

export default themeLight;
