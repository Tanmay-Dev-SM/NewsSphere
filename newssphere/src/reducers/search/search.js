import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};
export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchStore: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetSearchStore: (state, action) => {
      return initialState;
    },
  },
});

export const { updateSearchStore, resetSearchStore } = search.actions;

export default search.reducer;
