import React from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import { light } from "@styles/themes";

export default function renderWithTheme(
  children: React.ReactNode,
  theme = light
): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
