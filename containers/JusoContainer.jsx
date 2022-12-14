import React from "react";
import { getJuso } from "../api";
import { JusoComponent } from "../components";

function JusoContainer() {
  const [list, setList] = React.useState([]);

  const onSearch = React.useCallback(async (keyword) => {
    try {
      const res = await getJuso(keyword);
      const data = res.data;

      const msg = data.results.common.errorMessage;
      if (msg !== "정상") throw new Error(msg);
      setList(data.results.juso);
    } catch (err) {
      alert(err);
    }
  }, []);
  return <JusoComponent {...{ list, onSearch }} />;
}

export { JusoContainer };
