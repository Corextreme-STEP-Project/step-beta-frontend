import React from "react";
import { FaSearchMinus } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Body2 = () => {
  const messages = [
    {
      id: 1,
      text: "Hello Efuwa, welcome. How can we help you?",
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
    <div className="h-screen overflow-y-scroll self-center bg-white">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 px-4 sm:px-8">
        <div className="flex gap-2">
          <button className="text-lg font-bold border-slate-500 bg-[#C8C6C6] h-20 w-20 rounded-full flex items-center justify-center">
            <p>SA</p>
          </button>
          <div className="pt-2">
            <p className="font-semibold">Support Assistant</p>
            <p className="text-green-500">Online</p>
          </div>
        </div>
        <button className="flex text-white bg-[#9FD2BC] h-10 justify-center items-center pl-5 gap-2 border border-[#12AA68] mt-4 sm:mt-0">
          <FaSearchMinus className="size-5" />
          <input
            placeholder="Search Chat..."
            className="bg-[#9FD2BC] placeholder-white focus:outline-none"
          />
        </button>
      </div>

      {/* Chat Section */}
      <div className="border border-[#12AA68] rounded-lg p-4 bg-white">
        <p className="text-center text-gray-500 text-sm mb-4">
          Wed, 15 Sept at 4:12 PM
        </p>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } items-end gap-2 mb-4`}
          >
            {message.sender === "agent" && (
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            )}
            <div
              className={`max-w-sm p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-gray-300 text-black"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
            {message.sender === "user" && (
              <span className="text-xs text-gray-500">delivered</span>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section (Message input and send button) */}
      <div className="bg-[#EEEDED] mt-9 flex w-full pt-10 justify-center px-4 sm:px-8">
        <Link to="/newchat">
          <IoIosAdd className="size-7" />
        </Link>
        <button className="bg-[#9FD2BC] h-10 w-full sm:w-[450px] flex justify-around items-center mt-4 sm:mt-0">
          <input
            placeholder="Type a message"
            className="bg-[#9FD2BC] placeholder-black w-full focus:outline-none"
          />
          <button className="bg-white w-6 h-6 rounded-full flex justify-center items-center">
            <IoIosSend className="text-center pl-1" />
          </button>
        </button>
      </div>
    </div>
  );
};

export default Body2;
