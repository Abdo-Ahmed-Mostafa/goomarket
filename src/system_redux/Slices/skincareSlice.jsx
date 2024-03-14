import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  skincare: [],
  lodingSkincare  : false,
  erorrSkincare: false,
};

export const getdataSkincare = createAsyncThunk(
  "getdataSkincare",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/skincare`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const skincareSlices = createSlice({
  name: "getdataLaptops",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataSkincare.pending, (state, action) => {
      state.lodingSkincare = true;
    });
    builnder.addCase(getdataSkincare.fulfilled, (state, action) => {
      state.skincare = action.payload;
      state.lodingLaptops = false;
    });
    builnder.addCase(getdataSkincare.rejected, (state, action) => {
      state.erorrSkincare = true;
      state.lodingSkincare = false;
    });
  },
});

export const finshSkincares = skincareSlices.reducer;
