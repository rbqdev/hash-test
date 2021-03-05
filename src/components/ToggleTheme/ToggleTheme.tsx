import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { _constants as themeConstants } from "../../styles/themes";
import Wrapper from "./ToggleTheme.styles";

const { THEME_LIGHT } = themeConstants;
export interface ToggleThemeProps {
  themeTitle: string;
  trigger: () => void;
}

function ToggleTheme({ themeTitle, trigger }: ToggleThemeProps) {
  return (
    <Wrapper onClick={trigger} data-testid="btn-toggle-theme">
      {themeTitle !== THEME_LIGHT ? <IoMdSunny /> : <IoMdMoon />}
    </Wrapper>
  );
}

export default ToggleTheme;
