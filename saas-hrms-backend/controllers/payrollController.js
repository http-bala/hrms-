import Payroll from "../models/Payroll.js";
import Employee from "../models/Employee.js";

// 🔹 Generate Payroll for an Employee
export const generatePayroll = async (req, res) => {
  try {
    const { employeeId, basicSalary, allowances, deductions, payDate } = req.body;
    const netSalary = basicSalary + allowances - deductions;

    const payroll = await Payroll.create({
      employee: employeeId,
      basicSalary,
      allowances,
      deductions,
      netSalary,
      payDate,
    });

    res.status(201).json({ message: "Payroll generated successfully", payroll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get Payroll for an Employee
export const getEmployeePayroll = async (req, res) => {
  try {
    const payrolls = await Payroll.find({ employee: req.user._id });
    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get All Payrolls (HR/Admin)
export const getAllPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.find().populate("employee", "name email");
    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Process Payroll (Mark as Paid)
export const processPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndUpdate(
      req.params.id,
      { status: "Paid" },
      { new: true }
    );

    if (!payroll) {
      return res.status(404).json({ message: "Payroll not found" });
    }

    res.status(200).json({ message: "Payroll marked as Paid", payroll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
