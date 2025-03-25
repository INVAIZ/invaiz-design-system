import { Meta, StoryObj } from "@storybook/react";
import styled from "@themes/styled";
import border from "@themes/border";

interface Props {
  type: keyof typeof border;
}

const Box = styled.div<Props>`
  width: 200px;
  height: 50px;

  border-radius: 10px;

  ${({ theme, type }) => theme.border[type]}
`;

const meta: Meta<typeof Box> = {
  title: "Themes/Border",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    type: "selected",
  },
};
