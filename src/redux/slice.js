import { createSlice } from "@reduxjs/toolkit";
import { baseCurrencyThunk } from "./thunk";

const currencySlice = createSlice({
  name: "currency",
  initialState: { baseName: "" },
  reducers: {
    setBaseCurrency(state, { payload }) {
      state.baseName = payload;
    },
  },
  extraReducers: {
    [baseCurrencyThunk.fulfilled](state, { payload }) {
      //   console.log(payload);
      state.baseName = payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
