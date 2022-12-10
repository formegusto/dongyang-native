import { useNavigation } from "@react-navigation/native";
import produce from "immer";
import _ from "lodash";
import { DateTime } from "luxon";
import React from "react";
import { getItem, setItem } from "../utils";

export const DiaryContext = React.createContext({
  diaries: [],
  updatedDiary: null,
  appendDiary: () => {},
  onDelete: () => {},
  onUpdate: () => {},
  pushUpdateScreen: (id) => {},
});

export function DiaryProvider({ children }) {
  const navigation = useNavigation();
  const [diaries, setDiaries] = React.useState(null);
  const [updatedId, setUpdatedId] = React.useState(null);

  const updatedDiary = React.useMemo(
    () => _.find(diaries, ({ id }) => id === updatedId),
    [updatedId]
  );

  const appendDiary = React.useCallback(({ content, date }) => {
    if (!DateTime.fromISO(date).isValid) {
      alert("유효하지 않은 날짜 형식입니다.\nex) 1996-10-02");
      return;
    }
    setDiaries((prev) =>
      _.sortBy(
        [
          ...prev,
          {
            id: new Date().getTime(),
            content,
            // date: new Date(date)
            date: date,
          },
        ],
        ({ date }) => date
      )
    );
  }, []);

  const onDelete = React.useCallback((deletedId) => {
    setDiaries((prev) => _.reject(prev, ({ id }) => id === deletedId));
  }, []);

  const pushUpdateScreen = React.useCallback(
    (id) => {
      setUpdatedId(id);
      navigation.push("DiaryUpdate");
    },
    [navigation]
  );

  const onUpdate = React.useCallback((updatedId, input) => {
    setDiaries((prev) =>
      _.sortBy(
        produce(prev, (draft) => {
          const idx = _.findIndex(draft, ({ id }) => id === updatedId);
          draft[idx] = {
            ...draft[idx],
            ...input,
          };
        }),
        ({ date }) => date
      )
    );
  }, []);

  React.useEffect(() => {
    if (diaries) setItem("diary", diaries);
  }, [diaries]);

  React.useEffect(() => {
    getItem("diary", setDiaries, []);
  }, []);

  return (
    <DiaryContext.Provider
      value={{
        diaries,
        appendDiary,
        onDelete,
        onUpdate,
        pushUpdateScreen,
        updatedDiary,
      }}>
      {children}
    </DiaryContext.Provider>
  );
}
