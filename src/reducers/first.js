import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      name: "Fifa",
    },
    {
      name: "Football",
    },
  ],
};

export const firstSlice = createSlice({
  name: "first",
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

const getState = (store) => store.first;
export const getEvents = (state) => getState(state).events;

export const { setItems } = firstSlice.actions;

export default firstSlice.reducer;
