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
  load: () => {},
});

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = React.useState(null);
  const [selectedId, setSelectedId] = React.useState(null);

  const selectedDiary = React.useMemo(
    () =>
      selectedId ? _.find(diaries, ({ id }) => id === selectedId) : selectedId,
    [diaries, selectedId]
  );

  const store = React.useCallback((newDiaries) => {
    setItem("diary", newDiaries);
  }, []);

  const appendDiary = React.useCallback(
    ({ content, date }) => {
      if (!DateTime.fromISO(date).isValid) {
        alert("유효하지 않은 날짜 형식입니다.\nex) 1996-10-02");
        return;
      }
      const newDiaries = _.sortBy(
        [
          ...diaries,
          {
            id: new Date().getTime(),
            content,
            // date: new Date(date)
            date: date,
          },
        ],
        "date"
      );
      setDiaries(newDiaries);
      store(newDiaries);
    },
    [diaries, store]
  );

  const onDelete = React.useCallback(
    (deletedId) => {
      const newDiaries = _.reject(diaries, ({ id }) => id === deletedId);
      setDiaries(newDiaries);
      store(newDiaries);
    },
    [diaries, store]
  );

  const onUpdate = React.useCallback(
    (updatedId, input) => {
      const newDiaries = _.sortBy(
        produce(diaries, (draft) => {
          const idx = _.findIndex(draft, ({ id }) => id === updatedId);
          draft[idx] = {
            ...draft[idx],
            ...input,
          };
        }),
        "date"
      );
      setDiaries(newDiaries);
      store(newDiaries);
    },
    [diaries, store]
  );

  const selectDiary = React.useCallback((id) => {
    setSelectedId(id);
  }, []);

  const load = React.useCallback(() => {
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
        load,
      }}>
      {children}
    </DiaryContext.Provider>
  );
}
