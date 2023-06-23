import type { CheckboxDefaultProps } from "@components/Checkboxes/interfaces/Checkbox.interface";
// types

import styled, { css } from "@themes/styled";
// React modules

function Toggle({ checked, onChange, disabled }: CheckboxDefaultProps) {
  return (
    <Label>
      <Input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <Span />
    </Label>
  );
}

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + span {
    background: ${({ theme, disabled }) =>
      disabled ? theme.color.system.off3 : theme.color.primary.blue500};
  }
  &:checked + span:before {
    transform: translateX(24px);
  }
  ${({ disabled }) =>
    disabled &&
    css`
      & + span {
        cursor: unset;
      }
    `}
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.normal.grayScale.coolGray200};
  border-radius: 12px;
  transition: background 0.15s;
  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    background: ${({ theme }) => theme.normal.grayScale.basic.white};
    border-radius: 100%;
    transition: transform 0.15s;
  }
`;

export default Toggle;
