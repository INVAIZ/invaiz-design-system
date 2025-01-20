import type { TextTooltipProps } from "@components/Tooltips/TextTooltip";
// types

import Tooltip from "@components/Tooltips/Tooltip";
// components

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface ImageTooltipProps extends TextTooltipProps {
  /**
   * 툴팁과 함께 보여질 이미지의 경로(이름)입니다.
   */
  imageUrl: string;
}

/**
 * 이미지를 함께 사용하는 툴팁입니다.
 */
const ImageTooltip = ({
  text,
  textSize,
  imageUrl,
  children,
  ...restProps
}: ImageTooltipProps) => (
  <Tooltip
    contents={
      <StyleTooltipText textSize={textSize}>
        <img src={imageUrl} alt="TooltipImage" />
        {text}
      </StyleTooltipText>
    }
    {...restProps}
  >
    {children}
  </Tooltip>
);

export default ImageTooltip;
