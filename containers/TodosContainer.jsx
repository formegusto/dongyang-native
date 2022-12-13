import _ from "lodash";
import React from "react";
import {
  TodosComponent,
  TodosContent,
  TodosInputs,
  TodosFilter,
} from "../components";
import { TodosContext } from "../context";

function TodosContainer() {
  const { filter, filtered, onChangeFilter, onDelete, onUpdate, onAppend } =
    React.useContext(TodosContext);

  return (
    <TodosComponent>
      <TodosFilter {...{ filter, onChangeFilter }} />
      <TodosContent {...{ filtered, onDelete, onUpdate }} />
      <TodosInputs onAppend={onAppend} />
    </TodosComponent>
  );
}

export { TodosContainer };
