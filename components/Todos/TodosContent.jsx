import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { TodosContext } from "../../context";
import { TodoItem } from "./TodoItem";

function TodosContent() {
  const { filtered, onDelete, onUpdate } = React.useContext(TodosContext);
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
