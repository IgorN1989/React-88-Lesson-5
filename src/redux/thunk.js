import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../sevices/API";

export const baseCurrencyThunk = createAsyncThunk(
  "fetchBaseCurrency",
  async (crd, thunkAPI) => {
    const { baseName } = thunkAPI.getState();
    if (baseName) {
      return thunkAPI.rejectWithValue("we allready have  baseCurrency");
    }
    try {
      const data = await getUserInfo(crd);
      // console.log(crd);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
