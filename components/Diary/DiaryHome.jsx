import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import styled from "styled-components";
import { DiaryList } from "./DiaryList";
import { NavButton } from "./NavButton";

function DiaryHome() {
  const navigation = useNavigation();

  return (
    <Wrap>
      <DiaryList />
      <Pressable onPress={() => navigation.push("DiaryWrite")}>
        <NavButton onPress={() => navigation.push("DiaryWrite")}>
          새 일기 작성
        </NavButton>
      </Pressable>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryHome };
