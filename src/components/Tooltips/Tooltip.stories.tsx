import { Story } from "@storybook/react";

import Tooltip, { type TooltipProps } from "@components/Tooltips/Tooltip";
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
  contents: (
    <div>
      <p>두 줄로 적기</p>
      <p style={{ color: "red" }}>가능합니다.</p>
    </div>
  ),
};
