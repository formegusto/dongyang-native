import styled from "styled-components/native";
import { randomIosColors } from "../../utils";

function TodoItem({ id, todo, done }) {
  return (
    <Wrap bgColor={randomIosColors()}>
      <Title>{todo}</Title>
    </Wrap>
  );
}

const Wrap = styled.View`
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

export { TodoItem };
