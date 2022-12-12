import React from "react";
import { DiaryHomeContainer } from "../../containers";

function DiaryHomeScreen({ navigation }) {
  // const { load } = React.useContext(DiaryContext);
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     load();
  //   });

  //   return unsubscribe;
  // }, []);

  return <DiaryHomeContainer />;
}

export { DiaryHomeScreen };
