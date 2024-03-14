import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  frgrances: [],
  lodingFrgrances: false,
  erorrFrgrances: false,
};

export const getdataFrgrances = createAsyncThunk(
  "getdatafrg",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/fragrances`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const frgrancesSlices = createSlice({
  name: "getdatafrgrances",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataFrgrances.pending, (state, action) => {
      state.lodingFrgrances = true;
    });
    builnder.addCase(getdataFrgrances.fulfilled, (state, action) => {
      state.frgrances = action.payload;
      state.lodingFrgrances = false;
    });
    builnder.addCase(getdataFrgrances.rejected, (state, action) => {
      state.erorrFrgrances = true;
      state.lodingFrgrances = false;
    });
  },
});

export const finshFrgrances = frgrancesSlices.reducer;
