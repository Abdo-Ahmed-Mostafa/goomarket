import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  smartPhone: [],
  lodingSmartPhone: false,
  erorrSmartPhone: false,
};

export const getdataSmartPhone = createAsyncThunk(
  "getdataSmart",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/smartphones`,
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const smartPhoneSlices = createSlice({
  name: "getdataSmarr",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getdataSmartPhone.pending, (state, action) => {
      state.lodingSmartPhone = true;
    });
    builnder.addCase(getdataSmartPhone.fulfilled, (state, action) => {
      state.smartPhone = action.payload;
      state.lodingSmartPhone = false;
    });
    builnder.addCase(getdataSmartPhone.rejected, (state, action) => {
      state.erorrSmartPhone = true;
      state.lodingSmartPhone = false;
    });
  },
});

export const finshSmartPhone = smartPhoneSlices.reducer;
