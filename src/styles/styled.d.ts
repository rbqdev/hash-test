import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      black: string;
      blackTransparent: string;
      white: string;
      grey: string;
      blue: string;
      blueLight: string;
      blueBorder: string;
      blueBorderLight: string;
      success: string;
      error: string;
      warning: string;
      info: string;

      mainBg: string;
      secondaryBg: string;
      text: string;
      textLight: string;
      border: string;
    };
  }
}
