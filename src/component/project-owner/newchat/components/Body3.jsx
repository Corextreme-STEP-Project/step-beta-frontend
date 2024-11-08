import React from "react";
import { FaSearchMinus } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Body3 = () => {
  const messages = [
    {
      id: 1,
      text: "Hello Bernice, welcome. How can we help you?",
      sender: "agent",
    },
    {
      id: 2,
      text: "My name is Bernice, I would like you to help me create a new project",
      sender: "user",
    },
    {
      id: 3,
      text: "Ok, I am glad you came at me. Please, click on the link below",
      sender: "agent",
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll bg-white">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between sm:gap-4 mb-4 px-4 sm:px-8 py-4">
        <div className="flex gap-2">
          <button className="text-lg font-bold border-slate-500 bg-[#C8C6C6] h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center">
            <p>SA</p>
          </button>
          <div className="pt-2">
            <p className="font-semibold">Support Assistant</p>
            <p className="text-green-500">Online</p>
          </div>
        </div>
        <button className="flex text-white bg-[#9FD2BC] h-10 sm:w-72 justify-center items-center pl-5 gap-2 border border-[#12AA68] mt-4 sm:mt-0">
          <FaSearchMinus className="size-5" />
          <input
            placeholder="Search Chat..."
            className="bg-[#9FD2BC] placeholder-white focus:outline-none w-full sm:w-60"
          />
        </button>
      </div>

      {/* Chat Section */}
      <div className="border border-[#12AA68] rounded-lg p-4 bg-white h-full mb-8">
        {/* Chat messages will go here */}
      </div>

      {/* Input Section */}
      <div className="bg-[#EEEDED] mt-9 flex w-full h-24 sm:h-28 justify-center px-4 sm:px-8">
        <Link to="/newchat" className="flex items-center justify-center w-12 h-12 bg-[#9FD2BC] rounded-full">
          <IoIosAdd className="text-white text-3xl" />
        </Link>
        <button className="bg-[#9FD2BC] h-10 w-full sm:w-[450px] flex justify-between items-center rounded-full px-4 sm:px-6 ml-4">
          <input placeholder="Type a message" className="bg-[#9FD2BC] placeholder-black w-full focus:outline-none rounded-full text-sm sm:text-base" />
          <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
            <IoIosSend className="text-center text-xl" />
          </button>
        </button>
      </div>
    </div>
  );
};

export default Body3;
