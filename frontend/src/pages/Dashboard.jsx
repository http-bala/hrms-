import { useState } from "react";

const Dashboard = () => {
  // State for managing attendance trends filter
  const [attendanceFilter, setAttendanceFilter] = useState("weekly");

  // State for managing salary distribution filter
  const [salaryFilter, setSalaryFilter] = useState("department");

  // Dummy data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "new_employee",
      title: "New employee registered",
      description: "Sarah Johnson has been registered as a new employee in the Engineering department.",
      time: "10 minutes ago",
      icon: "green",
    },
    {
      id: 2,
      type: "leave_request",
      title: "Leave request submitted",
      description: "Michael Simmons has requested 3 days of vacation leave for next week.",
      time: "45 minutes ago",
      icon: "yellow",
    },
    {
      id: 3,
      type: "payroll_processed",
      title: "Payroll processed",
      description: "Monthly payroll for 248 employees has been processed and scheduled for payment.",
      time: "1 hour ago",
      icon: "blue",
    },
    {
      id: 4,
      type: "system_alert",
      title: "System alert",
      description: "Low disk space warning. Please contact IT department to allocate more resources.",
      time: "2 hours ago",
      icon: "red",
    },
  ];

  // Dummy data for birthdays and anniversaries
  const birthdaysAndAnniversaries = [
    {
      id: 1,
      name: "Emily Parker",
      role: "Senior Developer",
      type: "birthday",
      date: "Today",
    },
    {
      id: 2,
      name: "Robert Wilson",
      role: "Marketing Manager",
      type: "anniversary",
      date: "5 Year Anniversary",
    },
    {
      id: 3,
      name: "Lisa Thompson",
      role: "HR Specialist",
      type: "birthday",
      date: "Tomorrow",
    },
  ];

  // Dummy data for announcements
  const announcements = [
    {
      id: 1,
      title: "Company Town Hall Meeting",
      description: "Join us for the quarterly town hall meeting this Friday at 3 PM in the main conference room.",
      date: "June 15, 2023",
      color: "blue",
    },
    {
      id: 2,
      title: "System Maintenance",
      description: "The HR system will be down for maintenance this Saturday from 10 PM to 2 AM.",
      date: "June 12, 2023",
      color: "yellow",
    },
    {
      id: 3,
      title: "New Benefits Program",
      description: "We're excited to announce our new employee wellness program starting next month.",
      date: "June 8, 2023",
      color: "green",
    },
    {
      id: 4,
      title: "Office Renovation",
      description: "The 3rd floor will be undergoing renovations starting next week. Please plan accordingly.",
      date: "June 5, 2023",
      color: "purple",
    },
  ];

  return (
    <section id="overview" className="p-4 sm:p-6 lg:p-8">
      {/* Dashboard Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back, John. Here's what's happening today.</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Employees Card */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Employees</h3>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800 dark:text-white">248</span>
            <span className="ml-2 text-sm font-medium text-green-500">+4.5%</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">From last month</p>
        </div>

        {/* Attendance Rate Card */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attendance Rate</h3>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800 dark:text-white">95.2%</span>
            <span className="ml-2 text-sm font-medium text-green-500">+2.1%</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">From last week</p>
        </div>

        {/* Open Leaves Card */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Open Leaves</h3>
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <svg
                className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800 dark:text-white">15</span>
            <span className="ml-2 text-sm font-medium text-red-500">+3</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Pending approval</p>
        </div>

        {/* Payroll Budget Card */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Payroll Budget</h3>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800 dark:text-white">$125k</span>
            <span className="ml-2 text-sm font-medium text-green-500">87%</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Used this month</p>
        </div>
      </div>

      {/* Graphs & Reports Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Trends Chart */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Attendance Trends</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-xs ${
                  attendanceFilter === "weekly"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                } rounded-full`}
                onClick={() => setAttendanceFilter("weekly")}
              >
                Weekly
              </button>
              <button
                className={`px-3 py-1 text-xs ${
                  attendanceFilter === "monthly"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                } rounded-full`}
                onClick={() => setAttendanceFilter("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="h-64 w-full">
            {/* Chart would be inserted here using a chart library */}
            <div className="h-full flex items-center justify-center">
              <div className="w-full h-48 relative">
                {/* Simplified line chart representation */}
                <div className="absolute bottom-0 w-full h-[2px] bg-gray-200 dark:bg-neutral-700"></div>
                <div className="absolute left-0 h-full w-[2px] bg-gray-200 dark:bg-neutral-700"></div>

                {/* Line graph visual representation */}
                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <polyline
                    points="0,35 10,30 20,32 30,25 40,28 50,20 60,15 70,18 80,10 90,15 100,8"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    className="transition-all duration-500"
                  ></polyline>
                  <circle cx="0" cy="35" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="10" cy="30" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="20" cy="32" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="30" cy="25" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="40" cy="28" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="50" cy="20" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="60" cy="15" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="70" cy="18" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="80" cy="10" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="90" cy="15" r="1.5" fill="#3b82f6"></circle>
                  <circle cx="100" cy="8" r="1.5" fill="#3b82f6"></circle>
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-[-20px] w-full flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Distribution Chart */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Salary Distribution</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-xs ${
                  salaryFilter === "department"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                } rounded-full`}
                onClick={() => setSalaryFilter("department")}
              >
                Department
              </button>
              <button
                className={`px-3 py-1 text-xs ${
                  salaryFilter === "role"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                } rounded-full`}
                onClick={() => setSalaryFilter("role")}
              >
                Role
              </button>
            </div>
          </div>
          <div className="h-64 w-full">
            {/* Chart would be inserted here using a chart library */}
            <div className="h-full flex items-center justify-center">
              {/* Simplified pie chart representation */}
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="18" cy="18" r="16" fill="#EFF6FF" className="dark:fill-blue-900/30"></circle>

                  {/* Pie segments - would normally be dynamically generated */}
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.8564 23.8771 L 18 18 Z"
                    fill="#3b82f6"
                  ></path>
                  <path
                    d="M31.8564 25.9616 a 15.9155 15.9155 0 0 1 -22.7128 5.2705 L 18 18 Z"
                    fill="#60a5fa"
                  ></path>
                  <path
                    d="M9.1436 31.2321 a 15.9155 15.9155 0 0 1 -5.2705 -22.7128 L 18 18 Z"
                    fill="#93c5fd"
                  ></path>
                  <path
                    d="M3.8731 8.5193 a 15.9155 15.9155 0 0 1 14.1269 -6.4348 L 18 18 Z"
                    fill="#bfdbfe"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-wrap justify-center mt-2 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Engineering (45%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Marketing (25%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Sales (20%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-200 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Support (10%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Add Employee</span>
          </button>

          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Process Payroll</span>
          </button>

          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Manage Leave</span>
          </button>

          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Send Alert</span>
          </button>

          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Generate Report</span>
          </button>

          <button className="p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Settings</span>
          </button>
        </div>
      </div>

      {/* Bottom Row Content - Recent Activities and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activities</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-9 h-9 rounded-full ${
                      activity.icon === "green"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : activity.icon === "yellow"
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : activity.icon === "blue"
                        ? "bg-blue-100 dark:bg-blue-900/30"
                        : "bg-red-100 dark:bg-red-900/30"
                    } flex items-center justify-center`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        activity.icon === "green"
                          ? "text-green-600 dark:text-green-400"
                          : activity.icon === "yellow"
                          ? "text-yellow-600 dark:text-yellow-400"
                          : activity.icon === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          activity.type === "new_employee"
                            ? "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            : activity.type === "leave_request"
                            ? "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            : activity.type === "payroll_processed"
                            ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            : "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        }
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Birthdays & Anniversaries and Announcements */}
        <div className="grid grid-cols-1 gap-6">
          {/* Employee Birthdays & Anniversaries */}
          <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Birthdays & Anniversaries</h3>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {birthdaysAndAnniversaries.map((item) => (
                <div key={item.id} className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-neutral-700 rounded-lg">
                  <img src="https://placehold.co/40x40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className={`w-5 h-5 ${
                        item.type === "birthday" ? "text-yellow-500" : "text-blue-500"
                      } mr-1`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          item.type === "birthday"
                            ? "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                            : "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        }
                      ></path>
                    </svg>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notices & Announcements */}
          <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Announcements</h3>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
            </div>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`border-l-4 ${
                    announcement.color === "blue"
                      ? "border-blue-500"
                      : announcement.color === "yellow"
                      ? "border-yellow-500"
                      : announcement.color === "green"
                      ? "border-green-500"
                      : "border-purple-500"
                  } pl-3`}
                >
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white">{announcement.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{announcement.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Posted on: {announcement.date}</p>
                </div>
              ))}
            </div>
            {/* Scroll indicator */}
            <div className="mt-3 flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-200 dark:bg-neutral-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;