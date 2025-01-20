import type { TextTooltipProps } from "@components/Tooltips/TextTooltip";
// interfaces

import styled, { css } from "@themes/styled";
// styles

// eslint-disable-next-line import/prefer-default-export
export const StyleTooltipText = styled.p<Pick<TextTooltipProps, "textSize">>`
  color: #fff;
  ${({ theme }) => theme.font.kopub.contents5}

  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize}px;
    `}
  
  margin: 0;
`;
