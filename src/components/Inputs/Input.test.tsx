import { render, screen } from "@tests/test-utils";

import Input from "@components/Inputs/Input";

describe("Input", () => {
  const VALUE = "filled";
  const onClear = vi.fn();

  it("clearable이 true일 때 value에 값이 없으면 내용을 지우는 버튼이 렌더링되지 않는다.", () => {
    const onChange = vi.fn();
    render(<Input value="" onClear={onClear} onChange={onChange} />);

    const button = screen.queryByRole("button");

    expect(button).toBeNull();
  });

  it("clearable이 true일 때 value에 값이 있으면 내용을 지우는 버튼이 렌더링된다.", () => {
    const onChange = vi.fn();
    render(<Input value={VALUE} onClear={onClear} onChange={onChange} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("required가 true일 때 value에 값이 없으면 required icon이 렌더링된다.", () => {
    const onChange = vi.fn();
    render(<Input value="" required onChange={onChange} />);

    const requiredIcon = screen.getByTestId("Caution");

    expect(requiredIcon).toBeInTheDocument();
  });

  it("required가 true일 때 value에 값이 있으면 required icon이 렌더링되지 않는다.", () => {
    const onChange = vi.fn();
    render(<Input value={VALUE} required onChange={onChange} />);

    const requiredIcon = screen.queryByTestId("Caution");

    expect(requiredIcon).toBeNull();
  });
});
