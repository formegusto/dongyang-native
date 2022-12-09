import { createStackNavigator } from "@react-navigation/stack";
import { DiaryProvider } from "../../context";
import { DiaryHomeScreen } from "./DiaryHomeScreen";
import { DiaryUpdateScreen } from "./DiaryUpdateScreen";
import { DiaryWriteScreen } from "./DiaryWriteScreen";

const Stack = createStackNavigator();

export const DIARYSCREENS = [
  {
    name: "DiaryHome",
    component: DiaryHomeScreen,
    options: { title: "일기 목록" },
  },
  {
    name: "DiaryWrite",
    component: DiaryWriteScreen,
    options: { title: "일기 작성" },
  },
  {
    name: "DiaryUpdate",
    component: DiaryUpdateScreen,
    options: { title: "일기 수정" },
  },
];

export function DiaryScreen() {
  return (
    <DiaryProvider>
      <Stack.Navigator>
        {_.map(DIARYSCREENS, (screen) => (
          <Stack.Screen key={`diary-screen-${screen.name}`} {...screen} />
        ))}
      </Stack.Navigator>
    </DiaryProvider>
  );
}
