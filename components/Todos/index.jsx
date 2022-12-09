import styled from "styled-components";
import Constants from "expo-constants";
import { ReativeContainer } from "../../styles";

function TodosComponent({ children }) {
  return (
    <Container>
      <ReativeContainer>{children}</ReativeContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export { TodosComponent };
export * from "./TodosContent";
export * from "./TodosInputs";
export * from "./TodosFilter";
