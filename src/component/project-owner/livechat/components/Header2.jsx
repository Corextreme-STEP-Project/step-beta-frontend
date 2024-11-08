import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Avatar from "../../../../assets/image/Avatar.png";

const Header2 = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-[#12AA68] text-white py-4 px-6 sm:px-8">
      {/* Left section */}
      <div className="flex justify-center items-center mx-auto mb-2 sm:mb-0">
        <p className="text-2xl sm:text-3xl font-semibold">Live Chat and Support</p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <button className="border-2 border-white h-12 w-12 rounded-full flex items-center justify-center">
            <img src={Avatar} alt="Avatar" className="h-10 w-10 object-cover rounded-full" />
          </button>
          <p className="text-xl font-medium flex items-center">BE</p>
        </div>

        <span className="flex gap-4">
          <IoIosSettings className="text-xl sm:text-2xl" />
          <IoCloseSharp className="text-xl sm:text-2xl" />
        </span>
      </div>
    </header>
  );
};

export default Header2;
