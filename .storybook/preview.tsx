import type { Story as StoryComponent } from "@storybook/react";

import React from "react";

import GlobalThemeProvider from "../src/themes/GlobalThemeProvider";
import styled, { css } from "../src/themes/styled";

export const decorators = [
  (Story: StoryComponent, context) => {
    const theme = context.globals.theme;
    switch (theme) {
      case "side-by-side": {
        return (
          <>
            <GlobalThemeProvider colorTheme="normal">
              <ThemeBlock left>
                <Story />
              </ThemeBlock>
            </GlobalThemeProvider>
            <GlobalThemeProvider colorTheme="inverse">
              <ThemeBlock>
                <Story />
              </ThemeBlock>
            </GlobalThemeProvider>
          </>
        );
      }
    }
    console.log(theme);
    return (
      <GlobalThemeProvider colorTheme={theme}>
        <ThemeBlock left fill>
          <Story />
        </ThemeBlock>
      </GlobalThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "normal",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "normal", icon: "circlehollow", title: "normal" },
        { value: "inverse", icon: "circle", title: "inverse" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ left, fill, theme }) =>
    css`
      position: absolute;
      top: 0;
      left: ${left || fill ? 0 : "50vw"};
      border-right: ${left
        ? `2px solid ${theme.color.primary.blue500}`
        : "none"};
      right: ${left ? "50vw" : 0};
      width: ${fill ? "100vw" : "50vw"};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${theme.color.grayScale.gray100};
    `
);
