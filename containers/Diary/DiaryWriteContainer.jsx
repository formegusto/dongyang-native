import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DiaryWrite } from "../../components";
import { DiaryContext } from "../../context";

function DiaryWriteContainer() {
  const navigation = useNavigation();
  const { appendDiary } = React.useContext(DiaryContext);

  const onAppend = React.useCallback(
    (input) => {
      appendDiary(input);
      navigation.pop();
    },
    [appendDiary, navigation]
  );

  return <DiaryWrite onAppend={onAppend} />;
}

export { DiaryWriteContainer };
