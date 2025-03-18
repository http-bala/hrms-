import express from "express";
import {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js"


const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
    { name: "offerLetter", maxCount: 1 },
    { name: "additionalDocs", maxCount: 10 },
  ]),
  protect,
  addEmployee
); // ✅ Add Employee
router.get("/", protect, getEmployees); // ✅ Get All Employees
router.get("/:id", protect, getEmployeeById); // ✅ Get Single Employee
router.put("/:id", protect, updateEmployee); // ✅ Update Employee
router.delete("/:id", protect, deleteEmployee); // ✅ Delete Employee

export default router;
