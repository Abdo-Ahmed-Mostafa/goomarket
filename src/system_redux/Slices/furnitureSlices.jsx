import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  furniture: [],
  lodingFurniture: false,
  erorrFurniture: false,
};

export const getdataFurniture = createAsyncThunk(
  "getFurniture",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/furniture`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const FurnitureSlices = createSlice({
  name: "getdataSmarr",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataFurniture.pending, (state, action) => {
      state.lodingFurniture = true;
    });
    builnder.addCase(getdataFurniture.fulfilled, (state, action) => {
      state.furniture = action.payload;
      state.lodingFurniture = false;
    });
    builnder.addCase(getdataFurniture.rejected, (state, action) => {
      state.erorrFurniture = true;
      state.lodingFurniture = false;
    });
  },
});

export const finshFurniture = FurnitureSlices.reducer;
