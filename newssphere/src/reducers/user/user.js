import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};
export const user = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateUserStore: (state, action) => {
      const data = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(data);
    },
    resetUserStore: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
  },
});

export const { updateUserStore, resetUserStore } = user.actions;

export default user.reducer;
