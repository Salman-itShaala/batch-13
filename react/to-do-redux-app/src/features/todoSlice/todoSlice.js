import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      // action.payload contains value passed inside addTodo function while dispatching
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      // state.todos
      const index = action.payload;

      state.todos.splice(index, 1);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
