import express from "express";
import PDFDocument from "pdfkit";
import fs from "fs";
import mongoose from "mongoose";
import Payroll from "../models/Payroll.js";
import Employee from "../models/Employee.js";

const router = express.Router();

// ✅ Generate Payslip PDF API
router.get("/generate/:employeeId", async (req, res) => {
    try {
        const { employeeId } = req.params;

        // ✅ Employee `_id` find karein
        const employee = await Employee.findOne({ employeeId: employeeId });

        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }

        console.log("Employee Object ID:", employee._id);  // Debugging ke liye

        // ✅ Payroll find karein using ObjectId
        const payroll = await Payroll.findOne({ employee: new mongoose.Types.ObjectId(employee._id) }).sort({ payDate: -1 });

        if (!payroll) {
            return res.status(404).json({ error: "No payroll data found for this employee." });
        }

        console.log("Payroll Data:", payroll);  // Debugging ke liye

        // ✅ PDF File Name
        const pdfFileName = `payslip_${employeeId}.pdf`;
        const pdfPath = `./payslips/${pdfFileName}`;

        // ✅ PDF Document Create
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(pdfPath));

        // 📝 PDF Content Add Karein
        doc.fontSize(18).text("Payslip", { align: "center" });
        doc.moveDown();
        doc.fontSize(12).text(`Employee ID: ${employee.employeeId}`);
        doc.text(`Employee Name: ${employee.name}`);
        doc.text(`Department: ${employee.department}`);
        doc.text(`Pay Date: ${new Date(payroll.payDate).toDateString()}`);
        doc.text(`Basic Salary: ₹${payroll.basicSalary}`);
        doc.text(`Allowances: ₹${payroll.allowances}`);
        doc.text(`Deductions: ₹${payroll.deductions}`);
        doc.text(`Net Salary: ₹${payroll.netSalary}`);
        doc.moveDown();
        doc.text("This is a system-generated payslip.", { align: "center" });

        // ✅ PDF Complete
        doc.end();

        // 📩 Send PDF as Response
        res.download(pdfPath, pdfFileName);
    } catch (error) {
        console.error("Error generating payslip:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
