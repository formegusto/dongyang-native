import React from "react";
import styled from "styled-components";
import { ReativeContainer } from "../../styles";
import { DiaryInput } from "./DiaryInput";
import { NavButton } from "./NavButton";

function DiaryUpdate({ id, content, date, onUpdate }) {
  const [input, setInput] = React.useState({ content, date });

  const onChange = React.useCallback((name, value) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Wrap>
      <ReativeContainer>
        <DiaryInput input={input} onChange={onChange} />
        <NavButton onPress={() => onUpdate(id, input)}>일기 수정</NavButton>
      </ReativeContainer>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryUpdate };
