import Attendance from "../models/Attendance.js";
import Employee  from "../models/Employee.js"

// ✅ Mark Attendance (Biometric/GPS)
export const markAttendance = async (req, res) => {
    try {
        const { method, location } = req.body;
        const employeeId = req.user.id;
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

        // ✅ Check if already checked-in today
        const existingAttendance = await Attendance.findOne({ 
            employeeId, 
            date: { $gte: new Date(today), $lt: new Date(today + "T23:59:59Z") }
        });

        if (existingAttendance) {
            return res.status(400).json({ error: "You have already checked in today!" });
        }

        // ✅ Create new attendance record
        const attendance = new Attendance({
            employeeId,
            method,
            location: method === "GPS" ? location : null,
            checkIn: new Date(), // ✅ Store check-in timestamp
        });

        await attendance.save();
        res.json({ message: "Check-In Successful!", attendance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ✅ Get Attendance Records (Employee)
export const getAttendanceRecord = async (req, res)=>{
    try {
        const records = await Attendance.find({ employeeId: req.user.id }).sort({ date: -1 });
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// ✅ Get Monthly Attendance Report (Admin)
export const getMonthlyAttendanceReport = async (req, res) => {
    try {
        const { year, month } = req.query;
        if (!year || !month) return res.status(400).json({ error: "Year & Month required" });

        const report = await Attendance.aggregate([
            {
                $match: {
                    date: {
                        $gte: new Date(`${year}-${month}-01`),
                        $lt: new Date(`${year}-${parseInt(month) + 1}-01`),
                    },
                },
            },
            {
                $group: {
                    _id: "$employeeId",
                    totalPresent: { $sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] } },
                    totalLate: { $sum: { $cond: [{ $eq: ["$status", "Late"] }, 1, 0] } },
                    avgCheckIn: { $avg: { $toInt: { $substr: ["$checkIn", 0, 2] } } }, // Avg check-in hour
                },
            },
        ]);

        res.json({ month, year, report });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDailyAttendanceLogs = async (req, res) => {
    try {
        const logs = await Attendance.find()
            .populate("employeeId", "name") // 🛠 Employee Name include karein
            .sort({ date: -1 });

        if (!logs || logs.length === 0) {
            return res.status(404).json({ error: "No attendance logs found" });
        }

        const formattedLogs = logs.map(log => ({
            employeeName: log?.employeeId?.name || "Unknown",  // 🛠 Check if employeeId exists
            date: log.date.toISOString().split("T")[0], // YYYY-MM-DD format
            method: log.method,
            location: log.location || "N/A",
            checkIn: log.checkIn || "N/A",
            checkOut: log.checkOut || "N/A",
            status: log.status
        }));

        res.status(200).json(formattedLogs);
    } catch (error) {
        console.error("Error fetching attendance logs:", error); // 🔴 Debugging ke liye log karein
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


// ✅ Employee Check-Out API
export const checkOutAttendance = async (req, res) => {
    try {
        const employeeId = req.user.id; // ✅ Authenticated Employee ID
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

        // ✅ Check if today's Check-In exists
        const attendance = await Attendance.findOne({ 
            employeeId, 
            date: { $gte: new Date(today), $lt: new Date(today + "T23:59:59Z") } 
        });

        if (!attendance) {
            return res.status(400).json({ error: "No Check-In record found for today." });
        }

        if (attendance.checkOut) {
            return res.status(400).json({ error: "Already Checked-Out!" });
        }

        // ✅ Update Check-Out Time
        attendance.checkOut = new Date();
        await attendance.save();

        res.json({ message: "Check-Out Successful!", attendance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
