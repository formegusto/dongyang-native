import _ from "lodash";
import React from "react";
import { TodosComponent, TodosContent, TodosInputs } from "../components";
import { TodoItem } from "../components/Todos/TodoItem";

function TodosContainer() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      todo: "밥 먹기",
      done: false,
    },

    {
      id: 2,
      todo: "밥 먹기",
      done: false,
    },

    {
      id: 3,
      todo: "밥 먹기",
      done: false,
    },

    {
      id: 4,
      todo: "밥 먹기",
      done: false,
    },
  ]);
  const [input, setInput] = React.useState("");

  const onChange = React.useCallback((value) => {
    setInput(value);
  }, []);

  return (
    <TodosComponent>
      <TodosContent>
        {_.map(todos, (todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        {_.map(todos, (todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        {_.map(todos, (todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </TodosContent>
      <TodosInputs input={input} onChange={onChange} />
    </TodosComponent>
  );
}

export { TodosContainer };
