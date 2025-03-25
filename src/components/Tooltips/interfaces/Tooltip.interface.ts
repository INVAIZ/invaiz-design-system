import type { ReactElement } from "react";
// React modules

export interface TooltipCommonProps {
  /**
   * 툴팁의 `z-index` 높이를 조절합니다.
   *
   * * 기본값은 `1000`입니다.
   */
  zIndex?: number;
  /**
   * 모서리 라운드 값을 조정합니다.
   *
   * * 5의 배수로 적용됩니다.
   */
  borderRadiusRatio?: number;
  /**
   * 툴팁의 방향을 설정합니다.
   *
   * * 기본값은 `bottom`입니다.
   */
  direction?: "top" | "bottom";
  /**
   * 툴팁의 위치를 가리키는 화살표 사용 유무입니다.
   */
  isArrow?: boolean;
  /**
   * 퉅팁을 적용하기 위한 단독 콘텐츠(단일 요소)입니다.
   */
  children: ReactElement<any>;
}
