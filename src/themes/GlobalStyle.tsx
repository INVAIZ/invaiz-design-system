import { Global, css } from "@themes/styled";

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
