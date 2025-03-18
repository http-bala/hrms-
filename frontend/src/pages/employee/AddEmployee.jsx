import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AddEmployee = () => {
  const token =  localStorage.getItem("token");
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
    jobTitle: "",
    department: "",
    employmentType: "full_time",
    employeeStatus: "active",
    startDate: "",
    manager: "",
    workLocation: "office",
    salary: "",
    payFrequency: "monthly",
    resume: null,
    idProof: null,
    offerLetter: null,
    additionalDocs: [],
    equipment: {
      laptop: false,
      phone: false,
      accessCard: false,
      officeSupplies: false,
    },
    accountSetup: {
      emailAccount: false,
      systemAccess: false,
      directoryListing: false,
    },
    training: {
      orientation: false,
      deptTraining: false,
      securityTraining: false,
      hrPolicies: false,
    },
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      // Handle nested checkbox fields
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: checked,
        },
      }));
    } else if (type === "file") {
      // Handle file uploads
      setFormData((prevData) => ({
        ...prevData,
        [name]: files.length > 1 ? Array.from(files) : files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    // JSON fields ko append karo
    Object.keys(formData).forEach((key) => {
      if (
        key !== "resume" &&
        key !== "idProof" &&
        key !== "offerLetter" &&
        key !== "additionalDocs"
      ) {
        formDataToSend.append(key, typeof formData[key] === "object" ? JSON.stringify(formData[key]) : formData[key]);
      }
    });
  
    // File fields ko append karo
    if (formData.resume) formDataToSend.append("resume", formData.resume);
    if (formData.idProof) formDataToSend.append("idProof", formData.idProof);
    if (formData.offerLetter) formDataToSend.append("offerLetter", formData.offerLetter);
  
    console.log("Sending FormData:", formDataToSend); // Debugging ke liye
  
    try {
      const response = await axios.post("http://localhost:5000/api/employees", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("Response:", response.data);
      toast.success("Employee added successfully!");
          // 🔹 **Form Reset (Set Empty Data)**
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
      gender: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      emergencyName: "",
      emergencyPhone: "",
      emergencyRelationship: "",
      jobTitle: "",
      department: "",
      employmentType: "full_time",
      employeeStatus: "active",
      startDate: "",
      manager: "",
      workLocation: "office",
      salary: "",
      payFrequency: "monthly",
      equipment: { laptop: false, phone: false, accessCard: false, officeSupplies: false },
      accountSetup: { emailAccount: false, systemAccess: false, directoryListing: false },
      training: { orientation: false, deptTraining: false, securityTraining: false, hrPolicies: false },
      notes: "",
      resume: null,
      idProof: null,
      offerLetter: null,
      additionalDocs: null,
    });
    setStep(1);
    } catch (error) {
      console.error("Error submitting employee data:", error);
      toast.error("Failed to add employee. Please try again.");
    }
  };
  

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <section className="bg-gray-50 min-h-screen pb-12 ">
      <div className="max-w-4xl p-8 ">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Add New Employee
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Complete the form below to add a new employee to the system.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <div className="relative">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${(step / 4) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500">
                Step <span>{step}</span> of 4
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-x-2 text-xs">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-medium ${
                      step >= num
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {num}
                  </div>
                  <div className="mt-1 text-center text-xs font-medium text-gray-500">
                    {
                      [
                        "Personal Info",
                        "Job Details",
                        "Documents",
                        "Onboarding",
                      ][num - 1]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 px-4 py-5 sm:px-6"
          >
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="birthDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not_to_say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="streetAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="emergencyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="emergencyPhone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="emergencyRelationship"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Emergency Contact Relationship
                    </label>
                    <input
                      type="text"
                      name="emergencyRelationship"
                      value={formData.emergencyRelationship}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Job Details */}
            {step === 2 && (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Job Details
                </h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="engineering">Engineering</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="hr">Human Resources</option>
                      <option value="finance">Finance</option>
                      <option value="it">IT</option>
                      <option value="operations">Operations</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="employmentType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Employment Type
                    </label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="full_time">Full-time</option>
                      <option value="part_time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="temporary">Temporary</option>
                      <option value="intern">Intern</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="employeeStatus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Employee Status
                    </label>
                    <select
                      name="employeeStatus"
                      value={formData.employeeStatus}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="active">Active</option>
                      <option value="probation">Probation</option>
                      <option value="on_leave">On Leave</option>
                      <option value="terminated">Terminated</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="manager"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Manager
                    </label>
                    <select
                      name="manager"
                      value={formData.manager}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select Manager</option>
                      <option value="1">Michael Foster (Engineering)</option>
                      <option value="2">Lindsay Walton (Marketing)</option>
                      <option value="3">Dries Vincent (Sales)</option>
                      <option value="4">Sarah Johnson (HR)</option>
                      <option value="5">Tom Cook (Finance)</option>
                    </select>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="workLocation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Work Location
                    </label>
                    <select
                      name="workLocation"
                      value={formData.workLocation}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="office">Office</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Base Salary
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="focus:ring-blue-500  p-2 outline-1 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="payFrequency"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pay Frequency
                    </label>
                    <select
                      name="payFrequency"
                      value={formData.payFrequency}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm  p-2 outline-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="hourly">Hourly</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Documents
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="resume"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ID Proof <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="idProof"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="idProof"
                              name="idProof"
                              type="file"
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, JPG, PNG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Signed Offer Letter
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="offerLetter"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="offerLetter"
                              name="offerLetter"
                              type="file"
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF up to 5MB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Additional Documents
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="additionalDocs"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload files</span>
                            <input
                              id="additionalDocs"
                              name="additionalDocs"
                              type="file"
                              multiple
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX, JPG, PNG up to 10MB each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Onboarding */}
            {step === 4 && (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Onboarding Checklist
                </h3>
                <div className="space-y-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Equipment
                    </legend>
                    <div className="mt-4 space-y-4">
                      {Object.entries(formData.equipment).map(
                        ([key, value]) => (
                          <div key={key} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={key}
                                name={`equipment.${key}`}
                                type="checkbox"
                                checked={value}
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor={key}
                                className="font-medium text-gray-700"
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Account Setup
                    </legend>
                    <div className="mt-4 space-y-4">
                      {Object.entries(formData.accountSetup).map(
                        ([key, value]) => (
                          <div key={key} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={key}
                                name={`accountSetup.${key}`}
                                type="checkbox"
                                checked={value}
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor={key}
                                className="font-medium text-gray-700"
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Training
                    </legend>
                    <div className="mt-4 space-y-4">
                      {Object.entries(formData.training).map(([key, value]) => (
                        <div key={key} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={key}
                              name={`training.${key}`}
                              type="checkbox"
                              checked={value}
                              onChange={handleChange}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={key}
                              className="font-medium text-gray-700"
                            >
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Any special instructions or notes for this employee"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Form Controls */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Previous
                </button>
              )}
              <div>
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Add Employee
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEmployee;
