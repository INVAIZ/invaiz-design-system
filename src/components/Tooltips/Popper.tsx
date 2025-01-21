import { type PropsWithChildren, useState, useEffect } from "react";
// React modules

import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
import type {
  Point,
  Rect,
} from "@components/Tooltips/interfaces/Popper.interface";
// interfaces

import styled, { css } from "@themes/styled";
// styles

/** `Tooltip`이 screen으로부터 떨어져야 하는 최소 거리 */
const OUTLINE_PIXEL = 10 as const;
/** `Tooltip` 내부의 `padding` 값  */
const PADDING_PIXEL = 10 as const;
/** `Tooltip` 최대 넓이에서 위의 두 기준 거리를 뺌 */
const MAX_WIDTH_DIFF = OUTLINE_PIXEL * 2 + PADDING_PIXEL * 2;
/** 화살표가 포함될 경우 필요한 추가 간격 */
const ARROW_HEIGHT = 7 as const;
/** `Tooltip`과 `Tooltip`이 렌더링 될 요소간의 최소 간격 */
const BETWEEN_CONTENTS_SPACE = 16 as const;
const TOOLTIP_BORDER_RADIUS_UNIT = 5 as const;
const THRESHOLDS = Array.from({ length: 1001 }, (_, i) => i * 0.001);
/** `Tooltip`과 `Tooltip`이 표현될 컴포넌트 사이의 간격 */
// constants

type PopperBaseProps = Required<
  Pick<TooltipCommonProps, "borderRadiusRatio" | "direction">
>;
type PopperProps = PropsWithChildren<
  PopperBaseProps &
    Omit<TooltipCommonProps, "borderRadiusRatio" | "direction" | "children"> & {
      /** `Tooltip`이 표현되어야 할 자식 요소의 사이즈 */
      baseRef: HTMLElement | null;
    }
>;
// types

/**
 * 실질적으로 `Tooltip`을 `DOM`에 표현하는 컴포넌트입니다.
 */
