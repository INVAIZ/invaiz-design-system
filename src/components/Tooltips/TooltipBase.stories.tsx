import { Story } from "@storybook/react";

import TooltipBase, {
  type TooltipBaseProps,
} from "@components/Tooltips/TooltipBase";
import Input from "@components/Inputs/Input";

export default {
  title: "Components/Tooltips/TooltipBase",
  component: TooltipBase,
};

const Template: Story<TooltipBaseProps> = props => (
  <TooltipBase {...props}>
    <Input placeholder="툴팁을 위한 인풋입니다." />
  </TooltipBase>
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
