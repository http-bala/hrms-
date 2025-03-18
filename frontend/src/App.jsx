import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/employee/Employees";
import Layout from "./components/Layout";

// Main App Component with Routing configuration
import AddEmployee from "./pages/employee/AddEmployee";
import EmployeeDetails from "./pages/employee/EmployeeDetails";
import NotFound from "./pages/NotFound";
import EmployeeOverview from "./pages/employee/EmployeeOverview";
import AttendanceOverview from "./pages/Attendance/AttendanceOverview";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* employee routes  */}
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/details" element={<EmployeeDetails />} />
          <Route path="/employees/overview" element={<EmployeeOverview />} />
          {/* attendance routes */}
          <Route path="/Attendance/overview" element={<AttendanceOverview />} />
        </Route>

        {/* Default Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
