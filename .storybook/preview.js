import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  light as themeLight
} from "@styles/themes";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeLight}>
      <Story />
    </ThemeProvider>
  ),
];

