import type { TooltipProps } from "@components/Tooltips/interfaces/Tooltip.interface";

// types

import TooltipBase from "@components/Tooltips/TooltipBase";
// components

import { StyleTooltipText } from "@components/Tooltips/styles/Tooltip.style";
// styles

export interface ImageTooltipProps extends TooltipProps {
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
  zIndex,
  borderRadiusRatio,
  isArrow,
  imageUrl,
  children,
}: ImageTooltipProps) => (
  <TooltipBase
    contents={
      <StyleTooltipText textSize={textSize}>
        <img src={imageUrl} alt="TooltipImage" />
        {text}
      </StyleTooltipText>
    }
    zIndex={zIndex}
    borderRadiusRatio={borderRadiusRatio}
    isArrow={isArrow}
  >
    {children}
  </TooltipBase>
);

export default ImageTooltip;
