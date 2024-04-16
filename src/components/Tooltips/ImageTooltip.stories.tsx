import type { ComponentProps } from "react";
// types

import { Story } from "@storybook/react";

import ImageTooltip from "@components/Tooltips/ImageTooltip";
import Input from "@components/Inputs/Input";

export default {
  title: "Components/Tooltips/ImageTooltip",
  component: ImageTooltip,
};

const Template: Story<ComponentProps<typeof ImageTooltip>> = props => (
  <ImageTooltip {...props}>
    <Input placeholder="툴팁을 위한 인풋입니다." />
  </ImageTooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://cdn.imweb.me/thumbnail/20231211/36694a13b2dff.png",
};
