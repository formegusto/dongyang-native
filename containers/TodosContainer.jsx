import AsyncStorage from "@react-native-async-storage/async-storage";
import produce from "immer";
import _ from "lodash";
import React from "react";
import { TodosComponent, TodosContent, TodosInputs } from "../components";

function TodosContainer() {
  const [todos, setTodos] = React.useState([]);

  const onAppend = React.useCallback((title) => {
    if (title !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: new Date().getTime().toString(),
          todo: title,
          done: false,
        },
      ]);
    }
  }, []);

  const onChangeStatus = React.useCallback(
    (item) => {
      setTodos(
        produce(todos, (draft) => {
          const idx = todos.indexOf(item);
          draft[idx].done = !draft[idx].done;
        })
      );
    },
    [todos]
  );

  const onDelete = React.useCallback(
    (_id) => {
      setTodos(_.reject(todos, ({ id }) => id === _id));
    },
    [todos]
  );

  React.useEffect(() => {
    if (todos.length > 0) AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    AsyncStorage.getItem("todos")
      .then((data) => {
        if (data !== null) setTodos(JSON.parse(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <TodosComponent>
      <TodosContent
        todos={todos}
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
      />
      <TodosInputs onPress={onAppend} />
    </TodosComponent>
  );
}

export { TodosContainer };
