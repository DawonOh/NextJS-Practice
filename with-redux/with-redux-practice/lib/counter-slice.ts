import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    setPlus: (state) => {
      state.num += 1;
    },
    setMinus: (state) => {
      state.num -= 1;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
