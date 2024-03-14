import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  singelProduct: [],
  lodingSingelProduct: false,
  erorrSingelProduct: false,
  quantity: 1,
};

export const getdataSingelProduct = createAsyncThunk(
  "getdataSingelProduct",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/${id}`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const singelProductSlices = createSlice({
  name: "getSingelProduct",
  initialState: data,
  reducers: {
    increment: (state, action) => {
      state.quantity++;
    },
    decrement: (state, action) => {
      state.quantity > 1 && state.quantity--;
    },
  },
  extraReducers: (builnder) => {
    builnder.addCase(getdataSingelProduct.pending, (state, action) => {
      state.lodingSingelProduct = true;
    });
    builnder.addCase(getdataSingelProduct.fulfilled, (state, action) => {
      state.singelProduct = action.payload;
      state.lodingSingelProduct = false;
    });
    builnder.addCase(getdataSingelProduct.rejected, (state, action) => {
      state.erorrLaptops = true;
      state.erorrSingelProduct = false;
    });
  },
});

export const finshSingelProduct = singelProductSlices.reducer;
export const { increment, decrement } = singelProductSlices.actions;
