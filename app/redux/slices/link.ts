import { ListSlice } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ListSlice = {
  link: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("list/listdata", async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/link`);
    const result = response.data;
    console.log("🚀 ~ constfetchData:any=createAsyncThunk ~ result:", result);
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const link = createSlice({
  name: "link",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.link = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default link.reducer;
