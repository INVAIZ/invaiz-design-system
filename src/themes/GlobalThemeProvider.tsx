import type { PropsWithChildren } from "react";
import type { EmotionTheme } from "@themes/emotion-theme";
import type { ColorTheme } from "@themes/colors/color";
// types

import { ThemeProvider } from "@emotion/react";
// React modules

import font from "@themes/font";
import { colorMap, normal, inverse } from "@themes/colors/color";
import { boxShadowMap } from "@themes/box-shadows/box-shadow";
import border from "@themes/border";
import whiteSpace from "@themes/whiteSpace";

interface GlobalThemeProviderProps {
  colorTheme?: ColorTheme;
}

export default function GlobalThemeProvider({
  children,
  colorTheme = "normal",
}: PropsWithChildren<GlobalThemeProviderProps>) {
  const theme: EmotionTheme = {
    normal,
    inverse,
    color: colorMap[colorTheme],
    currentThemeName: colorTheme,

    font,

    boxShadow: boxShadowMap[colorTheme],
    border,
    whiteSpace,
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
