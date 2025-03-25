import TextTooltip from "@components/Tooltips/TextTooltip";
import { SvgIcon } from "./modules";

const App = () => {
  return (
    <div style={{ width: "300vw", height: "200vh" }}>
      <SvgIcon icon="Add" size={24} />
      {Array.from({ length: 1000 }).map((_, i) => (
        <div style={{ textAlign: "center" }}>
          <TextTooltip
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            // direction="top"
            isArrow
          >
            {/* <Tooltip text="text" isArrow> */}
            <button>{i}번째 버튼</button>
          </TextTooltip>
        </div>
      ))}
    </div>
  );
};

export default App;
