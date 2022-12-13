import styled from "styled-components";

function DiaryDetail({ content }) {
  return (
    <Wrap>
      <ScrollWrap>
        <ContentText>{content}</ContentText>
      </ScrollWrap>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

const ScrollWrap = styled.ScrollView`
  flex: 1;
  padding: 20px 24px;
`;

const ContentText = styled.Text``;

export { DiaryDetail };
