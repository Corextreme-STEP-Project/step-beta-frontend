import React from "react";
import { FaComments, FaRegComment } from "react-icons/fa";

const Body = () => {
  return (
    <div className="p-5 md:p-10 ml-0 md:ml-1/4 h-screen overflow-y-scroll bg-[#D9D9D9]">
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg max-w-7xl mx-auto">
        {/* FAQ Header */}
        <div className="mb-5">
          <p className="text-xl md:text-2xl font-bold">FAQs</p>
          <p className="text-sm md:text-base">
            Stuck on something? We're here to help with all your questions and
            answers in one place.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="grid gap-8 md:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-3">
              <div className="flex gap-2 my-1">
                <FaComments />
                <p className="font-bold text-sm md:text-base">
                  How do I access my regulatory dashboard and monitor multiple
                  projects?
                </p>
              </div>
              <p className="text-sm md:text-base">
                Log in to your account and select "Dashboard" from the main
                menu. Here, you'll find an overview of all projects under your
                jurisdiction. Use the filters to view specific projects based on
                status, location, or project owner.
              </p>
            </div>
          ))}
        </div>

        {/* Button for Additional FAQ */}
        <div className="mt-4 flex justify-center">
          <button className="bg-[#C6BEBE] text-white w-24 h-8 md:w-28 md:h-10 rounded-xl text-sm md:text-base">
            See more
          </button>
        </div>

        {/* Live Support Section */}
        <div className="py-7">
          <p className="text-lg md:text-xl font-bold">
            LIVE SUPPORT & GUIDANCE
          </p>
          <p className="text-sm md:text-base">
            Need further assistance? Our support assistant is always available
            to help you navigate through any project issues, whether it's
            related to tender management, contract execution, or compliance
            oversight. Hit the Chat Button below to start a conversation with
            our support team.
          </p>
        </div>

        {/* Chat Button */}
        <div className="flex justify-center">
          <button className="w-40 h-10 flex items-center justify-center border bg-white rounded-2xl shadow-2xl">
            <span className="flex items-center justify-center w-6 h-6">
              <FaRegComment className="text-xl text-[#12AA68]" />
            </span>
            <p className="ml-2 text-sm font-medium text-[#12AA68]">Chat</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
