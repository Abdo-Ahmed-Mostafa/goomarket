import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  allProduct: [],
  lodingAllProduct: false,
  erorrAllProduct: false,
};

export const getdataAllProduct = createAsyncThunk(
  "getdataAllProducts",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const allProductSlices = createSlice({
  name: "getAllProducts",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataAllProduct.pending, (state, action) => {
      state.lodingAllProduct = true;
    });
    builnder.addCase(getdataAllProduct.fulfilled, (state, action) => {
      state.allProduct = action.payload;
      state.lodingAllProduct = false;
    });
    builnder.addCase(getdataAllProduct.rejected, (state, action) => {
      state.erorrLaptops = true;
      state.lodingAllProduct = false;
    });
  },
});

export const finshAllProduct = allProductSlices.reducer;
