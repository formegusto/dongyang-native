import styled, { css } from "styled-components";

function JusoItem({ zipNo, roadAddr, jibunAddr }) {
  return (
    <Wrap>
      <ZipWrap>
        <Text fontSize={12}>{zipNo}</Text>
      </ZipWrap>
      <AddrWrap>
        <Text fontSize={12} numberOfLines={1}>
          {roadAddr}
        </Text>
        <Text fontSize={12} numberOfLines={1}>
          {jibunAddr}
        </Text>
      </AddrWrap>
    </Wrap>
  );
}

const Wrap = styled.View`
  flex-direction: row;

  padding: 12px 0;
`;

const ZipWrap = styled.View`
  width: 64px;
  align-items: center;
  justify-content: center;
`;
const AddrWrap = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css`
          font-size: 14px;
        `}
`;

export default JusoItem;
