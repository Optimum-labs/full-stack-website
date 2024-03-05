import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
// import SignInButton from "@/components/SignInButton";

const TopNavbar: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white flex justify-between items-center p-4 sticky top-0 z-10 h-16">
      <div className="flex items-center">
        <a href="/">
          <FaHome className="text-white text-2xl mr-2" />
        </a>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center">
        {/* <p className="mr-2">OptimumAI User</p> */}
        {/* <div className="p-2">        
          <FaUser className="text-white" />
          <SignInButton />
        </div> */}
      </div>
    </div>
  );
};

export default TopNavbar;
