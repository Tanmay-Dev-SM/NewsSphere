import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { loc: {} };
export const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocationStore: (state, action) => {
      console.log(state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
    resetLocationStore: (state, action) => {
      return initialState;
    },
  },
});

export const { updateLocationStore, resetLocationStore } = location.actions;

export default location.reducer;
