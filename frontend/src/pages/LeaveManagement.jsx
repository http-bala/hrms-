import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaves } from "../redux/leaveSlice";
import { FaCheck, FaTimes, FaPlus } from "react-icons/fa";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const LeaveManagement = () => {
  const dispatch = useDispatch();
  const { leaves, status } = useSelector((state) => state.leave);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => { dispatch(fetchLeaves()); }, [dispatch]);

  const handleStatusChange = async (id, status) => {
    await axios.put(`http://localhost:5000/api/leaves/${id}`, { status }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(fetchLeaves());
  };

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Employee Leave Management</h1>
       

        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Employee</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Reason</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr key={leave._id} className="border-b border-gray-700">
                  <td className="p-2">{leave.employee.name}</td>
                  <td className="p-2">{new Date(leave.startDate).toDateString()}</td>
                  <td className="p-2">{new Date(leave.endDate).toDateString()}</td>
                  <td className="p-2">{leave.reason}</td>
                  <td className="p-2">{leave.status}</td>
                  <td className="p-2 flex space-x-2">
                    <button onClick={() => handleStatusChange(leave._id, "Approved")} className="bg-blue-600 p-2 rounded">
                      <FaCheck />
                    </button>
                    <button onClick={() => handleStatusChange(leave._id, "Rejected")} className="bg-red-600 p-2 rounded">
                      <FaTimes />
                    </button>
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

export default LeaveManagement;
