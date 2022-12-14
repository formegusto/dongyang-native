import { createStackNavigator } from "@react-navigation/stack";
import _ from "lodash";
import { ClockScreen } from "./ClockScreen";
import { LottoScreen } from "./LottoScreen";
import { TodosScreen } from "./TodosScreen";
import { DiaryScreen } from "./DiaryScreen";
import { Button } from "../styles";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import { JusoScreen } from "./JusoScreen";
import { FlatList } from "react-native";
import React from "react";
import { ExRateScreen } from "./ExRateScreen";

const Stack = createStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  const renderItem = React.useCallback(
    ({ item: { name } }) => (
      <Button onPress={() => navigation.push(name)} margin={12}>
        {name}
      </Button>
    ),
    [navigation]
  );

  return (
    <Wrap header={headerHeight}>
      <FlatList
        data={SCREENS}
        renderItem={renderItem}
        keyExtractor={({ name }) => `nav-btn-${name}`}
      />
    </Wrap>
  );
}

const Wrap = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0px 0px ${({ header }) => header}px;
`;

const SCREENS = [
  { name: "Clock", component: ClockScreen, options: { title: "디지털 시계" } },
  {
    name: "Lotto",
    component: LottoScreen,
    options: { title: "로또 번호 생성기" },
  },
  { name: "Todos", component: TodosScreen, options: { title: "할 일 관리" } },
  { name: "Diary", component: DiaryScreen, options: { headerShown: false } },
  { name: "Juso", component: JusoScreen, options: { title: "주소 검색" } },
  {
    name: "Ex-Rate",
    component: ExRateScreen,
    options: { title: "환율 계산기" },
  },
];

function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "iOS 개발실무" }}
      />
      {_.map(SCREENS, (screen) => (
        <Stack.Screen key={`screen-${screen.name}`} {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default Screens;
