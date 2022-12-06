import React from "react";
import { ClockComponent } from "../components";
import { DateTime } from "luxon";

function ClockContainer() {
  const [date, setDate] = React.useState(DateTime.now());

  React.useEffect(() => {
    const id = setInterval(() => {
      setDate(DateTime.now());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <ClockComponent date={date} />;
}

export { ClockContainer };
