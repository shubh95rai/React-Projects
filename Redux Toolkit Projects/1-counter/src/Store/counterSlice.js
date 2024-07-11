import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      console.log("hi");
      return state += 1;
    },
    decrement: (state) => {
      return state -= 1;
    },
    reset: (state) => {
      return state = 0;
    },
    incrementByAmount: (state, action) => {
      return state += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
