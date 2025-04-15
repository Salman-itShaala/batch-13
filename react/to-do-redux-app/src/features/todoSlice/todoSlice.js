import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  const res = await fetch("https://dummyjson.com/todos"); // Promise --> resolve/reject
  const data = await res.json(); // res --> json to js object
  //

  // const data = await axios.get("https://dummyjson.com/todos");

  return data.todos; // todos --> []
});

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], loading: false, error: false },
  reducers: {
    addTodo: (state, action) => {
      // action.payload contains value passed inside addTodo function while dispatching
      console.log(action);
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      // state.todos

      const index = action.payload;

      state.todos.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
