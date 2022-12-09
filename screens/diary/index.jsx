import { createStackNavigator } from "@react-navigation/stack";
import { DiaryProvider } from "../../context";
import { DiaryHomeScreen } from "./DiaryHomeScreen";
import { DiaryWriteScreen } from "./DiaryWriteScreen";

const Stack = createStackNavigator();

export function DiaryScreen() {
  return (
    <DiaryProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="DiaryHome"
          component={DiaryHomeScreen}
          options={{ title: "일기 목록" }}
        />
        <Stack.Screen
          name="DiaryWrite"
          component={DiaryWriteScreen}
          options={{ title: "일기 작성" }}
        />
      </Stack.Navigator>
    </DiaryProvider>
  );
}
