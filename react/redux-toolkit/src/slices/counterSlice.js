import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    // increment
    increment: (state) => {
      state.value = state.value + 1;
    },

    // decrement
    decrement: (state) => {
      state.value = state.value - 1;
    },
    // reset

    changeByValue: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, changeByValue } = counterSlice.actions;
