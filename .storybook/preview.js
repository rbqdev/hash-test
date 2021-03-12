import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { ToastProvider } from "@contexts/Toast";

import {
  light as themeLight,
  dark as themeDark
} from "@styles/themes";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? themeDark : themeLight}>
      <ToastProvider>
        <Story />
      </ToastProvider>
    </ThemeProvider>
  ),
];

