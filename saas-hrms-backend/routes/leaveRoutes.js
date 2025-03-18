import express from "express";
import {
  applyLeave,
  getAllLeaveRequests,
  getEmployeeLeaves,
  updateLeaveStatus,
} from "../controllers/leaveController.js";
import protect from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js"; // HR/Admin check karne ke liye

const router = express.Router();

router.post("/", protect, applyLeave); // ✅ Apply Leave (Employee)
router.get("/", protect, getEmployeeLeaves); // ✅ Get Employee's Leaves
router.get("/all", protect, isAdmin, getAllLeaveRequests); // ✅ Get All Leave Requests (HR/Admin)
router.put("/:id", protect, isAdmin, updateLeaveStatus); // ✅ Approve/Reject Leave (HR/Admin)

export default router;
