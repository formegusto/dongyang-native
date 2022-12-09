import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { ClockScreen } from "./ClockScreen";
import { LottoScreen } from "./LottoScreen";
import { TodosScreen } from "./TodosScreen";
import { DiaryScreen } from "./diary";

const Stack = createStackNavigator();

function Pages() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Clock" component={ClockScreen} />
        <Stack.Screen name="Lotto" component={LottoScreen} />
        <Stack.Screen name="Todos" component={TodosScreen} />
        <Stack.Screen
          name="Diary"
          component={DiaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Pages;
