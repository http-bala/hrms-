import express from "express";
import {
  generatePayroll,
  getEmployeePayroll,
  getAllPayrolls,
  processPayroll,
} from "../controllers/payrollController.js";
import protect from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, generatePayroll); // ✅ Generate Payroll (HR/Admin)
router.get("/", protect, getEmployeePayroll); // ✅ Get Employee Payroll
router.get("/all", protect, isAdmin, getAllPayrolls); // ✅ Get All Payrolls (HR/Admin)
router.put("/:id", protect, isAdmin, processPayroll); // ✅ Mark Payroll as Paid (HR/Admin)

export default router;
