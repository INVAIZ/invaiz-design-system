import { css } from "@themes/styled";

/** 그림자에 사용되는 CSS */
const normalBoxShadow = {
  /**
   * 드롭 다운 박스, 강조 버튼
   * * x0, y2, blur4 / #000000 35%
   * * box-shadow: 0px 2px 4px #00000059
   */
  dropdownEmphasis: css`
    box-shadow: 0 2px 4px #00000059;
  `,
  /**
   * 드롭 다운 박스 오픈
   * * x0, y4, blur10 / #000000 75%
   * * box-shadow: 0px 4px 10px #000000bf
   */
  dropdownOpen: css`
    box-shadow: 0 4px 10px #000000bf;
  `,
  /**
   * 알림창
   * * x0, y4, blur10 / #000000 35%
   * * box-shadow: 0px 4px 10px #00000059
   */
  alert: css`
    box-shadow: 0 4px 10px #00000059;
  `,
} as const;

export default normalBoxShadow;
