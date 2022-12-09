import React from "react";
import produce from "immer";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TodosContext = React.createContext({
  todos: [],
  onAppend: () => {},
  onUpdate: () => {},
  onDelete: () => {},
});

export function TodosProvider({ children }) {
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

  const onUpdate = React.useCallback(
    (item) => {
      setTodos(
        produce(todos, (draft) => {
          const findIdx = todos.indexOf(item);
          draft[findIdx].done = !draft[findIdx].done;
        })
      );
    },
    [todos]
  );

  const onDelete = React.useCallback(
    (deleteId) => {
      setTodos(_.reject(todos, ({ id }) => id === deleteId));
    },
    [todos]
  );

  React.useEffect(() => {
    if (todos) AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    AsyncStorage.getItem("todos")
      .then((data) => {
        if (data != null) setTodos(JSON.parse(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <TodosContext.Provider value={{ todos, onAppend, onUpdate, onDelete }}>
      {children}
    </TodosContext.Provider>
  );
}
