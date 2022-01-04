import { useEffect, useState } from "react";

import store from "../storeToolkit";

export const useAsyncReducer = (key, reducer) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    store.injectReducer(key, reducer);
    setIsReady(true);
    return () => {
      store.removeReducer(key);
    };
  }, [key, reducer]);

  return isReady;
};
