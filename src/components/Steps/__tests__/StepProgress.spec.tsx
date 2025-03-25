import { render } from "@tests/test-utils";
import StepProgress from "@components/Steps/StepProgress";
import GlobalThemeProvider from "@themes/GlobalThemeProvider";

const renderWidthTheme = (ui: React.ReactNode) => {
  return render(<GlobalThemeProvider>{ui}</GlobalThemeProvider>);
};

const mockTheme = {
  color: {
    primary: { blue500: "#0066ff" },
    grayScale: { coolGray200: "#ccd7eb" },
  },
};

describe("StepProgress", () => {
  it("정확한 개수의 단계를 렌더링해야 합니다", () => {
    const { container } = renderWidthTheme(
      <StepProgress currentStep={0} totalSteps={5} />,
    );
    const stepProgressContainer = container.firstChild as Element;

    expect(stepProgressContainer.childNodes).toHaveLength(5);
  });

  it("현재 단계를 강조해야 합니다", () => {
    const { container } = renderWidthTheme(
      <StepProgress currentStep={3} totalSteps={6} />,
    );

    const steps = container.firstChild?.childNodes as NodeListOf<ChildNode>;

    const activeStep = steps[3];
    const inactiveStep = steps[0];

    expect(activeStep).toHaveStyle({
      backgroundColor: mockTheme.color.primary.blue500,
    });
    expect(inactiveStep).toHaveStyle({
      backgroundColor: mockTheme.color.grayScale.coolGray200,
    });
  });
});

test("StepProgress Snapshot", () => {
  const currentStep = render(
    <GlobalThemeProvider>
      <StepProgress currentStep={0} totalSteps={5} />
    </GlobalThemeProvider>,
  );
  expect(currentStep).toMatchSnapshot();

  const color = render(
    <GlobalThemeProvider>
      <StepProgress currentStep={3} totalSteps={6} />
    </GlobalThemeProvider>,
  );
  expect(color).toMatchSnapshot();
});
