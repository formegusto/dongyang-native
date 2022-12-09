import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { ClockScreen } from "./ClockScreen";
import { LottoScreen } from "./LottoScreen";
import { TodosScreen } from "./TodosScreen";
import { DiaryScreen } from "./diary";
import _ from "lodash";

const Stack = createStackNavigator();

export const PAGES = [
  { name: "Home", component: HomeScreen },
  { name: "Clock", component: ClockScreen },
  { name: "Lotto", component: LottoScreen },
  { name: "Todos", component: TodosScreen },
  { name: "Diary", component: DiaryScreen, options: { headerShown: false } },
];

export function Pages() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {_.map(PAGES, (page) => (
          <Stack.Screen key={`screen-${page.name}`} {...page} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
