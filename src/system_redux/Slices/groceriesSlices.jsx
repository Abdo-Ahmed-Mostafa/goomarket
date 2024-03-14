import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  groceries: [],
  lodingGroceries: false,
  erorrGroceries: false,
};

export const getGroceries = createAsyncThunk(
  "getGrocerie",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/groceries`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);
const groceriesSlices = createSlice({
  name: "getdataGrocerie",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getGroceries.pending, (state, action) => {
      state.lodingGroceries = true;
    });
    builnder.addCase(getGroceries.fulfilled, (state, action) => {
      state.groceries = action.payload;
      state.lodingGroceries = false;
    });
    builnder.addCase(getGroceries.rejected, (state, action) => {
      state.erorrGroceries = true;
      state.lodingGroceries = false;
    });
  },
});

export const finshGroceries = groceriesSlices.reducer;
