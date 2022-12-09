import _ from "lodash";
import { iosColorKeys, iOSColors } from "../styles";

export const randomIosColors = () => iOSColors[_.sample(iosColorKeys)];
