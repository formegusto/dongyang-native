import { useNavigation } from "@react-navigation/native";
import react from "react";
import React from "react";
import { DiaryUpdate } from "../../components";
import { DiaryContext } from "../../context";

function DiaryUpdateContainer() {
  const navigation = useNavigation();
  const { selectedDiary, onUpdate } = React.useContext(DiaryContext);

  const onUpdateAndPop = react.useCallback(
    (...params) => {
      onUpdate(...params);
      navigation.pop();
    },
    [onUpdate, navigation]
  );

  return <DiaryUpdate {...selectedDiary} onUpdate={onUpdateAndPop} />;
}

export { DiaryUpdateContainer };
