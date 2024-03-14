import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  tops: [],
  lodingTops: false,
  erorrTops: false,
};

export const getdataTops = createAsyncThunk(
  "getdatatops",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/tops`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const topsSlices = createSlice({
  name: "getdatatops",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataTops.pending, (state, action) => {
      state.lodingTops = true;
    });
    builnder.addCase(getdataTops.fulfilled, (state, action) => {
      state.tops = action.payload;
      state.lodingTops = false;
    });
    builnder.addCase(getdataTops.rejected, (state, action) => {
      state.erorrTops = true;
      state.lodingTops = false;
    });
  },
});

export const finshTops = topsSlices.reducer;
