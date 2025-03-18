import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendanceReport } from "../redux/attendanceSlice";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AttendanceReports() {
    const dispatch = useDispatch();
    const { report, loading } = useSelector((state) => state.attendance);

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");

    useEffect(() => {
        if (year && month) {
            dispatch(fetchAttendanceReport({ year, month }))
                .then((response) => console.log("Attendance Report Data:", response));
        }
    }, [year, month, dispatch]);

    // ✅ Ensure we access `report.report` correctly
    const chartData = report?.report?.map((entry, index) => ({
        name: `Employee ${index + 1}`, // Custom label
        present: entry.totalPresent || 0,
        late: entry.totalLate || 0
    })) || [];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Attendance Reports</h2>

            {/* ✅ Filters */}
            <div className="flex gap-4">
                <select onChange={(e) => setYear(e.target.value)} className="p-2 border rounded">
                    <option value="">Select Year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                </select>

                <select onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded">
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                </select>
            </div>

            {loading ? (
                <p>Loading Reports...</p>
            ) : (
                <div className="mt-4">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="present" fill="#4CAF50" name="Present" />
                            <Bar dataKey="late" fill="#FF9800" name="Late" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}
