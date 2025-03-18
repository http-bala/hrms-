import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import leaveReducer from "./leaveSlice";
import attendanceReducer from "./attendanceSlice";
import employeeReducer from "./employeeSlice"; 
// import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    leave: leaveReducer,
    attendance: attendanceReducer, // ✅ Attendance Reducer Add Kiya
    employee: employeeReducer,
    // chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Non-serializable warnings ko ignore karega
    }),
});

export default store;
