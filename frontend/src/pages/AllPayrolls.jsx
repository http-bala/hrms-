import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPayrolls = () => {
  const [payrolls, setPayrolls] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) fetchPayrolls();
  }, [token]);

  const fetchPayrolls = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/payrolls/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPayrolls(res.data);
    } catch (error) {
      console.error("Error fetching payrolls", error);
    }
  };

  const markAsPaid = async (payrollId) => {
    console.log("Marking payroll as paid:", payrollId);
    try {
      await axios.put(`http://localhost:5000/api/payrolls/${payrollId}/mark-paid`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // ✅ UI Update After API Call
      setPayrolls((prevPayrolls) =>
        prevPayrolls.map((payroll) =>
          payroll._id === payrollId ? { ...payroll, status: "Paid" } : payroll
        )
      );
    } catch (error) {
      console.error("Error marking payroll as paid", error);
    }
  };

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6 bg-gray-900 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Payroll Management</h1>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Employee</th>
                <th className="p-2">Basic Salary</th>
                <th className="p-2">Allowances</th>
                <th className="p-2">Deductions</th>
                <th className="p-2">Net Salary</th>
                <th className="p-2">Status</th>
                <th className="p-2">Pay Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.map((payroll) => (
                <tr key={payroll._id} className="border-b border-gray-700">
                  <td className="p-2">{payroll.employee?.name || payroll.employee}</td>
                  <td className="p-2">₹{payroll.basicSalary}</td>
                  <td className="p-2">₹{payroll.allowances}</td>
                  <td className="p-2">₹{payroll.deductions}</td>
                  <td className="p-2 font-semibold">₹{payroll.netSalary}</td>
                  <td className={`p-2 font-semibold ${payroll.status === "Paid" ? "text-green-400" : "text-yellow-400"}`}>
                    {payroll.status}
                  </td>
                  <td className="p-2">{new Date(payroll.payDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</td>
                  <td className="p-2">
                    {payroll.status !== "Paid" && (
                      <button
                        onClick={() => markAsPaid(payroll._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AllPayrolls;
