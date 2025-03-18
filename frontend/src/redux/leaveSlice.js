import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeaves = createAsyncThunk("leave/fetchLeaves", async (_, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.get("http://localhost:5000/api/leaves", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

const leaveSlice = createSlice({
  name: "leave",
  initialState: { leaves: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaves.pending, (state) => { state.status = "loading"; })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leaves = action.payload;
      })
      .addCase(fetchLeaves.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default leaveSlice.reducer;
