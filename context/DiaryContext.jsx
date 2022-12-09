import React from "react";

export const DiaryContext = React.createContext({
  diaries: [],
  appendDiary: () => {},
});

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = React.useState([]);
  const appendDiary = React.useCallback((diary) => {
    setDiaries((prev) => [...prev, { id: new Date().getTime(), ...diary }]);
  }, []);

  return (
    <DiaryContext.Provider value={{ diaries, appendDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}
