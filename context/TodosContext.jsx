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
  const [todos, setTodos] = React.useState([]);

  const onAppend = React.useCallback(
    (title) => {
      if (title !== "") {
        const newTodos = [
          ...todos,
          {
            id: new Date().getTime().toString(),
            todo: title,
            done: false,
          },
        ];
        setTodos(newTodos);

        AsyncStorage.setItem("todos", JSON.stringify(newTodos));
      }
    },
    [todos]
  );

  const onUpdate = React.useCallback(
    (item) => {
      setTodos(
        produce(todos, (draft) => {
          const findIdx = todos.indexOf(item);
          draft[findIdx].done = !draft[findIdx].done;

          AsyncStorage.setItem("todos", JSON.stringify(draft));
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
    AsyncStorage.getItem("todos")
      .then((data) => {
        if (data != null) setTodos(JSON.parse(data));
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
