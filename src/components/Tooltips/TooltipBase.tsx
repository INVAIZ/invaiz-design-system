import {
  type ReactNode,
  useState,
  useEffect,
  cloneElement,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
// React modules

import Popper from "@components/Tooltips/Popper";
// components

import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
import type { Point } from "@components/Tooltips/interfaces/Popper.interface";
// interfaces

const BETWEEN_CONTENTS_SPACE = 10 as const;
const HAVE_ARROW_ADDITIONAL_SPACE = 7 as const;
// constants

export interface TooltipBaseProps extends TooltipCommonProps {
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
  const [childrenRef, setChildrenRef] = useState<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState<Point>({
    x: 0,
    y: 0,
  });

  const calculatePosition = useCallback(() => {
    if (childrenRef) {
      const { x, y, width, height } = childrenRef.getBoundingClientRect();
      setPoint({
        x: x + width / 2,
        y:
          y +
          height +
          BETWEEN_CONTENTS_SPACE +
          (isArrow ? HAVE_ARROW_ADDITIONAL_SPACE : 0),
      });
    }
  }, [childrenRef, isArrow]);

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

    const resizeObserver = new ResizeObserver(entries => {
      calculatePosition();
    });

    if (childrenRef !== null) {
      resizeObserver.observe(childrenRef);
    }

    childrenRef?.addEventListener("mouseover", onMouseOver);
    childrenRef?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      childrenRef?.removeEventListener("mouseover", onMouseOver);
      childrenRef?.removeEventListener("mouseleave", onMouseLeave);
      resizeObserver.disconnect();
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
