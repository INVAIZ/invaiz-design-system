import { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "@components/SvgIcons/SvgIcon";
import SVG_ICONS from "@assets/svgs";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcons",
  component: SvgIcon,
  args: {
    icon: "Add",
  },
  argTypes: {
    icon: {
      control: { type: "select" },
      options: Object.keys(SVG_ICONS),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Primary: Story = {
  args: {
    icon: "Add",
  },
};
