import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema(
  {
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
    basicSalary: { type: Number, required: true },
    allowances: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    netSalary: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Processed", "Paid"], default: "Pending" },
    payDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Payroll = mongoose.model("Payroll", payrollSchema);
export default Payroll;
