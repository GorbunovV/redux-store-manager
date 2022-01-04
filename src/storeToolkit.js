import { configureStore, combineReducers } from "@reduxjs/toolkit";

import staticReducers from "./reducers";

export const configureCustomStore = () => {
  // Create a store with the root reducer function being the one exposed by the manager.
  const store = configureStore({
    reducer: staticReducers,
    devTools: true,
  });

  store.dynamicReducers = {};

  store.injectReducer = (key, dynamicReducer) => {
    store.dynamicReducers[key] = dynamicReducer;
    store.replaceReducer(createReducer(store.dynamicReducers));
  };

  store.removeReducer = (key) => {
    delete store.dynamicReducers[key];
    store.replaceReducer(createReducer(store.dynamicReducers));
  };

  return store;
};

const createReducer = (dynamicReducers = {}) => {
  return combineReducers({
    ...staticReducers,
    ...dynamicReducers,
  });
};

const store = configureCustomStore();
export default store;
