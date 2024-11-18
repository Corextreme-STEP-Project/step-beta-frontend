import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar2 from "./SideBar2"; // Ensure correct path
import { FaSearchMinus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Body2 = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello Efuwa, welcome. How can we help you?",
      sender: "agent",
    },
    {
      id: 2,
      text: "My name is Efuwa, I would like you to help me create a new project",
      sender: "user",
    },
    {
      id: 3,
      text: "Ok, I am glad you came at me. Please, click on the link below",
      sender: "agent",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [visibleCheckboxes, setVisibleCheckboxes] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentDate(formattedDate);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: currentTime,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
    toast.success("Message sent!");
  };

  const toggleCheckbox = (id) => {
    setVisibleCheckboxes((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  const handleCheckboxChange = (id) => {
    setSelectedMessages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((msgId) => msgId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedMessages.length === 0) {
      toast.warn("No message selected!");
      return;
    }

    setMessages((prevMessages) =>
      prevMessages.filter((message) => !selectedMessages.includes(message.id))
    );
    setSelectedMessages([]); // Clear selections
    toast.success("Message deleted!");
  };

  // Update message in state after editing
  const handleEditMessage = (updatedMessage) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === updatedMessage.id ? { ...message, text: updatedMessage.text } : message
      )
    );
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <ToastContainer position="bottom-right" autoClose={300} />

      {/* Chat Section */}
      <div className="flex-1 overflow-y-scroll bg-white">
        {/* Header */}
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

        {/* Chat Messages */}
        <div className="border border-[#12AA68] rounded-lg p-4 bg-white">
          <p className="text-center text-gray-500 text-sm mb-4">{currentDate}</p>

          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => toggleCheckbox(message.id)}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } items-center gap-2 mb-4`}
            >
              {visibleCheckboxes.includes(message.id) && (
                <input
                  type="checkbox"
                  className="self-start"
                  checked={selectedMessages.includes(message.id)}
                  onChange={() => handleCheckboxChange(message.id)}
                />
              )}
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
                <span className="text-xs text-gray-500">{message.time}</span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-white mt-9 flex w-full pt justify-center px-4 sm:px-8">
          <div className="bg-[#9FD2BC] h-12 w-full sm:w-[450px] flex items-center mt-4 sm:mt-0">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              className="bg-[#9FD2BC] placeholder-black w-full focus:outline-none ml-3"
            />
            <div onClick={handleSendMessage}>
              <IoIosSend className="self-center size-5 mr-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <SideBar2
        setMessages={setMessages}
        messages={messages}
        selectedMessages={selectedMessages}
        setSelectedMessages={setSelectedMessages}
        handleEditMessage={handleEditMessage} // Pass edit handler to sidebar
      />
    </div>
  );
};

export default Body2;
