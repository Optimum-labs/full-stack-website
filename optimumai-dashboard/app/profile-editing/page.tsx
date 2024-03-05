"use client";
import React, { useState, useEffect } from "react";
import User from "../data/User";

interface User {
  avatar: string;
  username: string;
}

const ProfileEditing: React.FC = () => {
  const [editedUser, setEditedUser] = useState<User>({
    avatar: "",
    username: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setEditedUser(storedUser);
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditedUser((prevUser) => ({
          ...prevUser,
          avatar: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      username: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    // Save changes to local storage
    localStorage.setItem("user", JSON.stringify(editedUser));
    alert("Changes saved successfully!");
  };

  return (
    <div className="dashboardContent px-8 py-6">
      <div className="sectionHeading mb-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-800">Edit Profile</h2>
        <p>Update your profile information.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="profileEditing">
          <div className="flex-none items-center mt-8 mb-4">
            <img
              src={User.avatar}
              alt={`${User.username}'s Avatar`}
              className="h-20 w-20 rounded-full"
            />
            <p
              className={`md:block text-gray-800 mt-4 m-auto`}
            >
              {User.username}
            </p>
          </div>
          <div className="editingForm mt-8">
            <label htmlFor="avatarInput" className="block text-lg mb-2">
              Change Avatar
            </label>
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              onChange={handleAvatarChange}
              className="mb-4"
            />
            <label htmlFor="usernameInput" className="block text-lg mb-2">
              Change Username
            </label>
            <input
              type="text"
              id="usernameInput"
              value={editedUser.username}
              onChange={handleUsernameChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Additional content for larger screens */}
          <div className="bg-gray-100 p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-4">
              Tips for Profile Editing
            </h3>
            <ul className="list-disc pl-6">
              <li>Choose a clear and professional avatar.</li>
              <li>Make your username memorable and unique.</li>
              <li>Double-check your changes before saving.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditing;
