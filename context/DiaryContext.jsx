import produce from "immer";
import _ from "lodash";
import { DateTime } from "luxon";
import React from "react";
import { getItem, setItem } from "../utils";

export const DiaryContext = React.createContext({
  diaries: [],
  SelectedDiary: null,
  appendDiary: () => {},
  onDelete: () => {},
  onUpdate: () => {},
  selectDiary: () => {},
});

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = React.useState(null);
  const [selectedId, setSelectedId] = React.useState(null);

  const selectedDiary = React.useMemo(
    () => _.find(diaries, ({ id }) => id === selectedId),
    [diaries, selectedId]
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

  const selectDiary = React.useCallback((id) => {
    setSelectedId(id);
  }, []);

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
        selectDiary,
        selectedDiary,
      }}>
      {children}
    </DiaryContext.Provider>
  );
}
