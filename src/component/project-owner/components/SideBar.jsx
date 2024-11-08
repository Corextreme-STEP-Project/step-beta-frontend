import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneForwarded } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="bg-[#D9D9D9] text-black p-6 md:w-1/4 w-full h-screen">
      <div className="w-full flex flex-col items-center md:items-start">
        {/* Logo Section */}
        <button className="text-lg font-bold mb-8 border-slate-500 bg-[#C8C6C6] h-20 w-20 rounded-full flex justify-center items-center">
          Logo
        </button>

        {/* Navigation Links */}
        <div className="text-[#12AA68] w-full">
          <nav className="flex flex-col space-y-4 text-center md:text-left">
            <Link className="font-normal hover:underline">Project Management</Link>
            <Link className="font-normal hover:underline">Tendering</Link>
            <Link className="font-normal hover:underline">Contract Awarding</Link>
            <Link className="font-normal hover:underline">Execution</Link>
            <Link className="font-normal hover:underline">Monitoring/Control</Link>
            <Link className="font-normal hover:underline">Report Analysis</Link>
            <Link className="font-normal hover:underline">Help/Support</Link>
          </nav>
        </div>

        {/* Live Chat Section */}
        <div className="pt-10 w-full">
          <button className="w-full flex items-center gap-2 bg-[#12AA68] text-white px-4 py-3 rounded-lg justify-center md:justify-start">
            <Link to="/messagehelp" className="w-full">
              <h2 className="font-normal whitespace-nowrap text-center md:text-left">Live Chat</h2>
            </Link>
          </button>

          {/* Contact Section */}
          <div className="flex items-center gap-4 pt-5 justify-center md:justify-start">
            <MdPhoneForwarded className="text-xl text-[#12AA68]" />
            <p className="text-xl text-[#12AA68]">0245258015</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
