import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  homeDecoration: [],
  lodingHomeDecoration: false,
  erorrHomeDecoration: false,
};

export const getdataHomeDecoration = createAsyncThunk(
  "getdataHomeDecoration",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/home-decoration`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const homeDecorationSlices = createSlice({
  name: "getdataHomeDecorations",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataHomeDecoration.pending, (state, action) => {
      state.lodingHomeDecoration = true;
    });
    builnder.addCase(getdataHomeDecoration.fulfilled, (state, action) => {
      state.homeDecoration = action.payload;
      state.lodingHomeDecoration = false;
    });
    builnder.addCase(getdataHomeDecoration.rejected, (state, action) => {
      state.erorrHomeDecoration = true;
      state.lodingHomeDecoration = false;
    });
  },
});

export const finshHomeDecoration = homeDecorationSlices.reducer;
