import type { TextTooltipProps } from "@components/Tooltips/TextTooltip";
// interfaces

import styled, { css } from "@themes/styled";
// styles

export const StyleTooltipText = styled.p<Pick<TextTooltipProps, "textSize">>`
  ${({ theme }) => theme.font.systems.kopub.contents5}

  line-height: 1.2;

  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize}px;
    `}

  margin: 0;
`;
