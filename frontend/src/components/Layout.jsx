import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import {Toaster } from "react-hot-toast"
// import ChatBot from "./Chatbot";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const token = useSelector((state) => state.auth.token);

  return (
    <div className="flex h-screen bg-black">
      <Toaster />
      {/* Sidebar */}
     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1  md:ml-0">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className=" flex-1 overflow-auto">
          {token ? <Outlet /> : <Navigate to="/login" replace />}
          {/* <ChatBot/> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
