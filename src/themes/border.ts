import { css } from "@themes/styled";

import { normal } from "@themes/colors/color";

/** 테두리에 사용되는 CSS */
const border = {
  /**
   * 일부 개체 선택 시 테두리
   * #0066FF / 내부 선 2px
   * border: solid 2px #0066FF
   */
  selected: css`
    border: solid 2px ${normal.primary.blue500};
  `,
} as const;

export default border;
