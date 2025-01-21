import normalBoxShadow from "@themes/box-shadows/normal-box-shadow";
import inverseBoxShadow from "@themes/box-shadows/inverse-box-shadow";

import { ColorTheme } from "@themes/colors/color";

export const normal = normalBoxShadow;
export const inverse = inverseBoxShadow;

export type BoxShadow = typeof normal | typeof inverse;
export type BoxShadowMap = Record<ColorTheme, BoxShadow>;

export const boxShadowMap: BoxShadowMap = {
  normal,
  inverse,
};
