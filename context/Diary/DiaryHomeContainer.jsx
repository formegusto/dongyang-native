import React from "react";
import { DiaryHome } from "../../components";
import { DiaryContext } from "../../context";

function DiaryHomeContainer({ navigation }) {
  const { load } = React.useContext(DiaryContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      () => {
        load();
      },
      []
    );

    return unsubscribe;
  }, [load]);
  return <DiaryHome />;
}

export { DiaryHomeContainer };