const Popper = ({
  baseRef,

  zIndex,
  borderRadiusRatio,
  direction: initialDirection,
  isArrow,
  children,
}: PopperProps) => {
  /** `Popper`의 `ref` */
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);
  /** 실제 `Tooltip`이 뜰 방향, 현재 뷰 포트 위치에 따라 변경될 수 있음 */
  const [direction, setDirection] = useState(initialDirection);

  useEffect(() => {
    const reposition = () => {
      if (popperRef === null) {
        return;
      }
      const baseRect = getRectOrDefault(baseRef);
      const popperRect = getRectOrDefault(popperRef);

      /** 뷰 포트 기준으로 `Tooltip` 중심점 설정 */
      const centerPointFromBaseByViewport: Point = {
        x: baseRect.x + Math.floor(baseRect.width / 2),
        y:
          baseRect.y +
          (direction === "top"
            ? -BETWEEN_CONTENTS_SPACE
            : baseRect.height + BETWEEN_CONTENTS_SPACE),
      };

      const y =
        window.scrollY +
        centerPointFromBaseByViewport.y +
        (direction === "top" ? -popperRect.height : 0) +
        (isArrow ? (direction === "top" ? -ARROW_HEIGHT : ARROW_HEIGHT) : 0);

      if (
        popperRect.height +
          OUTLINE_PIXEL +
          ARROW_HEIGHT +
          BETWEEN_CONTENTS_SPACE >
        window.innerHeight
      ) {
        console.warn("innerHeight is too small to show tooltip");
      } else if (direction === "top") {
        if (
          centerPointFromBaseByViewport.y <
          popperRect.height +
            OUTLINE_PIXEL +
            ARROW_HEIGHT +
            BETWEEN_CONTENTS_SPACE
        ) {
          setDirection("bottom");
          return;
        }
      } else {
        if (
          centerPointFromBaseByViewport.y >
          window.innerHeight -
            popperRect.height -
            OUTLINE_PIXEL -
            ARROW_HEIGHT -
            BETWEEN_CONTENTS_SPACE
        ) {
          setDirection("top");
          return;
        }
      }

      /** 스크린의 위치를 벗어나지 않는 `x` 좌표 설정 */
      const xInScreen = Math.min(
        Math.max(
          // 왼쪽 위 모서리 좌표 계산: 중심점에서 `Tooltip`의 절반 넓이를 뺌
          centerPointFromBaseByViewport.x - Math.floor(popperRect.width / 2),
          // 왼쪽 위 모서리 좌표가 `OUTLINE_PIXEL`보다 작아지지 않도록 함
          OUTLINE_PIXEL
        ),
        // 오른쪽 아래 모서리 좌표가 `window.innerWidth + OUTLINE_PIXEL`보다 커지지 않도록 함
        window.innerWidth + OUTLINE_PIXEL - (popperRect.width + MAX_WIDTH_DIFF)
      );

      /** 화살표의 위치 설정 */
      const xArrow = Math.min(
        // 화살표의 위치가 `popupRect`를 벗어나지 않음
        Math.max(centerPointFromBaseByViewport.x - xInScreen, PADDING_PIXEL),
        popperRect.width - (OUTLINE_PIXEL + PADDING_PIXEL)
      );

      const x = window.scrollX + xInScreen;

      popperRef.style.setProperty("transform", `translate(${x}px, ${y}px)`);
      // 첫 렌더링 시에 `reposition` 함수 호출 후 보이도록 함
      popperRef.style.setProperty("visibility", `visible`);

      arrowRef?.style.setProperty(
        "transform",
        `translateX(${Math.max(xArrow, 12)}px)`
      );
    };

    reposition();

    const intersectionObserver = new IntersectionObserver(reposition, {
      threshold: THRESHOLDS,
      rootMargin: `${OUTLINE_PIXEL}px`,
    });
    const resizeObserver = new ResizeObserver(reposition);
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
  }, [popperRef, arrowRef, baseRef, direction, isArrow]);

  return (
    <Wrapper
      role="tooltip"
      ref={setPopperRef}
      style={{
        zIndex,
      }}
    >
      <ContentBox borderRadiusRatio={borderRadiusRatio} direction={direction}>
        <Contents>{children}</Contents>
      </ContentBox>
      {isArrow && <Arrow ref={setArrowRef} direction={direction} />}
    </Wrapper>
  );
};

export default Popper;

/**
 * `HTMLElement`의 `Rect` 정보를 가져오거나 기본값을 반환합니다.
 */
function getRectOrDefault(element: HTMLElement | null): Rect {
  if (element === null) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  return element.getBoundingClientRect();
}

const Wrapper = styled.div`
  position: absolute;

  max-width: calc(100vw - ${MAX_WIDTH_DIFF}px);

  color: ${({ theme }) => theme.color.grayScale.coolGray800}e6; // 투명도 90%

  inset: 0 auto auto 0;

  visibility: hidden;
`;

const ContentBox = styled.div<PopperBaseProps>`
  padding: ${PADDING_PIXEL}px;

  background: currentColor;

  border-radius: ${({ borderRadiusRatio }) =>
    borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT}px;

  ${({ theme }) => theme.boxShadow.dropdownEmphasis};

  overflow: hidden;
`;

const Contents = styled.div`
  color: ${({ theme }) => theme.color.grayScale.gray200};
`;

const Arrow = styled.span<{
  direction: TooltipCommonProps["direction"];
}>`
  position: absolute;
  ${({ direction }) => css`
    ${direction === "top"
      ? css`
          bottom: -${ARROW_HEIGHT}px;
        `
      : css`
          top: -${ARROW_HEIGHT}px;
        `}
  `}
  left: -4px;

  display: flex;
  width: 8px;
  height: ${ARROW_HEIGHT}px;

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: ${({ direction }) => (direction === "top" ? -5.5 : 5.5)}px;
    left: 50%;

    display: block;
    width: 7.35px;
    height: 7.35px;

    background: currentColor;

    transform: translateX(-50%) scaleY(${18 / (Math.sqrt(2) * 7.35)})
      rotate(45deg);
  }
`;
