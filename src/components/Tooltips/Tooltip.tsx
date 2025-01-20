import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
// types

import TooltipBase from "@components/Tooltips/TooltipBase";
// interfaces

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface TooltipProps extends TooltipCommonProps {
  /**
   * 툴팁에 보여질 내용(텍스트)입니다.
   */
  text: string;
  /**
   * 텍스트 사이즈를 조절합니다.
   */
  textSize?: number;
}

/**
 * 기본적인 툴팁입니다.
 */
const Tooltip = ({ text, textSize, children, ...restProps }: TooltipProps) => (
  <TooltipBase
    contents={<StyleTooltipText textSize={textSize}>{text}</StyleTooltipText>}
    {...restProps}
  >
    {children}
  </TooltipBase>
);

export default Tooltip;
