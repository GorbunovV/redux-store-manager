import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import staticReducers from "./reducers";

export const configureStore = () => {
  // Create a store with the root reducer function being the one exposed by the manager.
  const store = createStore(createReducer(), composeWithDevTools());

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
  console.log(1);
  return combineReducers({
    ...staticReducers,
    ...dynamicReducers,
  });
};

const store = configureStore();
export default store;
