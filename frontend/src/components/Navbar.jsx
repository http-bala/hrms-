import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice.js";
import Button from "./ui/Button.jsx";
import { FiMenu, FiBell, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-neutral-800 shadow-sm border-b border-gray-200 dark:border-neutral-700 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Icon */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl text-gray-800 dark:text-white"
          >
            <FiMenu />
          </button>

          {/* Search Bar */}
          <div className="mx-4 flex-1 max-w-md hidden md:block">
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
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md leading-5 bg-white dark:bg-neutral-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:text-gray-200 sm:text-sm"
                placeholder="Search employees"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button
              type="button"
              className="relative p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            >
              <span className="sr-only">View notifications</span>
              <FiBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            >
              <span className="sr-only">Toggle dark mode</span>
              {isDarkMode ? (
                <FiMoon className="h-6 w-6" />
              ) : (
                <FiSun className="h-6 w-6" />
              )}
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              >
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>

            {/* Logout Button */}
            {/* <Button onClick={handleLogout}>Logout</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;