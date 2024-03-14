import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  laptops: [],
  lodingLaptops: false,
  erorrLaptops: false,
};

export const getdataLaptops = createAsyncThunk(
  "getdataLaptops",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/laptops`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const laptopsSlices = createSlice({
  name: "getdataLaptops",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataLaptops.pending, (state, action) => {
      state.lodingLaptops = true;
    });
    builnder.addCase(getdataLaptops.fulfilled, (state, action) => {
      state.laptops = action.payload;
      state.lodingLaptops = false;
    });
    builnder.addCase(getdataLaptops.rejected, (state, action) => {
      state.erorrLaptops = true;
      state.lodingLaptops = false;
    });
  },
});

export const finshLaptops = laptopsSlices.reducer;
