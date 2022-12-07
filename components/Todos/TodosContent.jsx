import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

function TodosContent({ todos, onChangeStatus, onDelete }) {
  return (
    <Wrap>
      {_.map(todos, (todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onCheck={() => onChangeStatus(todo)}
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
