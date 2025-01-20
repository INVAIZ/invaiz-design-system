import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
// types

import Tooltip from "@components/Tooltips/Tooltip";
// interfaces

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface TextTooltipProps extends TooltipCommonProps {
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
 * 텍스트만 포함하는 툴팁입니다.
 */
const TextTooltip = ({
  text,
  textSize,
  children,
  ...restProps
}: TextTooltipProps) => (
  <Tooltip
    contents={<StyleTooltipText textSize={textSize}>{text}</StyleTooltipText>}
    {...restProps}
  >
    {children}
  </Tooltip>
);

export default TextTooltip;
