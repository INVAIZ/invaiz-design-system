import { css } from "@themes/styled";

/** 그림자에 사용되는 CSS */
const inverseBoxShadow = {
  /**
   * 드롭 다운 박스, 강조 버튼
   * * x0, y2, blur4 / #ffffff 35%
   * * box-shadow: 0px 2px 4px #ffffff59
   */
  dropdownEmphasis: css`
    box-shadow: 0 2px 4px #ffffff59;
  `,
  /**
   * 드롭 다운 박스 오픈
   * * x0, y4, blur10 / #ffffff 75%
   * * box-shadow: 0px 4px 10px #ffffffbf
   */
  dropdownOpen: css`
    box-shadow: 0 4px 10px #ffffffbf;
  `,
  /**
   * 알림창
   * * x0, y4, blur10 / #ffffff 35%
   * * box-shadow: 0px 4px 10px #ffffff59
   */
  alert: css`
    box-shadow: 0 4px 10px #ffffff59;
  `,
} as const;

export default inverseBoxShadow;
