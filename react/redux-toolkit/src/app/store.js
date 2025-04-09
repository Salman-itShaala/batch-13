import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/counterSlice";

// Creating store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
