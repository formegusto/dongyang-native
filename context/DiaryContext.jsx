import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { DateTime } from "luxon";
import React from "react";

export const DiaryContext = React.createContext({
  diaries: [],
  appendDiary: () => {},
});

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = React.useState([]);

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
        ({ date }) => date
      );
      setDiaries(newDiaries);
      AsyncStorage.setItem("diary", JSON.stringify(newDiaries));
    },
    [diaries]
  );

  React.useEffect(() => {
    AsyncStorage.getItem("diary")
      .then((data) => {
        if (data !== null) setDiaries(JSON.parse(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <DiaryContext.Provider value={{ diaries, appendDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}
