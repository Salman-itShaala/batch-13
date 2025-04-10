import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo: () => {},
    // removeTodo :
  },
});

export const todoReducer = todoSlice.reducer;
