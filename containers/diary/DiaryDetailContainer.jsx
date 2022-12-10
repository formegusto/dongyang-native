import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
import React from "react";
import { DiaryDetail } from "../../components";
import { DiaryContext } from "../../context";

function DiaryDetailContainer() {
  const { selectedDiary } = React.useContext(DiaryContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (selectedDiary)
      navigation.setOptions({
        title: DateTime.fromISO(selectedDiary.date).toFormat(
          "yyyy년 MM월 dd일"
        ),
      });
  }, [selectedDiary]);

  return <DiaryDetail {...selectedDiary} />;
}

export { DiaryDetailContainer };
