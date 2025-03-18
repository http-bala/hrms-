const express = require("express");
const Payroll = require("../models/Payroll"); // Payroll Model import karein
const router = express.Router();

// ✅ Monthly Payroll Report API
router.get("/payroll/monthly", async (req, res) => {
    try {
        const { year, month } = req.query;
        if (!year || !month) return res.status(400).json({ error: "Year & Month required" });

        const payrollData = await Payroll.aggregate([
            {
                $match: {
                    paymentDate: {
                        $gte: new Date(`${year}-${month}-01`),
                        $lt: new Date(`${year}-${parseInt(month) + 1}-01`),
                    },
                },
            },
            {
                $group: {
                    _id: "$department",
                    totalSalary: { $sum: "$amount" },
                    employeeCount: { $sum: 1 },
                },
            },
        ]);

        res.json({ month, year, payrollData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Yearly Payroll Report API
router.get("/payroll/yearly", async (req, res) => {
    try {
        const { year } = req.query;
        if (!year) return res.status(400).json({ error: "Year required" });

        const payrollData = await Payroll.aggregate([
            {
                $match: {
                    paymentDate: {
                        $gte: new Date(`${year}-01-01`),
                        $lt: new Date(`${parseInt(year) + 1}-01-01`),
                    },
                },
            },
            {
                $group: {
                    _id: "$department",
                    totalSalary: { $sum: "$amount" },
                    employeeCount: { $sum: 1 },
                },
            },
        ]);

        res.json({ year, payrollData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
