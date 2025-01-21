import styled from "@themes/styled";
import { BoxShadow } from "@themes/box-shadows/box-shadow";

import { Story } from "@storybook/react";

interface Props {
  shadow: keyof BoxShadow;
}

const Component = (props: Props) => <Box {...props} />;

export default {
  title: "Themes/Box Shadows",
  component: Component,
};

const Template: Story<Props> = props => <Box {...props} />;

export const DropdownEmphasis = Template.bind({});
DropdownEmphasis.args = {
  shadow: "dropdownEmphasis",
};
export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  shadow: "dropdownOpen",
};
export const Alert = Template.bind({});
Alert.args = {
  shadow: "alert",
};

const Box = styled.div<Props>`
  width: 200px;
  height: 200px;

  border-radius: 10px;

  ${({ theme, shadow }) => theme.boxShadow[shadow]}
`;
