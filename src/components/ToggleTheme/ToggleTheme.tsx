import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { _constants as themeConstants } from "@styles/themes";
import Wrapper from "./ToggleTheme.styles";

const { THEME_LIGHT } = themeConstants;

export interface IToggleTheme {
  themeTitle: string;
  trigger: () => void;
}

export default function ToggleTheme({ themeTitle, trigger }: IToggleTheme) {
  return (
    <Wrapper onClick={trigger} data-testid="btn-toggle-theme">
      {themeTitle !== THEME_LIGHT ? (
        <IoMdSunny data-testid="icon-sun" />
      ) : (
        <IoMdMoon data-testid="icon-moon" />
      )}
    </Wrapper>
  );
}
