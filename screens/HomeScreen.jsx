import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import styled from "styled-components/native";
import { Button } from "../styles";

function HomeScreen() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  return (
    <Wrap header={headerHeight}>
      <Button onPress={() => navigation.push("Clock")}>Clock</Button>
      <Button onPress={() => navigation.push("Lotto")}>Lotto</Button>
      <Button onPress={() => navigation.push("Todos")}>Todos</Button>
      <Button onPress={() => navigation.push("Diary")}>Diary</Button>
    </Wrap>
  );
}

const Wrap = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0px 0px ${({ header }) => header}px;
`;

export { HomeScreen };
