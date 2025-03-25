import React from "react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { ThemeProvider } from "../src/themes/styled";
import { normal, inverse } from "../src/themes/colors/color";
import font from "../src/themes/font";
import { boxShadowMap } from "../src/themes/box-shadows/box-shadow";
import border from "../src/themes/border";
import whiteSpace from "../src/themes/whiteSpace";

const basicThemes = {
  font,
  border,
  whiteSpace,
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      normal: {
        color: normal,
        boxShadow: boxShadowMap.normal,
        ...basicThemes,
      },
      inverse: {
        color: inverse,
        boxShadow: boxShadowMap.inverse,
        ...basicThemes,
      },
    },
    defaultTheme: "normal",
    Provider: ThemeProvider,
  }),
  (Story, { globals }) => {
    switch (globals.theme) {
      case "normal":
        return (
          <div
            style={{
              position: "absolute",
              width: "100%",
              background: normal.grayScale.gray100,
              padding: 10,
              borderRadius: 4,
            }}
          >
            <Story />
          </div>
        );
      case "inverse":
        return (
          <div
            style={{
              position: "absolute",
              width: "100%",
              background: inverse.grayScale.gray100,
              padding: 10,
              borderRadius: 4,
            }}
          >
            <Story />
          </div>
        );
    }
  },
];

export const parameters = {
  themes: {
    default: "light",
    values: [
      { name: "light", value: "#fff" },
      {
        name: "dark",
        value: "#000",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
