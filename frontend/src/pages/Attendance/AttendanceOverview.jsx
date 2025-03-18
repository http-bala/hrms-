import React from 'react'

const AttendanceOverview = () => {
  return (
    <section id="attendanceTracking" className="p-4 sm:p-6 lg:p-8">
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
      Attendance Tracking
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mt-1">
      Monitor employee attendance and time tracking data.
    </p>
  </div>
  {/* Attendance Stats Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {/* Today's Attendance Card */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
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
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Today's Attendance
          </p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            95.2%
          </p>
        </div>
      </div>
    </div>
    {/* On Time Card */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
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
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            On Time
          </p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            220
          </p>
        </div>
      </div>
    </div>
    {/* Late Card */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
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
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Late
          </p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            16
          </p>
        </div>
      </div>
    </div>
    {/* Absent Card */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
          <svg
            className="w-6 h-6 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Absent
          </p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            12
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Date Selector and Controls */}
  <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    {/* Date Controls */}
    <div className="flex items-center space-x-2">
      <button className="p-2 rounded-md bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-600">
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="relative">
        <input
          type="text"
          className="block w-40 px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md leading-5 bg-white dark:bg-neutral-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:text-gray-200 sm:text-sm"
          placeholder="June 20, 2023"
          readOnly=""
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <button className="p-2 rounded-md bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-600">
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    {/* Right Side Controls */}
    <div className="flex flex-wrap gap-2">
      <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-150">
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
        Mark Attendance
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
  </div>
  {/* Attendance Trends Chart */}
  <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5 mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Attendance Trends
      </h3>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
          Weekly
        </button>
        <button className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full">
          Monthly
        </button>
        <button className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full">
          Quarterly
        </button>
      </div>
    </div>
    <div className="h-64 w-full">
      {/* Chart would be inserted here using a chart library */}
      <div className="h-full flex items-center justify-center">
        <div className="w-full h-48 relative">
          {/* Simplified line chart representation */}
          <div className="absolute bottom-0 w-full h-[2px] bg-gray-200 dark:bg-neutral-700" />
          <div className="absolute left-0 h-full w-[2px] bg-gray-200 dark:bg-neutral-700" />
          {/* Line graph visual representation */}
          <svg
            className="w-full h-full"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,10 10,12 20,8 30,15 40,7 50,5 60,9 70,11 80,5 90,8 100,7"
              fill="none"
              stroke="#3b82f6"
              strokeWidth={2}
              className="transition-all duration-500"
            />
            <circle cx={0} cy={10} r="1.5" fill="#3b82f6" />
            <circle cx={10} cy={12} r="1.5" fill="#3b82f6" />
            <circle cx={20} cy={8} r="1.5" fill="#3b82f6" />
            <circle cx={30} cy={15} r="1.5" fill="#3b82f6" />
            <circle cx={40} cy={7} r="1.5" fill="#3b82f6" />
            <circle cx={50} cy={5} r="1.5" fill="#3b82f6" />
            <circle cx={60} cy={9} r="1.5" fill="#3b82f6" />
            <circle cx={70} cy={11} r="1.5" fill="#3b82f6" />
            <circle cx={80} cy={5} r="1.5" fill="#3b82f6" />
            <circle cx={90} cy={8} r="1.5" fill="#3b82f6" />
            <circle cx={100} cy={7} r="1.5" fill="#3b82f6" />
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
  {/* Attendance List */}
  <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden mb-6">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Employee
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
              Check In
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Check Out
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Duration
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
          {/* Employee 1 */}
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placehold.co/40x40"
                    alt="Employee"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #EMP001
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                Engineering
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                09:02 AM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                On Time
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                05:45 PM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                On Time
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                8h 43m
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                Present
              </span>
            </td>
          </tr>
          {/* Employee 2 */}
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placehold.co/40x40"
                    alt="Employee"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Michael Chen
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #EMP042
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                Marketing
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                08:55 AM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                On Time
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                06:10 PM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Overtime
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                9h 15m
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                Present
              </span>
            </td>
          </tr>
          {/* Employee 3 */}
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placehold.co/40x40"
                    alt="Employee"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Jessica Williams
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #EMP108
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                Human Resources
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--:--</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--:--</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                On Leave
              </span>
            </td>
          </tr>
          {/* Employee 4 */}
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placehold.co/40x40"
                    alt="Employee"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    David Rodriguez
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #EMP056
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">Sales</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                09:32 AM
              </div>
              <div className="text-xs text-red-500">Late (32 min)</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                05:55 PM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                On Time
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                8h 23m
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300">
                Late
              </span>
            </td>
          </tr>
          {/* Employee 5 */}
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placehold.co/40x40"
                    alt="Employee"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Emily Thompson
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #EMP021
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                Product
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--:--</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--:--</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">--</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                Absent
              </span>
            </td>
          </tr>
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
  {/* Department Attendance Stats */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Attendance by Department Chart */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Attendance by Department
        </h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          View Report
        </button>
      </div>
      <div className="h-64 w-full">
        {/* Chart would be inserted here using a chart library */}
        <div className="h-full flex items-center justify-center">
          {/* Simplified horizontal bar chart representation */}
          <div className="w-full h-48 flex flex-col justify-between">
            {/* Engineering Department */}
            <div className="flex items-center mb-4">
              <span className="text-xs w-24 text-gray-600 dark:text-gray-400">
                Engineering
              </span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "96%" }}
                />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                96%
              </span>
            </div>
            {/* Marketing Department */}
            <div className="flex items-center mb-4">
              <span className="text-xs w-24 text-gray-600 dark:text-gray-400">
                Marketing
              </span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "91%" }}
                />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                91%
              </span>
            </div>
            {/* HR Department */}
            <div className="flex items-center mb-4">
              <span className="text-xs w-24 text-gray-600 dark:text-gray-400">
                HR
              </span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "89%" }}
                />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                89%
              </span>
            </div>
            {/* Sales Department */}
            <div className="flex items-center mb-4">
              <span className="text-xs w-24 text-gray-600 dark:text-gray-400">
                Sales
              </span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "88%" }}
                />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                88%
              </span>
            </div>
            {/* Product Department */}
            <div className="flex items-center">
              <span className="text-xs w-24 text-gray-600 dark:text-gray-400">
                Product
              </span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "93%" }}
                />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                93%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Working Hours Stats */}
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Working Hours Stats
        </h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            This Week
          </button>
          <button className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full">
            Last Week
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Average Working Hours Card */}
        <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
          <div className="flex justify-between mb-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Average Working Hours
            </p>
            <span className="text-sm text-green-500">+2.5%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            8h 15m
          </p>
          <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>8h standard</span>
            <span className="mx-1">•</span>
            <span className="text-green-500">15m extra on average</span>
          </div>
        </div>
        {/* Total Overtime Card */}
        <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
          <div className="flex justify-between mb-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Overtime Hours
            </p>
            <span className="text-sm text-yellow-500">+5.1%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            42h 30m
          </p>
          <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>Across 28 employees</span>
            <span className="mx-1">•</span>
            <span className="text-yellow-500">Up from last week</span>
          </div>
        </div>
        {/* Earliest Check-in Card */}
        <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
          <div className="flex justify-between mb-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Earliest Check-in
            </p>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            07:32 AM
          </p>
          <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>By James Wilson</span>
            <span className="mx-1">•</span>
            <span>Engineering</span>
          </div>
        </div>
        {/* Latest Check-out Card */}
        <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
          <div className="flex justify-between mb-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Latest Check-out
            </p>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            09:15 PM
          </p>
          <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>By Anna Roberts</span>
            <span className="mx-1">•</span>
            <span>Product</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default AttendanceOverview