import { useNavigation } from "@react-navigation/native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styled from "styled-components";
import { DiaryContext } from "../../context";
import { DiaryInput } from "./DiaryInput";
import { NavButton } from "./NavButton";

function DiaryWriteComponent() {
  const { appendDiary } = React.useContext(DiaryContext);
  const navigation = useNavigation();
  const [input, setInput] = React.useState({ content: "", date: "" });

  const onChange = React.useCallback((name, value) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onAppendPop = React.useCallback(() => {
    appendDiary(input);
    navigation.pop();
  }, [appendDiary, navigation, input]);

  return (
    <Wrap>
      <DiaryInput input={input} onChange={onChange} />
      <NavButton onPress={onAppendPop}>일기 저장</NavButton>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryWriteComponent };
