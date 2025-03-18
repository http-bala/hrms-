import Employee from "../models/Employee.js";

// 🔹 Add Employee
export const addEmployee = async (req, res) => {
  console.log("Received Data:", req.body); // Debugging ke liye

  if (!req.body.firstName || !req.body.email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      gender,
      streetAddress,
      city,
      state,
      postalCode,
      emergencyName,
      emergencyPhone,
      emergencyRelationship,
      jobTitle,
      department,
      employmentType,
      employeeStatus,
      startDate,
      manager,
      workLocation,
      salary,
      payFrequency,
    } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    // Check if employee already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // Create new employee
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      gender,
      streetAddress,
      city,
      state,
      postalCode,
      emergencyName,
      emergencyPhone,
      emergencyRelationship,
      jobTitle,
      department,
      employmentType,
      employeeStatus,
      startDate,
      manager,
      workLocation,
      salary,
      payFrequency,
      resume: req.files["resume"] ? req.files["resume"][0].path : null,
      idProof: req.files["idProof"] ? req.files["idProof"][0].path : null,
      offerLetter: req.files["offerLetter"]
        ? req.files["offerLetter"][0].path
        : null,
      additionalDocs: req.files["additionalDocs"]
        ? req.files["additionalDocs"].map((file) => file.path)
        : [],
    });

    await newEmployee.save();
    res
      .status(201)
      .json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get All Employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate("manager createdBy");
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get Single Employee
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      "manager createdBy"
    );
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      department,
      jobTitle,
      salary,
      birthDate,
      employmentType,
      employeeStatus,
      workLocation,
      streetAddress,
      city,
      state,
      postalCode,
      startDate,
      manager,
      training,
      equipment,
      accountSetup,
      emergencyContact,
    } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        phone,
        department,
        jobTitle,
        salary,
        birthDate,
        employmentType,
        employeeStatus,
        workLocation,
        streetAddress,
        city,
        state,
        postalCode,
        startDate,
        manager,
        training,
        equipment,
        accountSetup,
        emergencyContact,
      },
      { new: true }
    ).populate("manager createdBy");

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
