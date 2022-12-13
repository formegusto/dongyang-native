import _ from "lodash";
import React from "react";
import { LottoComponent } from "../components";

const ITEMS = _.times(44, (v) => v + 1);

function LottoContainer() {
  const [items, setItems] = React.useState(_.sortBy(_.sampleSize(ITEMS, 6)));

  const onPress = React.useCallback(() => {
    setItems(_.sortBy(_.sampleSize(ITEMS, 6)));
  }, []);

  return <LottoComponent items={items} onPress={onPress} />;
}

export { LottoContainer };
