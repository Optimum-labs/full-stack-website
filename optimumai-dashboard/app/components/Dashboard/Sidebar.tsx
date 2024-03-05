"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaCog,
  FaFileAlt,
  FaChartBar,
  FaSignOutAlt,
  FaEdit,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import UserProfile from "../UserProfile";
import { supabase } from "../../../lib/supabase";

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {  
    try {
      await supabase.auth.signOut();
    } catch (error: any) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="bg-[#f3f3f3] text-black flex-none overflow-y-auto fixed top-16 left-0 bottom-0">
      <div className="flex p-4 justify-between items-center">
        <div className="flex items-center">
          <div className="m-auto">
            <UserProfile isOpen={isOpen} />
          </div>
        </div>
        <div className="md:hidden fixed -mt-20 -ml-3">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* <hr className="border-t border-gray-700 mb-4" /> */}

      <div className={`px-4 md:block`}>
        <Link href="/interview">
          <div className="navItem mb-8 mt-8 flex items-center hover:text-blue-500 active:text-green-500">
            <FaChartBar className="mr-2 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>
              Interview Preps
            </span>
          </div>
        </Link>
        <Link href="/interview-dashboard">
          <div className="navItem mb-8 mt-8 flex items-center hover:text-blue-500 active:text-green-500">
            <FaFileAlt className="mr-2 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>
              Interview Dashboard
            </span>
          </div>
        </Link>
        <Link href="/profile-editing">
          <div className="navItem mb-8 mt-8 flex items-center hover:text-blue-500 active:text-green-500">
            <FaEdit className="mr-2 text-xl"/>
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>
              Profile Editing
            </span>
          </div>
        </Link>
        <Link href="/resume-review">
          <div className="navItem flex mb-8 mt-8 items-center hover:text-blue-500 active:text-green-500">
            <FaFileAlt className="mr-2 text-xl"/>
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>
              Resume Review
            </span>
          </div>
        </Link>
        <Link href="/settings">
          <div className="navItem flex mb-8 mt-8 items-center hover:text-blue-500 active:text-green-500">
            <FaCog className="mr-2 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>
              Settings
            </span>
          </div>
        </Link>
        <Link href="/">
        <div
          className="navItem flex mb-8 mt-8 items-center cursor-pointer hover:text-blue-500 active:text-green-500"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-2 text-xl" />
          <span className={`${isOpen ? "block" : "hidden"} md:block`}>
            Logout
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
