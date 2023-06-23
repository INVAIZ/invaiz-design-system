# 🎨 INVAIZ Design System

(주)인바이즈의 디자인을 반영한 디자인 시스템 패키지입니다.  
여러 패키지 내 일관성 있는 디자인을 적용하기 위한 목적을 가지고 있습니다.

`React`, `TypeScript` 디자인 시스템으로, `@emotion`을 사용하여 스타일을 지정합니다.

- 🔩 개발 도구는 다음과 같이 사용합니다.
  - 번들링 및 개발 서버 실행: `Vite`
  - 컴포넌트 유닛 테스트: `Jest`, `@testing-library`
  - UI 테스트: `storybook`
  - 문법 검사(정적 분석): `ESLint`
  - 코드 포맷팅: `Prettier`
  - 그 외: `Github Actions`, `chromatic`, `Netlify`
- 🖌️ 디자인 도구는 `Figma`를 사용합니다.
- `ESM` 모듈 시스템에서 사용 가능합니다.

> ⚠️ 해당 패키지를 사용하기 위해서는 사용하려는 패키지의 의존성 모듈로 `@emotion/react`, `@emotion/styled`가 포함되어 있어야 합니다.

## 👀 프로젝트 구조

- ### ☁️ [.github](./.github)
  - `Github`에서 참조하는 요소(`Github Actions`, `Issue`와 `PR` 규칙 등)이 포함하는 폴더입니다.
  - `chromatic`과 `Netlify`로 `main`에 푸쉬할 경우, 자동으로 `storybook` 문서를 빌드하여 업로드하는 스크립트 등을 선언합니다.
- ### ⚙️ [.storybook](./.storybook)
  - `storybook`과 관련된 설정을 지정하는 폴더입니다.
  - `Webpack` 기반으로 구현된 `storybook`을 `Vite`와 연결하고, `storybook` 전역적으로 사용해야 하는 문법을 지정합니다.
- ### ⚙️ [config](./config)
  - 프로젝트의 설정을 위한 추가 파일이 포함하는 폴더입니다.
- ### 🖨 `dist`
  - `Vite`로 빌드된 결과물이 포함되는 폴더입니다.
  - 외부에서 사용할 수 있도록 `ESM` 모듈로 출력됩니다.
  - 프로젝트 소스 코드는 `TypeScript`로, 외부에서 바로 사용하기 위해서는 `d.ts`가 포함된 `JavaScript`파일로 컴파일(트랜스파일)되어 있어야 합니다.
  - 즉, `dist` 폴더에 컴파일된 `JavaScript` 파일이 존재하지 않는다면 해당 패키지는 외부에서 사용할 수 없습니다.
- ### 📖 [docs](./docs)
  - 패키지 내에서 지켜야 할 규칙 등 문서화된 자료를 포함하는 폴더입니다.
- ### 📁 [public](./public)
  - `Vite`가 개발 모드로 실행될 때 `React` 애플리케이션에서 참조할 정적 파일을 포함하는 폴더입니다.
- ### 📝 **[src](./src)**
  - 프로젝트의 소스 코드가 포함하는 폴더입니다.
  - 인바이즈에서 사용하는 디자인 시스템을 모두 포함합니다.
- ### ⚙️ [.eslintrc](./.eslintrc)
  - 루트 폴더에 있는 설정을 상속 받고, `storybook` 파일에서의 설정을 지정하고 있습니다.
- ### ✂️ [.gitignore](./.gitignore)
  - `Git`에서 추적하지 않아야 하는 파일 리스트를 명시한 파일입니다.
  - `storybook` 빌드 파일을 업로드하지 않는 설정을 추가합니다.
- ### 📜 [index.html](./index.html)
  - `Vite`가 개발 모드로 실행될 때 `React` 애플리케이션이 구동될 `HTML` 엔트리 포인트 페이지입니다.
- ### ⚙️ [jest.config.ts](./jest.config.ts)
  - 테스트 환경을 구성하는 `Jest`의 설정을 명시합니다.
- ### 📦 [package.json](./package.json)
  - `invaiz-design-system` 패키지에서 사용하는 의존성 모듈을 명시합니다.
- ### ⚙️ [tsconfig.json](./tsconfig.json)
  - 루트 폴더에 있는 설정을 상속받아 `alias`를 지정하고 있습니다.
- ### ⚙️ [vite.config.ts](./vite.config.ts)
  - `SVG` 파일을 리액트 컴포넌트처럼 사용할 수 있는 `vite-plugin-svgr`가 명시되어 있습니다.
  - 외부에서 라이브러리 모듈 형태로 접근할 수 있도록 빌드하는 설정를 포함합니다.
  - 개발 서버를 열기 위한 정보를 포함하고 있습니다.

## 📑 프로젝트 환경 요구 사항

- `node`: `v16.x.x` 이상
- `yarn`: `v1.22.x` 이상

## 💬 사용 가능한 스크립트

- ### **`yarn start`**
  - `Vite` 개발 환경으로 동작합니다.
  - `/src/**/*` 내의 파일 수정 시 `Hot-Loader`가 적용됩니다.
  - `8080` 포트에서 개발 서버를 오픈합니다.
- ### **`yarn build`**
  - `Vite`를 사용해서 패키지 소스를 외부에서 사용할 수 있도록 번들링, 빌드합니다.
  - 결과물이 `d.ts`와 함께 `ESM` 모듈로 `dist` 폴더에 생성됩니다.
- ### **`yarn test`**
  - `Jest`를 사용하여 프로젝트 폴더 내의 테스트를 모두 실행합니다.
  - `*.test.js`, `*.test.ts`, `*.spec.js`, `*.spec.ts` 파일을 테스트 파일로 인식합니다.`
- ### `yarn test:watch`
  - `Jest`를 사용하여 프로젝트 폴더 내의 테스트를 모두 실행하고, 파일의 변경을 지속적으로 감시합니다.`
- ### `yarn test:snapshot`
  - `Jest`를 사용해 스냅샷 테스트를 수행합니다.
  - 스냅샷 테스트로 선언되어 있는 파일들의 컴포넌트 렌더링 상태를 확인하고, 새로 찍어냅니다.
- ### `yarn test:clear`
  - `Jest`에 캐시된 파일을 모두 삭제합니다.`
- ### `yarn eslint`
  - `src` 내의 소스 코드를 `eslint`를 사용하여 검사합니다.
- ### `yarn eslint:fix`
  - `src` 내의 소스 코드를 `eslint`를 사용하여 검사하고, 수정할 수 있는 부분은 자동으로 수정합니다.
- ### `yarn prettier`
  - `src` 내의 소스 코드를 `prettier`를 사용하여 검사합니다.
- ### `yarn prettier:fix`
  - `src` 내의 소스 코드를 `prettier`를 사용하여 검사하고, 수정할 수 있는 부분은 자동으로 수정합니다.
- ### `yarn storybook`
  - `Storybook` 페이지를 개발 환경을 오픈합니다.
  - `6006` 포트에서 페이지를 오픈합니다.
- ### `yarn build-storybook`
  - `Storybook` 페이지를 빌드합니다.
  - 빌드 완료된 파일은 `storybook-static` 폴더에 생성됩니다.
