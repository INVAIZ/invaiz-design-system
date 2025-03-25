import styled from "@themes/styled";
import font from "@themes/font";

const TypefaceINVAIZ = styled.p`
  ${({ theme }) => theme.font.fontFace.invaiz};
  ${({ theme, textStyle }) => theme.font.systems.invaiz[textStyle]};
`;

function INVAIZTextSystems() {
  return (
    <>
      {Object.keys(font.systems.invaiz).map(textStyle => (
        <TypefaceINVAIZ textStyle={textStyle} key={textStyle}>
          {textStyle}
        </TypefaceINVAIZ>
      ))}
    </>
  );
}

const TypefaceKopub = styled.p`
  ${({ theme }) => theme.font.fontFace.kopub};
  ${({ theme, textStyle }) => theme.font.systems.kopub[textStyle]};
`;

function KopubTextSystems() {
  return (
    <>
      {Object.keys(font.systems.kopub).map(textStyle => (
        <TypefaceKopub textStyle={textStyle} key={textStyle}>
          {textStyle}
        </TypefaceKopub>
      ))}
    </>
  );
}

const TypefaceNotoSans = styled.p`
  ${({ theme }) => theme.font.fontFace.notoSans};
  ${({ theme, textStyle }) => theme.font.systems.notoSans[textStyle]};
`;

function NotoSansTextSystems() {
  return (
    <>
      {Object.keys(font.systems.notoSans).map(textStyle => (
        <TypefaceNotoSans textStyle={textStyle} key={textStyle}>
          {textStyle}
        </TypefaceNotoSans>
      ))}
    </>
  );
}

const Point1 = styled.span`
  ${({ theme }) => theme.font.systems.emphasisText.point1}
`;

const Point2 = styled.span`
  ${({ theme }) => theme.font.systems.emphasisText.point2}
`;

const NoInputText = styled.p`
  ${({ theme }) => theme.font.systems.noInputText};
`;

const TextLink = styled.span`
  ${({ theme }) => theme.font.systems.linkText}
`;

export default {
  title: "Themes/Text",

  parameters: {
    viewMode: "docs",

    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Invaiz = {
  render: () => <INVAIZTextSystems />,
  name: "INVAIZ",
};

export const KopubWorldDotum = {
  render: () => <KopubTextSystems />,
  name: "KopubWorld Dotum",
};

export const NotoSans = {
  render: () => <NotoSansTextSystems />,
  name: "Noto Sans",
};

export const EmphasisText = {
  render: () => (
    <p>
      오늘 반찬은 <Point1>제육볶음</Point1>입니다.
    </p>
  ),

  name: "Emphasis Text",
};

export const NoInputText_ = {
  render: () => <NoInputText>Windows 2.2.1 2022.05.31</NoInputText>,
  name: "No Input Text",
};

export const TextLink_ = {
  render: () => (
    <p>
      제육 볶음의 자세한 정보를 확인하려면 <TextLink>여기</TextLink>를
      클릭하세요.
    </p>
  ),

  name: "Text Link",
};
