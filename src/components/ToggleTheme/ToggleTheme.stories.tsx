import { Story, Meta } from "@storybook/react/types-6-0";
import ToggleTheme, { IToggleTheme } from ".";
import { _constants } from "@styles/themes";
import { useDarkMode } from "storybook-dark-mode";

const { THEME_LIGHT, THEME_DARK } = _constants;

export default {
  title: "ToggleTheme",
  component: ToggleTheme,
  args: {
    trigger: null
  }
} as Meta;

export const Default: Story<IToggleTheme> = args => (
  <ToggleTheme
    {...args}
    themeTitle={useDarkMode() ? THEME_DARK : THEME_LIGHT}
  />
);
