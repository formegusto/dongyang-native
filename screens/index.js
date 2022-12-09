import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export * from "./ClockScreen";
export * from "./LottoScreen";
export * from "./TodosScreen";
export * from "./HomeScreen";
export * from "./diary";

const { Stack } = createStackNavigator();

function Pages() {
  return <NavigationContainer></NavigationContainer>;
}
