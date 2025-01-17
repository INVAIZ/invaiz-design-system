import { type PropsWithChildren, useState, useEffect, useMemo } from "react";
// React modules

import {
  type TooltipCommonProps,
  TOOLTIP_BORDER_RADIUS_UNIT,
} from "@components/Tooltips/interfaces/Tooltip.interface";
import type { Point } from "@components/Tooltips/interfaces/Popper.interface";
// interfaces

import styled, { css } from "@themes/styled";
// styles

const OUTLINE_PIXEL = 10 as const;
const PADDING_PIXEL = 8 as const;
const MAX_WIDTH_DIFF = OUTLINE_PIXEL * 2 + PADDING_PIXEL * 2;
/** 화살표가 포함될 경우 필요한 추가 간격 */
const ARROW_HEIGHT = 7 as const;
const THRESHOLDS = Array.from({ length: 1001 }, (_, i) => i * 0.001);
// constants

type PopperBaseProps = Required<Pick<TooltipCommonProps, "borderRadiusRatio">>;
type PopperProps = PropsWithChildren<
  PopperBaseProps & Pick<TooltipCommonProps, "zIndex" | "isArrow"> & Point
>;
// types

/**
 * 실질적으로 `Tooltip`을 `DOM`에 표현하는 컴포넌트입니다.
 */
const Popper = ({
  x: centerX,
  y,
  zIndex,
  borderRadiusRatio,
  isArrow,
  children,
}: PopperProps) => {
  /** `Popper`의 `ref` */
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);

  /** 스크롤 상태 */
  const [scrollAmount, setScrollAmount] = useState<Point>({
    x: 0,
    y: 0,
  });

  const boundingBox = useMemo(
    () =>
      popperRef?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 },
    [popperRef, centerX, y]
  );

  const tX = centerX - boundingBox.width / 2;
  const tXBar = Math.min(
    Math.max(scrollAmount.x + OUTLINE_PIXEL, tX),
    window.innerWidth -
      (boundingBox.width + MAX_WIDTH_DIFF) +
      scrollAmount.x +
      OUTLINE_PIXEL
  );
  const arrowX = Math.min(
    Math.max(centerX - tXBar, PADDING_PIXEL),
    boundingBox.width - (OUTLINE_PIXEL + PADDING_PIXEL)
  );

  useEffect(() => {
    const calculateDelta = () => {
      if (popperRef === null) {
        return;
      }
      // const { x: popperX, width } = popperRef.getBoundingClientRect();
      // if (x - width / 2 < OUTLINE_PIXEL) {
      //   setBoundingBox(prev => ({
      //     ...prev,
      //     x: OUTLINE_PIXEL - (x - width / 2),
      //   }));
      // } else if (x + width > window.innerWidth - OUTLINE_PIXEL) {
      //   setBoundingBox(prev => ({
      //     ...prev,
      //     x: window.innerHeight - OUTLINE_PIXEL - (x + width / 2),
      //   }));
      // }
    };

    calculateDelta();

    const intersectionObserver = new IntersectionObserver(
      entry => {
        setScrollAmount({
          x: window.scrollX,
          y: window.scrollY,
        });
      },
      {
        threshold: THRESHOLDS,
        rootMargin: `${OUTLINE_PIXEL}px`,
      }
    );
    const resizeObserver = new ResizeObserver(calculateDelta);
    if (popperRef) {
      resizeObserver.observe(popperRef);
      intersectionObserver.observe(popperRef);
    }
    return () => {
      if (popperRef) {
        resizeObserver.unobserve(popperRef);
        intersectionObserver.unobserve(popperRef);
      }
    };
  }, [popperRef, centerX, y]);

  return (
    <Wrapper
      role="tooltip"
      ref={setPopperRef}
      style={{
        zIndex,
      }}
      x={tXBar}
      y={y + (isArrow ? ARROW_HEIGHT : 0)}
    >
      <ContentBox borderRadiusRatio={borderRadiusRatio}>{children}</ContentBox>
      {isArrow && <Arrow x={arrowX} />}
    </Wrapper>
  );
};

export default Popper;

const Wrapper = styled.div<Point>`
  position: absolute;

  max-width: calc(100vw - ${MAX_WIDTH_DIFF}px);

  color: ${({ theme }) => theme.color.grayScale.coolGray800}e6; // 투명도 90%

  inset: 0 auto auto 0;

  ${({ x, y }) =>
    css`
      transform: translate(${x}px, ${y}px);
    `};
`;

const ContentBox = styled.div<PopperBaseProps>`
  padding: 8px;

  background: currentColor;

  border-radius: ${({ borderRadiusRatio }) =>
    borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT}px;

  ${({ theme }) => theme.style.boxShadow.dropdownEmphasis};

  overflow: hidden;
`;

const Arrow = styled.div<{ x: number }>`
  position: absolute;
  top: -${ARROW_HEIGHT}px;
  left: -4px;

  display: flex;
  width: 8px;
  height: ${ARROW_HEIGHT}px;

  transform: translateX(${({ x }) => Math.max(x, 12)}px);

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 5.5px;
    left: 50%;

    display: block;
    width: 7.35px;
    height: 7.35px;

    background: currentColor;

    transform: translateX(-50%) scaleY(${18 / (Math.sqrt(2) * 7.35)})
      rotate(45deg);
  }
`;
