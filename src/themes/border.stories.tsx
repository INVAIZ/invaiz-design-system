import styled from "@themes/styled";
import border from "@themes/border";

import { Story } from "@storybook/react";

interface Props {
  type: keyof typeof border;
}

const Component = (props: Props) => <Box {...props} />;

export default {
  title: "Themes/Border",
  component: Component,
};

const Template: Story<Props> = props => <Box {...props} />;

export const Selected = Template.bind({});
Selected.args = {
  type: "selected",
};

const Box = styled.div<Props>`
  width: 200px;
  height: 50px;

  border-radius: 10px;

  ${({ theme, type }) => theme.border[type]}
`;
