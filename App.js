import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import {
  HomeScreen,
  ClockScreen,
  LottoScreen,
  TodosScreen,
  DiaryScreen,
} from "./screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
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
    </NativeBaseProvider>
  );
}

export default App;
