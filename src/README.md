# 프로젝트 소스 폴더

## 소스 폴더 구조

- ### 🖌️ [assets](./assets)
  - 아이콘의 원본 파일 등 정적 파일을 포함하는 폴더입니다.
- ### 🔨 [components](./components)
  - 외부에서 사용할 수 있는 `React` 컴포넌트를 작성하는 영역입니다.
- ### 🧪 [tests](./tests)
  - 테스트 코드를 작성합니다.
- ### 🎨 [themes](./themes)
  - 스타일과 관련된 코드를 작성하는 영역입니다.
- ### 🕸️ [App.tsx](./App.tsx)
  - 개발 환경으로 실행될 때 렌더링되는 최상위 애플리케이션 컴포넌트입니다.
- ### 🏁 [index.tsx](./index.tsx)
  - 개발 환경의 `React` 애플리케이션 엔트리 포인트입니다.
- ### 🏁 [modules.tsx](./modules.tsx)
  - 빌드 후 외부에 노출되는 모듈의 엔트리 포인트입니다.
  - 여기에서 `export`한 요소만 외부에서 사용할 수 있습니다.
- ### 🗣️ [vite-env.d.ts](./vite-env.d.ts)
  - `Vite`의 기본 설정과 관련된 전역 타입을 선언합니다.

## 라이브러리 목록

외부에서 어떠한 요소들에 참조할 수 있는지 아래에 간략하게 정리합니다.

### 컴포넌트

- Buttons
- CheckBoxes
- Dropdowns
- Inputs
- Tabs
- Toggles
- Tooltips

### 테마(스타일)

- Color
  - Light
  - Dark
- Font
- WhiteSpace
- Style
- `styled`
  - `@emotion/styled`의 사용 방법과 유사하지만, 내부적으로 타입 선언이 지정되어 있어 테마 요소에 접근할 수 있는 스타일 지정자 요소입니다.

### 아이콘

- Add
- Add2
- AddF
- AddK
- AnchorPoint
- Angle
- Back
- Box
- Brightness
- Brush
- BrushSize
- CType
- Call
- Cancel
- Cart
- Caution
- Change
- Check
- Checkout
- Circle
- Clock
- Close
- ComeIn
- ComeOut
- Connect
- Contrast
- CounterClock
- Dark
- Data
- Delete
- Dial
- Download
- DragList
- EMail
- Export
- FadeIn
- FadeOut
- Fast
- File
- Fix
- Folder
- GraphCustom
- GraphDraw
- Half
- Hide
- HMenu
- Home
- Hour
- Hue
- Image
- Info
- Key
- Keyboard
- Keyframe
- Level
- Light
- Link
- Load
- Lock
- macOS
- Macro
- Macro2
- Map
- Maximize
- Menu
- Middle
- Minimize
- Mobile
- ModeSwitch
- Motion
- Mouse
- My
- Open
- OpenFolder
- Out
- Overlay
- PC
- Pin
- PlugIn
- Preset
- ProgramSwitch
- Remove
- Reset
- Save
- SaveNew
- ScaleDown
- ScaleUp
- Search
- Send
- Setting
- Shortcut
- Size
- Slider
- Slow
- Star
- Star2
- Subtract
- Tablet
- Temperature
- Text
- Text2
- Trigger
- ViewAll
- Wait
- Web
- Windows
- ZoomIn
- ZoomOut
 