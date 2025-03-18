import express from "express";
import authenticate from "../middleware/authMiddleware.js";
import { checkOutAttendance, getAttendanceRecord, getDailyAttendanceLogs, getMonthlyAttendanceReport, markAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/mark", authenticate, markAttendance); // ✅ Mark Attendance (Biometric/GPS)
router.get("/", authenticate, getAttendanceRecord); // ✅ Get Attendance Records (Employee)
router.get("/monthly", authenticate, getMonthlyAttendanceReport); // ✅ Get Monthly Attendance Report (Admin)
router.post("/checkout", authenticate, checkOutAttendance);  // ✅ New Check-Out Route
router.get("/daily",getDailyAttendanceLogs)

export default router;
