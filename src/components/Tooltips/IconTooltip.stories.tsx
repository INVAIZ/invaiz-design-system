import type { ComponentProps } from "react";
// types

import { Story } from "@storybook/react";

import IconTooltip from "@components/Tooltips/IconTooltip";
import Input from "@components/Inputs/Input";

export default {
  title: "Components/Tooltips/IconTooltip",
  component: IconTooltip,
};

const Template: Story<ComponentProps<typeof IconTooltip>> = props => (
  <IconTooltip {...props}>
    <Input placeholder="툴팁을 위한 인풋입니다." />
  </IconTooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  text: "기본적인 툴팁입니다.",
  icon: "Add",
};
