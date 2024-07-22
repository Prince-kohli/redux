import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  data: 2,
};

export const counterSlice = createSlice({
  name: "counters",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    multiply: (state) => {
      state.data *= 2;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, multiply } =
  counterSlice.actions;

export default counterSlice.reducer;
