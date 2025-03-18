import { useState } from "react";

const NewPayroll = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/payrolls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeId, amount }),
    });

    if (response.ok) {
      alert("Payroll Generated Successfully!");
      setEmployeeId("");
      setAmount("");
    } else {
      alert("Failed to generate payroll.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Generate Payroll</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Generate Payroll
        </button>
      </form>
    </div>
  );
};

export default NewPayroll;
