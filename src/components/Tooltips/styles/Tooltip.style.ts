import type { TooltipProps } from "@components/Tooltips/Tooltip";
// interfaces

import styled, { css } from "@themes/styled";
// styles

// eslint-disable-next-line import/prefer-default-export
export const StyleTooltipText = styled.p<Pick<TooltipProps, "textSize">>`
  color: #fff;
  ${({ theme }) => theme.font.kopub.contents5}

  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize}px;
    `}
  
  margin: 0;
`;
