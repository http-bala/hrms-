import React from 'react'

const EmployeeDetails = () => {
  return (
    <section
  id="employee_profile"
  className="bg-gray-50 min-h-screen p-4  pb-12  sm:px-6 lg:px-8"
>
  <div className="w-full ">
    {/* Profile Header */}
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Employee Profile
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and information.
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit Profile
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" />
            </svg>
            Export PDF
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-24 w-24">
            <img
              className="h-24 w-24 rounded-full"
              src="https://avatar.iran.liara.run/public/128"
              alt="Profile picture"
            />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-900">Michael Foster</h3>
            <div className="mt-1 text-sm text-gray-500 flex flex-wrap">
              <span className="mr-4">ID: EMP-2023-001</span>
              <span className="mr-4">Engineering Manager</span>
              <span className="mr-4">Engineering Department</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Joined on Jun 1, 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {/* Left Column: Personal Information */}
      <div className="md:col-span-1 space-y-8">
        {/* Personal Information */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Contact details and personal info.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Michael Foster
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  michael.foster@example.com
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  (555) 123-4567
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Date of Birth
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  May 12, 1985
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Gender</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Male
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  123 Main St
                  <br />
                  Apt 4B
                  <br />
                  San Francisco, CA 94103
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Emergency Contact */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Emergency Contact
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Person to contact in emergency.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Sarah Foster
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Relationship
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Spouse
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  (555) 987-6543
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  sarah.foster@example.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Documents */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Documents
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Employee records and files.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate text-sm">
                      resume_michael_foster.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500 text-sm"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate text-sm">
                      id_proof.jpg
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500 text-sm"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate text-sm">
                      offer_letter_signed.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500 text-sm"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4 text-center">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    className="-ml-0.5 mr-1 h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Upload Document
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Middle Column: Job Details and Performance */}
      <div className="md:col-span-1 space-y-8">
        {/* Job Details */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Job Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Role and department information.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Engineering Manager
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Department
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Engineering
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Manager</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Tom Cook (CTO)
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Employment Type
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Full-time
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Start Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  June 1, 2020
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Work Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  San Francisco, CA (Hybrid)
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Performance Reviews */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Performance Reviews
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Recent evaluations and feedback.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Annual Review 2023
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Conducted by: Tom Cook
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Date: Feb 15, 2023
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Outstanding
                    </span>
                    <a
                      href="#"
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Mid-Year Review 2022
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Conducted by: Tom Cook
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Date: Aug 10, 2022
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Exceeds Expectations
                    </span>
                    <a
                      href="#"
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Annual Review 2022
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Conducted by: Tom Cook
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Date: Feb 18, 2022
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Exceeds Expectations
                    </span>
                    <a
                      href="#"
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Skills and Qualifications */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Skills &amp; Qualifications
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Employee expertise and education.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="mb-5">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Team Leadership
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Project Management
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Software Architecture
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Full-Stack Development
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  JavaScript
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  React
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Node.js
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Education
              </h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700">
                  <div className="font-medium">
                    Master of Science in Computer Science
                  </div>
                  <div>Stanford University, 2010-2012</div>
                </li>
                <li className="text-sm text-gray-700">
                  <div className="font-medium">
                    Bachelor of Science in Computer Engineering
                  </div>
                  <div>University of California, Berkeley, 2006-2010</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Attendance, Leave, Compensation */}
      <div className="md:col-span-1 space-y-8">
        {/* Attendance Overview */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Attendance Overview
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Recent attendance records.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              <div className="col-span-1">
                <dt className="text-sm font-medium text-gray-500">Present</dt>
                <dd className="mt-1 text-2xl font-semibold text-green-600">
                  21
                </dd>
                <dd className="text-sm text-gray-500">This month</dd>
              </div>
              <div className="col-span-1">
                <dt className="text-sm font-medium text-gray-500">Absent</dt>
                <dd className="mt-1 text-2xl font-semibold text-red-600">1</dd>
                <dd className="text-sm text-gray-500">This month</dd>
              </div>
              <div className="col-span-1">
                <dt className="text-sm font-medium text-gray-500">Late</dt>
                <dd className="mt-1 text-2xl font-semibold text-yellow-600">
                  2
                </dd>
                <dd className="text-sm text-gray-500">This month</dd>
              </div>
              <div className="col-span-1">
                <dt className="text-sm font-medium text-gray-500">On Leave</dt>
                <dd className="mt-1 text-2xl font-semibold text-blue-600">1</dd>
                <dd className="text-sm text-gray-500">This month</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View complete attendance history
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </div>
        {/* Leave Balance */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Leave Balance
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Available leave days by type.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">
                    Annual Leave
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    15 / 21 days
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "71%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">
                    Sick Leave
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    7 / 10 days
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">
                    Personal Leave
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    2 / 3 days
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "66%" }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request Leave
              </a>
            </div>
          </div>
        </div>
        {/* Compensation and Benefits */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Compensation &amp; Benefits
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Salary and benefits information.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Base Salary
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  $150,000 per year
                </dd>
              </div>
              <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Pay Frequency
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Monthly
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Benefits</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          Health Insurance (Premium Plan)
                        </span>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          401(k) Retirement Plan (6% match)
                        </span>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          Stock Options
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    {/* Activity Timeline */}
    <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Activity Timeline
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Recent actions and updates.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <ul className="space-y-6">
          <li className="relative flex gap-x-4">
            <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 ring-1 ring-blue-600" />
            </div>
            <div className="flex-auto">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-sm leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">
                    Annual Review Completed
                  </span>{" "}
                  by Tom Cook
                </div>
                <time
                  dateTime="2023-02-15T15:30:00"
                  className="flex-none py-0.5 text-sm leading-5 text-gray-500"
                >
                  Feb 15, 2023
                </time>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Performance review was completed with an "Outstanding" rating.
              </p>
            </div>
          </li>
          <li className="relative flex gap-x-4">
            <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-600 ring-1 ring-purple-600" />
            </div>
            <div className="flex-auto">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-sm leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">Promoted</span> to
                  Engineering Manager
                </div>
                <time
                  dateTime="2022-09-15T10:00:00"
                  className="flex-none py-0.5 text-sm leading-5 text-gray-500"
                >
                  Sep 15, 2022
                </time>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Promotion from Senior Software Engineer to Engineering Manager
                role.
              </p>
            </div>
          </li>
          <li className="relative flex gap-x-4">
            <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-green-600 ring-1 ring-green-600" />
            </div>
            <div className="flex-auto">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-sm leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">
                    Completed Training
                  </span>{" "}
                  - Leadership Skills
                </div>
                <time
                  dateTime="2022-07-10T14:00:00"
                  className="flex-none py-0.5 text-sm leading-5 text-gray-500"
                >
                  Jul 10, 2022
                </time>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Successfully completed Advanced Leadership Skills training
                program.
              </p>
            </div>
          </li>
          <li className="relative flex gap-x-4">
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-red-600 ring-1 ring-red-600" />
            </div>
            <div className="flex-auto">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-sm leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">Onboarded</span>{" "}
                  to HR Management System
                </div>
                <time
                  dateTime="2020-06-01T09:00:00"
                  className="flex-none py-0.5 text-sm leading-5 text-gray-500"
                >
                  Jun 1, 2020
                </time>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Employee record created and initial onboarding completed.
              </p>
            </div>
          </li>
        </ul>
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View complete history
            <svg
              className="ml-1 -mr-0.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default EmployeeDetails