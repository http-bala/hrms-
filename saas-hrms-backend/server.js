import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import connectDB from "./config/db.js"; // Updated import

// Import routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import payrollRoutes from "./routes/payrollRoutes.js";
import payslipRoutes from "./routes/payslipRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js"

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Form data parse karo
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads")); // Static File Serving

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "HRMS Backend Running..." });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/payrolls", payrollRoutes);
app.use("/api/payslip", payslipRoutes); 
app.use("/api/attendance",attendanceRoutes)

// MongoDB Connection
connectDB();

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
