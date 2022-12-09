import { TodosContainer } from "../containers";
import { TodosProvider } from "../context";

function TodosScreen() {
  return (
    <TodosProvider>
      <TodosContainer />
    </TodosProvider>
  );
}

export { TodosScreen };
