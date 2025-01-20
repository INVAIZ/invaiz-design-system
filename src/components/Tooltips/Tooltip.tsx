import { type ReactNode, cloneElement, useState, useEffect } from "react";
import { createPortal } from "react-dom";
// React modules

import Popper from "@components/Tooltips/Popper";
// components

import type { TooltipCommonProps } from "@components/Tooltips/interfaces/Tooltip.interface";
// interfaces

export interface TooltipProps extends TooltipCommonProps {
  /** `Tooltip`에 보여질 컴포넌트입니다. */
  contents: ReactNode;
}

/**
 * 기본 툴팁 컴포넌트입니다.
 */
const Tooltip = ({
  contents,
  zIndex = 1000,
  borderRadiusRatio = 2,
  direction = "bottom",
  isArrow,
  children,
}: TooltipProps) => {
  /** `Tooltip`의 표시 기준이 되는 컴포넌트 */
  const [childrenRef, setChildrenRef] = useState<HTMLElement | null>(null);

  /** 표시 여부 */
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMouseOver = () => setVisible(() => true);
    const onMouseLeave = () => setVisible(() => false);

    childrenRef?.addEventListener("mouseover", onMouseOver);
    childrenRef?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      childrenRef?.removeEventListener("mouseover", onMouseOver);
      childrenRef?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [childrenRef]);

  return (
    <>
      {visible &&
        createPortal(
          <Popper
            zIndex={zIndex}
            borderRadiusRatio={borderRadiusRatio}
            direction={direction}
            isArrow={isArrow}
            baseRef={childrenRef}
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

export default Tooltip;
