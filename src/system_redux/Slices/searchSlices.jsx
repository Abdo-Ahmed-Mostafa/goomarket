import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  search: [],
  lodingSearch: false,
  erorrSearch: false,
};

export const getdatasSearch = createAsyncThunk(
  "getdatasearch",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${id}`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const searchSlices = createSlice({
  name: "getsearch",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdatasSearch.pending, (state, action) => {
      state.lodingSearch = true;
    });
    builnder.addCase(getdatasSearch.fulfilled, (state, action) => {
      state.search = action.payload;
      state.lodingSearch = false;
    });
    builnder.addCase(getdatasSearch.rejected, (state, action) => {
      state.erorrSearch = true;
      state.lodingSearch = false;
    });
  },
});

export const finshSearch = searchSlices.reducer;
