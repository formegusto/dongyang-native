import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import Pages, {
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
      <Pages />
    </NativeBaseProvider>
  );
}

export default App;
