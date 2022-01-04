import { memo } from "react";

import firstReducer from "../../reducers/first";
import { useAsyncReducer } from "../../hooks";

import View from "./components";

const FirstRaw = () => {
  const isReady = useAsyncReducer("first", firstReducer);
  return isReady ? <View /> : null;
};

export const First = memo(FirstRaw);
export default First;
