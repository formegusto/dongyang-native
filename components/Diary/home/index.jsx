import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components";
import { DiaryList } from "./DiaryList";
import NavButton from "../NavButton";

function DiaryHome({
  navigation,
  diaries,
  onUpdateScreen,
  onDetailScreen,
  onDelete,
}) {
  return (
    <Wrap>
      <DiaryList {...{ diaries, onUpdateScreen, onDetailScreen, onDelete }} />
      <NavButton onPress={() => navigation.push("DiaryWrite")}>
        새 일기 작성
      </NavButton>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryHome };
