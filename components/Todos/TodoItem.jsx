import { CheckIcon, CloseIcon } from "native-base";
import React from "react";
import styled from "styled-components/native";
import { IconButton } from "../../styles";
import { randomIosColors } from "../../utils";

function TodoItem({ id, todo, done, onCheck, onDelete }) {
  const refRanColor = React.useRef(randomIosColors());

  return (
    <Wrap bgColor={done ? "#ccc" : refRanColor.current}>
      <IconWrap>
        <IconButton onPress={onCheck}>
          <CheckIcon size="6" color="white" />
        </IconButton>
        <IconButton onPress={onDelete}>
          <CloseIcon size="6" color="white" />
        </IconButton>
      </IconWrap>
      <Title>
        {todo}
        {done}
      </Title>
    </Wrap>
  );
}

const Wrap = styled.View`
  position: relative;

  height: 128px;
  border-radius: 8px;

  margin: 0 0 16px;
  padding: 0 12px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ bgColor }) => bgColor};
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;

  color: #eee;
`;

const IconWrap = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;

  flex-direction: row;
`;

export { TodoItem };
