import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import _ from "lodash";
import styled from "styled-components/native";
import { PAGES } from ".";
import { Button } from "../styles";

function HomeScreen() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  return (
    <Wrap header={headerHeight}>
      {_.map(_.drop(PAGES), (page) => (
        <Button
          key={`nav-btn-${page.name}`}
          onPress={() => navigation.push(page.name)}>
          {page.name}
        </Button>
      ))}
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
