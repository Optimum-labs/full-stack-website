"use client";

import React, { useState } from "react";

const InterviewPrepPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [roleName, setRoleName] = useState("");
  const [error, setError] = useState("");

  const handleAddButtonClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = () => {
    if (!companyName || !roleName) {
      setError("Please fill out all required fields.");
      return;
    }

    // Handle submission logic here, e.g., sending data to backend

    // For demo purposes, simply navigating to the next page
    window.location.href = '/interview/interview-questions';
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4 text-center text-blue-800">AI Interview Preparation</h2>
      <div className="border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-4">Select a company/organization and your role</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="border border-gray-300 rounded-lg p-4 hover:bg-[#f3f3f3] cursor-pointer"
            onClick={handleAddButtonClick}
          >
            <div className="text-5xl text-gray-800 font-semibold text-center mt-8">+</div>
            <p className="text-center text-gray-600 mt-4">Add New Entry</p>
          </div>
        </div>
      </div>

      {/* Popup for adding new entry */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Add New Entry</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="text"
              placeholder="Organization/Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Role Name"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewPrepPage;
