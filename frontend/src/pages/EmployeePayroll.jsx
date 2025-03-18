import { useEffect, useState } from "react";

const EmployeePayroll = () => {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    fetch("/api/payrolls")
      .then((res) => res.json())
      .then((data) => setPayrolls(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Payroll Records</h2>
      <ul className="space-y-3">
        {payrolls.map((payroll) => (
          <li key={payroll.id} className="border p-3 rounded shadow">
            <p>Amount: ₹{payroll.amount}</p>
            <p>Status: {payroll.status}</p>
            <p>Date: {new Date(payroll.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePayroll;
