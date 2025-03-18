import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../redux/employeeSlice";
import { Link } from 'react-router-dom'
const Employees = () => {
  
    const dispatch = useDispatch();

    // Use correct state selection
    const employeeState = useSelector((state) => state.employee);
    const employees = employeeState?.employees || [];
    const status = employeeState?.status || "idle";
    const error = employeeState?.error || null;

    const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  console.log("Redux state:", useSelector((state) => state));




  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(employees.filter(emp => emp._id !== id));
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  return (
    <section className="p-4">
          <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Employee Management
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        Manage your organization's workforce efficiently.
      </p>
    </div>
    {/* Employee Management Toolbar */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left Side Controls */}
      <div className="flex flex-wrap gap-2">
        <Link to="/employees/add" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-150">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Employee
        </Link>
        <button className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-800 dark:text-white rounded-md transition duration-150">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Export
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-800 dark:text-white rounded-md transition duration-150">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </button>
      </div>
      {/* Right Side Controls */}
      <div className="w-full sm:w-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md leading-5 bg-white dark:bg-neutral-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:text-gray-200 sm:text-sm"
            placeholder="Search employees"
          />
        </div>
      </div>
    </div>
    <div className="bg-white  dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden mb-6">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3">Employee</span>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Department
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Position
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Join Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
        {employees.map((emp) => (
    <tr key={emp._id} className="hover:bg-gray-50 dark:hover:bg-neutral-700">
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                />
                <div className="flex-shrink-0 h-10 w-10">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={emp.image || "https://placehold.co/40x40"}
                        alt={emp.firstName}
                    />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {emp.firstName} {emp.lastName}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {emp.email}
                    </div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 dark:text-white">{emp.department}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 dark:text-white">{emp.jobTitle}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                emp.employeeStatus === "active"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
            }`}>
                {emp.employeeStatus}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            {new Date(emp.startDate).toLocaleDateString()}
        </td>
        <td className="px-6 gap-3 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end space-x-2">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
        </td>
    </tr>
))}

        </tbody>
      </table>
    </div>
    {/* Pagination */}
    <div className="bg-white dark:bg-neutral-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-neutral-700 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-neutral-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-neutral-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">5</span>
            of
            <span className="font-medium">248</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm font-medium text-gray-700 dark:text-gray-300">
              ...
            </span>
            <a
              href="#"
              className="bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              25
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  );
};

export default Employees;
