import {
  type ReactNode,
  cloneElement,
  useState,
  useEffect,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
// React modules

import Popper from "@components/Tooltips/Popper";
// components

import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
import type { Point } from "@components/Tooltips/interfaces/Popper.interface";
// interfaces

/** `Tooltip`과 `Tooltip`이 표현될 컴포넌트 사이의 간격 */
const BETWEEN_CONTENTS_SPACE = 10 as const;
// constants

export interface TooltipBaseProps extends TooltipCommonProps {
  /** `Tooltip`에 보여질 컴포넌트입니다. */
  contents: ReactNode;
}

/**
 * 툴팁의 베이스 역할을 하는 컴포넌트입니다.
 */
const TooltipBase = ({
  contents,
  zIndex = 1000,
  borderRadiusRatio = 2,
  isArrow,
  children,
}: TooltipBaseProps) => {
  /** `Tooltip`의 표시 기준이 되는 컴포넌트 */
  const [childrenRef, setChildrenRef] = useState<HTMLElement | null>(null);

  /** 표시 여부 */
  const [visible, setVisible] = useState(false);
  /** `Tooltip`이 표시되어야 하는 위치 */
  const [point, setPoint] = useState<Point>({
    x: 0,
    y: 0,
  });

  /**
   * `Tooltip`이 렌더링되거나 위치가 변경될 때, `point`를 계산합니다.
   */
  const calculatePosition = useCallback(() => {
    if (childrenRef === null) {
      return;
    }
    const { width, height } = childrenRef.getBoundingClientRect();
    setPoint({
      x: Math.floor(width / 2),
      y: height + BETWEEN_CONTENTS_SPACE,
    });
  }, [childrenRef]);

  useEffect(() => {
    calculatePosition();
  }, [visible, calculatePosition]);

  useEffect(() => {
    const onMouseOver = () => {
      setVisible(() => true);
    };

    const onMouseLeave = () => {
      setVisible(() => false);
    };

    const resizeObserver = new ResizeObserver(calculatePosition);
    if (childrenRef !== null) {
      resizeObserver.observe(childrenRef);
    }

    childrenRef?.addEventListener("mouseover", onMouseOver);
    childrenRef?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      resizeObserver.disconnect();

      childrenRef?.removeEventListener("mouseover", onMouseOver);
      childrenRef?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [childrenRef, calculatePosition]);

  return (
    <>
      {visible &&
        createPortal(
          <Popper
            {...point}
            zIndex={zIndex}
            borderRadiusRatio={borderRadiusRatio}
            isArrow={isArrow}
          >
            {contents}
          </Popper>,
          document.body
        )}
      {cloneElement(children, {
        ref: setChildrenRef,
      })}
    </>
  );
};

export default TooltipBase;
