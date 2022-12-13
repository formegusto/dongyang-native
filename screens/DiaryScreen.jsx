import { createStackNavigator } from "@react-navigation/stack";
import _ from "lodash";
import { DiaryProvider } from "../context";
import {
  DiaryHomeContainer,
  DiaryDetailContainer,
  DiaryWriteContainer,
  DiaryUpdateContainer,
} from "../containers";

const Stack = createStackNavigator();

export const DIARYSCREENS = [
  {
    name: "DiaryHome",
    component: DiaryHomeContainer,
    options: { title: "일기 목록" },
  },
  {
    name: "DiaryWrite",
    component: DiaryWriteContainer,
    options: { title: "일기 작성" },
  },
  {
    name: "DiaryUpdate",
    component: DiaryUpdateContainer,
    options: { title: "일기 수정" },
  },
  {
    name: "DiaryDetail",
    component: DiaryDetailContainer,
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
