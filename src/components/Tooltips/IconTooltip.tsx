import type SVG_ICONS from "@assets/svgs";
import type { TooltipProps } from "@components/Tooltips/interfaces/Tooltip.interface";
// types

import SvgIcon from "@components/SvgIcons/SvgIcon";
import TooltipBase from "@components/Tooltips/TooltipBase";
// components

import styled from "@themes/styled";

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface IconTooltipProps extends TooltipProps {
  /**
   * 텍스트 및 아이콘 사이즈를 조절합니다.
   */
  textSize?: 16 | 20 | 24;
  /**
   * 툴팁과 함께 보여질 아이콘의 키(이름)입니다.
   */
  icon: keyof typeof SVG_ICONS;
}

/**
 * 아이콘을 함께 사용하는 툴팁입니다.
 */
const IconTooltip = ({
  text,
  textSize = 16,
  zIndex,
  borderRadiusRatio,
  isArrow,
  icon,
  children,
}: IconTooltipProps) => (
  <TooltipBase
    contents={
      <StyleTooltipText textSize={textSize}>
        <StyleSvgIcon icon={icon} size={textSize} color="#fff" />
        <StyleText>{text}</StyleText>
      </StyleTooltipText>
    }
    zIndex={zIndex}
    borderRadiusRatio={borderRadiusRatio}
    isArrow={isArrow}
  >
    {children}
  </TooltipBase>
);

export const StyleSvgIcon = styled(SvgIcon)`
  vertical-align: middle;

  margin-right: 4px;
`;

export const StyleText = styled.span`
  vertical-align: middle;
`;

export default IconTooltip;
