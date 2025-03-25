import styled from "@themes/styled";

export interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepWidth?: number;
  stepHeight?: number;
}

interface StepBoxProps {
  isActive: boolean;
  width: number;
  height: number;
}

export default function StepProgress({
  currentStep,
  totalSteps,
  stepWidth = 32,
  stepHeight = 8,
}: StepProgressProps) {
  return (
    <StepProgressContainer>
      {Array.from({ length: totalSteps }, (_, index) => index).map(step => (
        <StepBox
          key={step}
          isActive={step === currentStep}
          width={stepWidth}
          height={stepHeight}
        />
      ))}
    </StepProgressContainer>
  );
}

const StepBox = styled.div<StepBoxProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary.blue500 : theme.color.grayScale.coolGray200};
  border-radius: 5px;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease-in-out;
`;

const StepProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
