# `Storybook` 설정 파일 폴더

`storybook`의 상세한 설정을 위한 파일이 포함된 폴더입니다.

## 폴더 구조

- ### 🏁 [main.ts](./main.ts)
  - `storybook`의 메인 설정 파일입니다.
  - `storybook`의 플러그인과 애드온을 설정합니다.
  - 빌드 엔진을 `Webpack`에서 `Vite`로 변경하기 위한 설정 등을 포함하고 있습니다.
  - `storybook`에도 `alias`를 적용합니다.
- ### 🏎️ [preview.tsx](./preview.tsx)
  - 모든 `storybook` 문서에 공통적으로 적용할 설정을 정의합니다.
- ### 🏎️ [preview-head.html](./preview-head.html)
  - 모든 `storybook` `HTML` 문서의 `<head>` 태그에 공통적으로 적용할 설정을 정의합니다.