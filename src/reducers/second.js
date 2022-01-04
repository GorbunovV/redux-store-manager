import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    {
      name: "Main Lobby",
    },
    {
      name: "Table Games",
    },
  ],
  games: [],
};

export const secondSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    setItems: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const getState = (store) => store.second;
export const getTabs = (state) => getState(state).tabs;

export const { setItems } = secondSlice.actions;

export default secondSlice.reducer;
