import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import _ from "lodash";
import { ClockScreen } from "./ClockScreen";
import { LottoScreen } from "./LottoScreen";
import { TodosScreen } from "./TodosScreen";
import { DiaryScreen } from "./diary";
import { Button } from "../styles";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const SCREENS = [
  { name: "Clock", component: ClockScreen },
  { name: "Lotto", component: LottoScreen },
  { name: "Todos", component: TodosScreen },
  { name: "Diary", component: DiaryScreen, options: { headerShown: false } },
];

function HomeScreen() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  return (
    <Wrap header={headerHeight}>
      {_.map(SCREENS, ({ name }) => (
        <Button
          key={`nav-btn-${name}`}
          onPress={() => navigation.push(name)}
          margin={12}>
          {name}
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

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {_.map(SCREENS, (screen) => (
          <Stack.Screen key={`screen-${screen.name}`} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
