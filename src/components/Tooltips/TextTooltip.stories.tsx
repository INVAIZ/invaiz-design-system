import { Story } from "@storybook/react";

import TextTooltip, {
  type TextTooltipProps,
} from "@components/Tooltips/TextTooltip";
import Input from "@components/Inputs/Input";

export default {
  title: "Components/Tooltips/TextTooltip",
  component: TextTooltip,
};

const Template: Story<TextTooltipProps> = props => (
  <TextTooltip {...props}>
    <Input placeholder="툴팁을 위한 인풋입니다." />
  </TextTooltip>
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
