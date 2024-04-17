import type { TooltipProps } from "@components/Tooltips/interfaces/Tooltip.interface";
// types

import { Story } from "@storybook/react";

import Tooltip from "@components/Tooltips/Tooltip";
import Input from "@components/Inputs/Input";

export default {
  title: "Components/Tooltips/Tooltip",
  component: Tooltip,
};

const Template: Story<TooltipProps> = props => (
  <Tooltip {...props}>
    <Input placeholder="툴팁을 위한 인풋입니다." />
  </Tooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  text: "기본적인 툴팁입니다.",
};

export const Arrow = Template.bind({});
Arrow.args = {
  text: "화살표가 있는 툴팁입니다.",
  isArrow: true,
};
