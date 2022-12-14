import React from "react";
import { ExRateComponent } from "../components";

/*
D : Dollar
W : Won
*/

const RATE = 1298.6;

function ExRateContainer() {
  // DtoW, WtoD
  const [mode, setMode] = React.useState("DtoW");
  const [value, setValue] = React.useState(0);
  const rate = React.useMemo(
    () => (mode === "DtoW" ? value * RATE : value / RATE),
    [mode, value]
  );

  const onCalc = React.useCallback((value) => {
    try {
      const _value = Number.parseInt(value);

      if (Number.isNaN(_value))
        throw new Error("올바르지 않은 숫자형식 입니다.");
      setValue(_value);
    } catch (e) {
      alert(e);
    }
  }, []);

  const onToggleMode = React.useCallback(() => {
    setMode((prev) => (prev === "DtoW" ? "WtoD" : "DtoW"));
  }, []);

  return <ExRateComponent {...{ mode, value, rate, onCalc, onToggleMode }} />;
}

export { ExRateContainer };
