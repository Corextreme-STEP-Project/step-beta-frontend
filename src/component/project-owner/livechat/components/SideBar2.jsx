import React from "react";
import { FaEnvelope, FaTrashAlt, FaBroom } from "react-icons/fa";

const SideBar2 = () => {
  return (
    <aside className="bg-gray-200 text-black p-6 w-full h-screen sm:w-1/4 sm:min-w-[250px]">
      <div className="flex flex-col items-center mb-6">
        {/* Profile Section */}
        <button className="text-lg font-bold mb-4 border-slate-500 bg-[#C8C6C6] h-20 w-20 rounded-full flex items-center justify-center">
          <p>SA</p>
        </button>
        <p className="font-semibold text-center">Support Assistant</p>
        <p className="text-lg text-black mt-1 text-center">( +233 ) 0245258015</p>
      </div>

      {/* Contact Info Section */}
      <div className="mt-6 bg-[#D9D9D9] p-3 rounded-md">
        <div className="flex items-center gap-2 mb-3">
          <FaEnvelope className="text-black" />
          <p className="text-sm">loremAssistant@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <FaTrashAlt className="text-black" />
          <p className="text-sm">Delete Chat</p>
        </div>
        <div className="flex items-center gap-2">
          <FaBroom className="text-black" />
          <p className="text-sm">Clear Chat</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar2;
