import styled from "styled-components/native";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/stack";

function TodosComponent({ children }) {
  const headerHeight = useHeaderHeight();

  return (
    <Container>
      <KeyboardView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight}>
        {children}
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
export * from "./TodosContent";
export * from "./TodosInputs";
