import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between bg-[#12AA68] text-white px-4 py-3 md:px-8">
      {/* Title Section */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-lg md:text-3xl font-semibold">Live Chat and Support</p>
      </div>

      {/* User Info and Icons */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Profile Button */}
        <div className="flex items-center gap-2">
          <button className="border-2 border-white h-10 w-10 md:h-12 md:w-12 rounded-full flex justify-center items-center">
            <FaUser className="text-sm md:text-lg" />
          </button>
          <p className="text-base md:text-xl font-medium">BE</p>
        </div>

        {/* Settings and Close Icons */}
        <div className="flex items-center gap-3">
          <IoIosSettings className="text-lg md:text-2xl" />
          <IoCloseSharp className="text-lg md:text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
