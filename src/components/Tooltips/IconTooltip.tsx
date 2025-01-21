import type SVG_ICONS from "@assets/svgs";
import type { TextTooltipProps } from "@components/Tooltips/TextTooltip";
// types

import SvgIcon from "@components/SvgIcons/SvgIcon";
import Tooltip from "@components/Tooltips/Tooltip";
// components

import styled from "@themes/styled";

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface IconTooltipProps extends TextTooltipProps {
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
  icon,
  children,
  ...restProps
}: IconTooltipProps) => (
  <Tooltip
    contents={
      <StyleTooltipText textSize={textSize}>
        <StyleSvgIcon icon={icon} size={textSize} />
        <StyleText>{text}</StyleText>
      </StyleTooltipText>
    }
    {...restProps}
  >
    {children}
  </Tooltip>
);

export const StyleSvgIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.color.grayScale.basic.white};
  vertical-align: middle;

  margin-right: 4px;
`;

export const StyleText = styled.span`
  vertical-align: middle;
`;

export default IconTooltip;
