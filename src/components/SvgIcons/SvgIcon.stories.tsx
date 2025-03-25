import { Meta, StoryObj } from "@storybook/react";
import SvgIcon, { SvgIconProps } from "@components/SvgIcons/SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcons",
  component: SvgIcon,
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Primary: Story = {
  args: {
    icon: "Add",
  },
};
