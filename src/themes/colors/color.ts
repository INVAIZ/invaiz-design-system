import normalColor from "@themes/colors/normal-color";
import inverseColor from "@themes/colors/inverse-color";

export const normal = normalColor;
export const inverse = inverseColor;

export type Color = typeof normal | typeof inverse;

export type ColorTheme = "normal" | "inverse";

export type ColorMap = Record<ColorTheme, Color>;

export const colorMap: ColorMap = {
  normal,
  inverse,
};
