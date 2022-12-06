import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { Button } from "../styles";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Wrap>
      <Button onPress={() => navigation.push("Clock")}>Clock</Button>
      <Button onPress={() => navigation.push("Lotto")}>Lotto</Button>
      <Button onPress={() => navigation.push("Todos")}>Todos</Button>
    </Wrap>
  );
}

const Wrap = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export { HomeScreen };
