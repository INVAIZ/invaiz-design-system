import { Story } from "@storybook/react";
import StepProgress, {
  StepProgressProps,
} from "@components/Steps/StepProgress";

export default {
  title: "Components/StepProgress",
  component: StepProgress,
};

const Template: Story<StepProgressProps> = props => <StepProgress {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  currentStep: 0,
  totalSteps: 10,
  stepWidth: 32,
  stepHeight: 4,
};
