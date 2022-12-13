import _ from "lodash";
import { iosColorKeys, iOSColors } from "../styles";

export const randomIosColors = () => iOSColors[_.sample(iosColorKeys)];
export const numToColor = (num) => {
  if (num <= 10) return iOSColors.yellow;
  else if (num <= 20) return iOSColors.blue;
  else if (num <= 30) return iOSColors.red;
  else if (num <= 40) return iOSColors.green;
  else return iOSColors.teal;
};
