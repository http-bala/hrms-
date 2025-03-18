import mongoose from "mongoose";
import Counter from "./counterSchema.js"; // Import counter model

const employeeSchema = new mongoose.Schema(
  {
    empId: { type: Number, unique: true }, // Auto-incremented Employee ID
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    jobTitle: { type: String, required: true },
    salary: { type: Number, required: true },
    birthDate: { type: Date },
    employmentType: { type: String, enum: ["full_time", "part_time", "contract"], default: "full_time" },
    employeeStatus: { type: String, enum: ["active", "on_leave", "terminated"], default: "active" },
    workLocation: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    startDate: { type: Date },
    manager: { type: String },
    resume: { type: String },
    idProof: { type: String },
    offerLetter: { type: String },
    additionalDocs: [{ type: String }],
    training: {
      orientation: { type: Boolean, default: false },
      securityTraining: { type: Boolean, default: false },
      deptTraining: { type: Boolean, default: false },
      hrPolicies: { type: Boolean, default: false },
    },
    equipment: {
      laptop: { type: Boolean, default: false },
      phone: { type: Boolean, default: false },
      accessCard: { type: Boolean, default: false },
      officeSupplies: { type: Boolean, default: false },
    },
    accountSetup: {
      emailAccount: { type: Boolean, default: false },
      systemAccess: { type: Boolean, default: false },
      directoryListing: { type: Boolean, default: false },
    },
    emergencyContact: {
      name: { type: String },
      phone: { type: String },
      relationship: { type: String },
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // HR/Admin jo employee add karega
  },
  { timestamps: true }
);

// **Pre-save middleware to generate empId automatically**
employeeSchema.pre("save", async function (next) {
  if (!this.empId) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { name: "employeeId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      this.empId = counter.seq;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;


    // manager: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
