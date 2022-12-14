import React from "react";
import styled from "styled-components";
import { ReativeContainer } from "../../../styles";
import Input from "../Input";
import NavButton from "../NavButton";

function DiaryWrite({ onAppend }) {
  const [input, setInput] = React.useState({ content: "", date: "" });
  const onChange = React.useCallback((name, value) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Wrap>
      <ReativeContainer>
        <Input input={input} onChange={onChange} />
        <NavButton onPress={() => onAppend(input)}>일기 저장</NavButton>
      </ReativeContainer>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryWrite };
