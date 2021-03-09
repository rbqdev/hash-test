import render from "@testsUtils/renderWithTheme";
import { fireEvent } from "@testing-library/react";
import {
  dark as themeDark,
  light as themeLight,
  _constants as themeConstants
} from "@styles/themes";
import ToggleTheme from ".";

const { THEME_DARK, THEME_LIGHT } = themeConstants;

describe("Component: ToggleTheme", () => {
  it("should call trigger function", () => {
    const mockTrigger = jest.fn();
    const { getByRole } = render(
      <ToggleTheme themeTitle={THEME_LIGHT} trigger={mockTrigger} />
    );

    fireEvent.click(getByRole("button"));

    expect(mockTrigger).toHaveBeenCalledTimes(1);
  });

  test.each([
    ["icon-sun", THEME_DARK, themeDark],
    ["icon-moon", THEME_LIGHT, themeLight]
  ])(
    "should render icon '%s' if theme is '%s'",
    (iconIdToShow, themeTitle, theme) => {
      const { getByTestId } = render(
        <ToggleTheme themeTitle={themeTitle} trigger={() => {}} />,
        theme
      );

      expect(getByTestId(iconIdToShow)).toBeInTheDocument();
    }
  );
});
