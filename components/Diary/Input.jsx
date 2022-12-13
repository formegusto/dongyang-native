import React from "react";
import styled from "styled-components";

function Input({ input, onChange }) {
  return (
    <Wrap>
      <ContentTitle>날짜</ContentTitle>
      <TitleInput
        value={input.date}
        placeholder="YYYY-MM-DD 형식으로 입력해주세요."
        onChangeText={(value) => onChange("date", value)}
      />
      <ContentTitle>내용</ContentTitle>
      <ContentInput
        value={input.content}
        placeholder="오늘은 무엇을 하셨나요?"
        multiline
        numberOfLines={4}
        onChangeText={(value) => onChange("content", value)}
      />
    </Wrap>
  );
}

const Wrap = styled.ScrollView`
  flex: 1;
  padding: 48px 24px;
`;
const ContentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin: 0 0 6px;
`;
const TitleInput = styled.TextInput`
  border: 1px solid #666;
  font-size: 16px;
  margin: 0 0 16px;
  height: 40px;

  padding: 0 8px;
`;
const ContentInput = styled.TextInput`
  border: 1px solid #666;
  font-size: 16px;
  height: 192px;
  padding: 12px 8px;
`;

export default Input;
