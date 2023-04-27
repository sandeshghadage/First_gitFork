import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [
    {
      name: "A",
      count: 0,
    },
    {
      name: "B",
      count: 0,
    },
    {
      name: "C",
      count: 0,
    },
    {
      name: "D",
      count: 0,
    },
    {
      name: "E",
      count: 0,
    },
    {
      name: "F",
      count: 0,
    },
    {
      name: "G",
      count: 0,
    },
    {
      name: "H",
      count: 0,
    },
    // {
    //   name: "I",
    //   count: 0,
    // },
    // {
    //   name: "J",
    //   count: 0,
    // },
    // {
    //   name: "K",
    //   count: 0,
    // },
    // {
    //   name: "L",
    //   count: 0,
    // },
    // {
    //   name: "M",
    //   count: 0,
    // },

    // {
    //   name: "N",
    //   count: 0,
    // },
    // {
    //   name: "O",
    //   count: 0,
    // },
    // {
    //   name: "P",
    //   count: 0,
    // },
    // {
    //   name: "Q",
    //   count: 0,
    // },

    // {
    //   name: "R",
    //   count: 0,
    // },
    // {
    //   name: "S",
    //   count: 0,
    // },
    // {
    //   name: "T",
    //   count: 0,
    // },
    // {
    //   name: "U",
    //   count: 0,
    // },

    // {
    //   name: "V",
    //   count: 0,
    // },
    // {
    //   name: "W",
    //   count: 0,
    // },
    // {
    //   name: "X",
    //   count: 0,
    // },
    // {
    //   name: "Y",
    //   count: 0,
    // },
    // {
    //   name: "Y",
    //   count: 0,
    // },
    // {
    //   name: "Z",
    //   count: 0,
    // },
  ],
};

export const counterSlice = createSlice({
  name: "buttton",
  initialState,
  reducers: {
    increaseCounter: (state, actions) => {
      const index = actions.payload;
      state.arr[index].count += 1;
    },
  },
});

export const { increaseCounter } = counterSlice.actions;

export default counterSlice.reducer;
