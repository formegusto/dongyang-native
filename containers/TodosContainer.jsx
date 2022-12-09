import AsyncStorage from "@react-native-async-storage/async-storage";
import produce from "immer";
import _ from "lodash";
import React from "react";
import {
  TodosComponent,
  TodosContent,
  TodosInputs,
  TodosFilter,
} from "../components";

function TodosContainer() {
  return (
    <TodosComponent>
      <TodosFilter />
      <TodosContent />
      <TodosInputs />
    </TodosComponent>
  );
}

export { TodosContainer };
