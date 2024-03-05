"use client";
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save email to local storage
    localStorage.setItem('userEmail', email);
    alert('Email saved successfully!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto my-8 transform transition duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Settings</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="mb-2">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          required 
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
