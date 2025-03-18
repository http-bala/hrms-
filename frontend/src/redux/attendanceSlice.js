import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Mark Attendance
export const markAttendance = createAsyncThunk(
  "attendance/mark",
  async ({ method, location }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await axios.post(
        "http://localhost:5000/api/attendance/mark",
        { method, location },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ✅ Get Employee Attendance History
// Fetch Attendance Data
export const fetchAttendanceHistory = createAsyncThunk(
  "attendance/fetch",
  async () => {
    const response = await fetch("http://localhost:5000/api/attendance", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.json();
  }
);

export const fetchAttendanceReport = createAsyncThunk(
  "attendance/fetchReport",
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/attendance/monthly?month=${month}&year=${year}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      ); // Backend API call
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Server Error" }
      );
    }
  }
);

// ✅ Fetch Daily Attendance Logs
const fetchDailyAttendanceLogs = createAsyncThunk(
  "attendance/fetchDailyLogs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/attendance/daily",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || "Server Error");
    }
  }
);

export const markCheckIn = createAsyncThunk(
  "attendance/markCheckIn",
  async ({ method, location }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/attendance/mark`,
        { method, location },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkOut = createAsyncThunk(
  "attendance/checkOut",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/attendance/checkout`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: { records: [], logs: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(markAttendance.pending, (state) => {
        state.loading = true;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.records.push(action.payload);
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAttendanceHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAttendanceHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload || []; // ✅ Ensure Array
      })
      .addCase(fetchAttendanceHistory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAttendanceReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAttendanceReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload; // Store report data
      })
      .addCase(fetchAttendanceReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDailyAttendanceLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDailyAttendanceLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchDailyAttendanceLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkOut.fulfilled, (state, action) => {
        state.loading = false;
        const updatedLogs = state.logs.map((log) =>
          log._id === action.payload.attendance._id
            ? { ...log, checkOut: action.payload.attendance.checkOut }
            : log
        );
        state.logs = updatedLogs;
      })
      .addCase(checkOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(markCheckIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(markCheckIn.fulfilled, (state, action) => {
        state.loading = false;
        state.logs.push(action.payload.attendance);
      })
      .addCase(markCheckIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default attendanceSlice.reducer;
export { fetchDailyAttendanceLogs }; // 🛠 FIXED: Exporting properly
