import { useNavigation, useRoute } from "@react-navigation/native";
import { DateTime } from "luxon";
import React from "react";
import { DiaryDetail } from "../../components";

function DiaryDetailContainer() {
  const [selectedDiary, setSelectedDiary] = React.useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  React.useEffect(() => {
    const params = route.params;
    if (params) setSelectedDiary(params);
  }, [route]);

  React.useEffect(() => {
    if (selectedDiary)
      navigation.setOptions({
        title: DateTime.fromISO(selectedDiary.date).toFormat(
          "yyyy년 MM월 dd일"
        ),
      });
  }, [selectedDiary]);

  return selectedDiary ? <DiaryDetail {...selectedDiary} /> : <></>;
}

export { DiaryDetailContainer };
