import AsyncStorage from "@react-native-async-storage/async-storage";
import produce from "immer";
import _ from "lodash";
import React from "react";
import { TodosComponent, TodosContent, TodosInputs } from "../components";
import { TodosContext } from "../context";

function TodosContainer() {
  const { todos, onAppend, onUpdate, onDelete } =
    React.useContext(TodosContext);

  return (
    <TodosComponent>
      <TodosContent
        todos={todos}
        onChangeStatus={onUpdate}
        onDelete={onDelete}
      />
      <TodosInputs onPress={onAppend} />
    </TodosComponent>
  );
}

export { TodosContainer };
