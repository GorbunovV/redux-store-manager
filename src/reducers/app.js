import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "first",
  status: "idle",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTab: (state, action) => {
      return {
        ...state,
        tab: action.payload,
      };
    },
    setStatus: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

const getState = (store) => store.app;
export const getAppStatus = (state) => getState(state).status;

export const { setTab, setStatus } = appSlice.actions;

export default appSlice.reducer;
