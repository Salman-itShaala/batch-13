import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todoSlice/todoSlice";

const myStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default myStore;
