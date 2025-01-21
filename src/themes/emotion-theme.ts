import type { Color, ColorMap, ColorTheme } from "@themes/colors/color";
import type font from "@themes/font";

import type { BoxShadow } from "@themes/box-shadows/box-shadow";
import type border from "@themes/border";
import type whiteSpace from "@themes/whiteSpace";

export interface EmotionTheme extends ColorMap {
  /** 모든 테마의 Color */
  color: Color;
  /** 현재 테마의 이름 */
  currentThemeName: ColorTheme;

  /** font size, weight 등의 정보 접근자 */
  font: typeof font;

  /** 그림자 */
  boxShadow: BoxShadow;
  /** 테두리 */
  border: typeof border;
  /** 여백 */
  whiteSpace: typeof whiteSpace;
}
