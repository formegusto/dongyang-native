import React from "react";
import produce from "immer";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TodosContext = React.createContext({
  todos: [],
  filter: undefined, // all: undefined, done: false, undone: true
  filtered: [],
  onAppend: () => {},
  onUpdate: () => {},
  onDelete: () => {},
  onChangeFilter: () => {},
});

export function TodosProvider({ children }) {
  const [filter, setFilter] = React.useState();
  const [todos, setTodos] = React.useState(null);

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

  const filtered = React.useMemo(
    () =>
      typeof filter !== "undefined"
        ? _.filter(todos, ({ done }) => done === filter)
        : todos,
    [filter, todos]
  );

  const onChangeFilter = React.useCallback((state) => {
    setFilter(state);
  }, []);

  React.useEffect(() => {
    if (todos) AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    AsyncStorage.getItem("todos")
      .then((data) => {
        if (data != null) setTodos(JSON.parse(data));
        else setTodos([]);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        onAppend,
        onUpdate,
        onDelete,
        filter,
        filtered,
        onChangeFilter,
      }}>
      {children}
    </TodosContext.Provider>
  );
}
