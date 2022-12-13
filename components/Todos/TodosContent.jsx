import _ from "lodash";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

function TodosContent({ filtered, onDelete, onUpdate }) {
  return (
    <Wrap>
      {_.map(filtered, (todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onCheck={() => onUpdate(todo)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </Wrap>
  );
}

const Wrap = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;

export { TodosContent };
