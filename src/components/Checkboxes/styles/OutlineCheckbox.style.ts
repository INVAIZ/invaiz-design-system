import styled, { css } from "@themes/styled";
// React modules

import SvgIcon from "@components/SvgIcons/SvgIcon";
import HoverCircle from "@components/Checkboxes/HoverCircle";
// components

import {
  StyleCommonCheckbox,
  StyleCommonCheckboxInput,
} from "@components/Checkboxes/styles/CommonCheckbox.style";
// styles

export const CLASSNAME_OUTLINE_CHECK_ICON = "visible" as const;

export const StyleLabel = styled.label`
  display: inline-flex;
`;

export const StyleOutlineCheckIcon = styled(SvgIcon)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.color.grayScale.coolGray900};
  visibility: hidden;
  &.${CLASSNAME_OUTLINE_CHECK_ICON} {
    visibility: visible;
  }
`;

export const StyleOutlineCheckbox = styled(StyleCommonCheckbox)`
  border: solid 1px ${({ theme }) => theme.color.grayScale.basic.black};
`;

export const StyleOutlineCheckboxInput = styled(StyleCommonCheckboxInput)`
  &:checked {
    & + div {
      border-color: ${({ theme }) => theme.color.grayScale.basic.black};
      & > svg {
        visibility: visible;
      }
    }
  }
  &:disabled {
    & + div {
      border-color: ${({ theme }) => theme.color.system.off1};
      & > svg {
        fill: ${({ theme }) => theme.color.system.off1};
      }
    }
  }
`;

export const StyleOutlineCheckboxHover = styled(HoverCircle)`
  &:hover {
    background: ${({ theme }) => theme.color.grayScale.coolGray200};
  }
  &:active {
    background: ${({ theme }) => theme.color.grayScale.coolGray300};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      &:hover {
        background: none;
      }
      &:active {
        background: none;
      }
    `}
`;

interface StyleOutlineCheckboxTextProps {
  disabled?: boolean;
}

export const StyleCheckboxText = styled.p<StyleOutlineCheckboxTextProps>`
  display: inline-block;

  color: ${({ theme }) => theme.color.grayScale.basic.black};
  ${({ theme }) => theme.font.systems.kopub.contents7};
  line-height: ${({ theme }) => theme.font.lineHeight};
  word-break: keep-all;

  margin: 10px 0 0 0;

  vertical-align: top;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.color.system.off1};

      cursor: not-allowed;

      &:hover {
        text-decoration: none;
      }
    `};
`;
