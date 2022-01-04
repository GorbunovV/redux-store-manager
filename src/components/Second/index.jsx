import { memo } from "react";

import secondReducer from "../../reducers/second";
import { useAsyncReducer } from "../../hooks";

const SecondRaw = () => {
  useAsyncReducer("second", secondReducer);
  return <h1>Second tab</h1>;
};

export const Second = memo(SecondRaw);
export default Second;
