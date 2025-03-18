import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUsers, FiCalendar, FiDollarSign, FiFileText, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isEmployeeOpen, setEmployeeOpen] = useState(false);
  const [isAttendanceOpen, setAttendanceOpen] = useState(false);
  const [isleavesOpen, setLeavesOpen] = useState(false);

  const dispatch = useDispatch()

  const handlelogout=()=>{
      dispatch(logout())
  }

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-neutral-800 h-screen w-64 border-r border-gray-200 dark:border-neutral-700 shadow-sm flex-shrink-0 fixed lg:relative transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 z-50`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">
              HR Dashboard
            </span>
          </div>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4">
          {/* Overview */}
          <li>
            <Link
              to="/dashboard"
              className="flex items-center px-5 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-neutral-700 border-l-4 border-blue-500"
            >
              <FiHome className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>

          {/* Employees with Dropdown */}
          <li>
            <button
              onClick={() => setEmployeeOpen(!isEmployeeOpen)}
              className="w-full flex items-center justify-between px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <div className="flex items-center">
                <FiUsers className="w-5 h-5 mr-3" />
                Employees
              </div>
              {isEmployeeOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {/* Employee Submenu */}
            {isEmployeeOpen && (
              <ul className="ml-8 mt-1 space-y-2 text-sm">
                <li>
                  <Link
                    to="/employees/overview"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Employee Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    All Employees
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees/add"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Add Employee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees/details"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Employee Details
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Attendance with Dropdown */}
          <li>
            <button
              onClick={() => setAttendanceOpen(!isAttendanceOpen)}
              className="w-full flex items-center justify-between px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <div className="flex items-center">
                <FiCalendar className="w-5 h-5 mr-3" />
                Attendance
              </div>
              {isAttendanceOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {/* Attendance Submenu */}
            {isAttendanceOpen && (
              <ul className="ml-8 mt-1 space-y-2 text-sm">
                <li>
                  <Link
                    to="/Attendance/overview"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Attendance Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees/attendance/logs"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Attendance Logs Table
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Leave Management with Dropdown */}
          <li>
            <button
              onClick={() => setLeavesOpen(!isleavesOpen)}
              className="w-full flex items-center justify-between px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <div className="flex items-center">
                <FiCalendar className="w-5 h-5 mr-3" />
                Leave Management
              </div>
              {isleavesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {/* Leave Submenu */}
            {isleavesOpen && (
              <ul className="ml-8 mt-1 space-y-2 text-sm">
                <li>
                  <Link
                    to="/leaves"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Leave Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees/attendance"
                    className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    Emp Attendance Mark
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Payroll */}
          <li>
            <Link
              to="/admin/payrolls"
              className="flex items-center px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <FiDollarSign className="w-5 h-5 mr-3" />
              Payroll
            </Link>
          </li>

          {/* Reports */}
          <li>
            <Link
              to="/reports"
              className="flex items-center px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <FiFileText className="w-5 h-5 mr-3" />
              Reports
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link
              to="/settings"
              className="flex items-center px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-150"
            >
              <FiFileText className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>

        {/* User Profile Section */}
        <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-neutral-700 p-4">
          <div className="flex items-center">
            <img
              src="https://placehold.co/40x40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-600"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                John Doe
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                HR Manager
              </p>
            </div>
            <button className="ml-auto text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" onClick={handlelogout}>
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
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;