import styled from "styled-components/native";
import { TodosContent } from "./TodosContent";
import { TodosInputs } from "./TodosInputs";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/stack";

function TodosComponent() {
  const headerHeight = useHeaderHeight();

  return (
    <Container>
      <KeyboardView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight}>
        <TodosContent />
        <TodosInputs />
      </KeyboardView>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export { TodosComponent };
