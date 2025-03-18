import { useParams, useNavigate } from "react-router-dom";

const EditPayroll = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const markAsPaid = async () => {
    const response = await fetch(`/api/payrolls/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Paid" }),
    });

    if (response.ok) {
      alert("Payroll marked as Paid!");
      navigate("/admin/payrolls");
    } else {
      alert("Failed to update payroll.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mark Payroll as Paid</h2>
      <button onClick={markAsPaid} className="bg-green-600 text-white px-4 py-2 rounded">
        Confirm Payment
      </button>
    </div>
  );
};

export default EditPayroll;
