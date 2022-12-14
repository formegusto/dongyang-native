import React from "react";
import { DiaryHome } from "../../components";
import { DiaryContext } from "../../context";

function DiaryHomeContainer({ navigation }) {
  const { load, diaries, selectDiary, onDelete } =
    React.useContext(DiaryContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      () => {
        load();
      },
      []
    );

    return unsubscribe;
  }, [load, navigation]);

  const onUpdateScreen = React.useCallback(
    (id) => {
      // context API 방식
      selectDiary(id);
      navigation.push("DiaryUpdate");
    },
    [selectDiary, navigation]
  );

  const onDetailScreen = React.useCallback(
    (diary) => {
      // route params 방식
      navigation.push("DiaryDetail", diary);
    },
    [navigation]
  );

  return (
    <DiaryHome
      {...{ navigation, diaries, onUpdateScreen, onDetailScreen, onDelete }}
    />
  );
}

export { DiaryHomeContainer };
