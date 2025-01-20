import { render, fireEvent } from "@tests/test-utils";
// test utils

import TextTooltip from "@components/Tooltips/TextTooltip";
// components

import { initializeObserver } from "@components/Tooltips/__tests__/__mock__/mockResizeObserver";
// mocks

const TOOLTIP_TEXT = "text" as const;
const BUTTON_CONTENT = "This is button" as const;
// constant

describe("Tooltip", () => {
  beforeAll(() => {
    initializeObserver();
  });

  it("툴팁은 하위 요소 렌더링에 영향을 주지 않는다.", () => {
    const { getByRole } = render(
      <TextTooltip text={TOOLTIP_TEXT}>
        <button type="button">{BUTTON_CONTENT}</button>
      </TextTooltip>
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(BUTTON_CONTENT);
  });

  it("툴팁은 기본적으로 렌더링되지 않으며, 하위 요소에 `mouseover` 시 툴팁이 body 아래에 `text`를 포함하여 렌더링된 후 일정 시간이 지나면 사라진다.", async () => {
    const { getByRole, queryByRole } = render(
      <TextTooltip text={TOOLTIP_TEXT}>
        <button type="button">{BUTTON_CONTENT}</button>
      </TextTooltip>
    );

    const button = getByRole("button");
    const tooltip = queryByRole("tooltip");
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(button);

    const renderTooltip = getByRole("tooltip");
    expect(renderTooltip).toBeInTheDocument();
    expect(renderTooltip).toHaveTextContent(TOOLTIP_TEXT);

    fireEvent.mouseLeave(button);

    expect(renderTooltip).not.toBeInTheDocument();
  });

  it("툴팁의 `z-index` 기본값은 `1,000`이다.", async () => {
    const { getByRole } = render(
      <TextTooltip text={TOOLTIP_TEXT}>
        <button type="button">{BUTTON_CONTENT}</button>
      </TextTooltip>
    );
    const button = getByRole("button");

    fireEvent.mouseOver(button);

    const renderTooltip = getByRole("tooltip");
    expect(renderTooltip).toBeInTheDocument();
    expect(renderTooltip).toHaveStyle("z-index: 1000");
  });

  it("툴팁의 `z-index`는 설정할 수 있다.", async () => {
    const { getByRole } = render(
      <TextTooltip text={TOOLTIP_TEXT} zIndex={1500}>
        <button type="button">{BUTTON_CONTENT}</button>
      </TextTooltip>
    );
    const button = getByRole("button");

    fireEvent.mouseOver(button);

    const renderTooltip = getByRole("tooltip");
    expect(renderTooltip).toBeInTheDocument();
    expect(renderTooltip).toHaveStyle("z-index: 1500");
  });
});
