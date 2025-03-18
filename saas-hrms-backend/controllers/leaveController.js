import Leave from "../models/Leave.js";

// 🔹 Apply for Leave
export const applyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const newLeave = await Leave.create({
      employee: req.user._id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    res.status(201).json({ message: "Leave request submitted", leave: newLeave });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get All Leave Requests (HR/Admin)
export const getAllLeaveRequests = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee", "name email");
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get Leave Requests for Single Employee
export const getEmployeeLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ employee: req.user._id });
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Approve or Reject Leave (HR/Admin)
export const updateLeaveStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const leave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (!leave) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.status(200).json({ message: `Leave ${status}`, leave });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
