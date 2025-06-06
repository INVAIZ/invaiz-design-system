import { render } from "@tests/test-utils";

import NestedCheckbox from "@components/Checkboxes/NestedCheckbox";
// components

import GlobalThemeProvider from "@themes/GlobalThemeProvider";
// providers

const PARENT_TEXT = "Parent Checkbox" as const;
const CHILDREN_TEXT = "Children" as const;
// constant

test("NestedCheckbox Snapshot", () => {
  const indeterminate = render(
    <GlobalThemeProvider>
      <NestedCheckbox text={PARENT_TEXT} isIndeterminate>
        <NestedCheckbox.Item text={CHILDREN_TEXT} />
      </NestedCheckbox>
    </GlobalThemeProvider>,
  );
  expect(indeterminate).toMatchSnapshot();

  const determinate = render(
    <GlobalThemeProvider>
      <NestedCheckbox text={PARENT_TEXT}>
        <NestedCheckbox.Item text={CHILDREN_TEXT} />
      </NestedCheckbox>
    </GlobalThemeProvider>,
  );
  expect(determinate).toMatchSnapshot();
});
