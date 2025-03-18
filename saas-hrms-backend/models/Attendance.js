import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
    date: { type: Date, default: Date.now }, // Attendance Date
    method: { type: String, enum: ["Biometric", "GPS"], required: true }, // Attendance Method
    location: { type: Object, default: null }, // GPS ke liye Location
    checkIn: { type: Date, default: null },  // ✅ Check-In Time
    checkOut: { type: Date, default: null },     // ✅ Check-Out Time
    status: { type: String, enum: ["Present", "Absent", "Late"], default: "Present" },
    timestamp: { type: Date, default: Date.now } // Entry Creation Time
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
