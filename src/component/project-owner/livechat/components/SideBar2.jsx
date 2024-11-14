import React, { useState } from "react";
import { FaEnvelope, FaTrashAlt, FaBroom, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const SideBar2 = ({
  setMessages,
  messages = [],
  selectedMessages,
  setSelectedMessages,
}) => {
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Delete selected messages
  const deleteMessage = () => {
    if (selectedMessages.length === 0) {
      toast.warn("No messages selected!");
      return;
    }

    setMessages((prevMessages) =>
      prevMessages.filter((message) => !selectedMessages.includes(message.id))
    );
    setSelectedMessages([]); // Clear selections
    toast.success("Message(s) deleted!");
  };

  // Clear all messages
  const clearMessages = () => {
    setMessages([]);
    setSelectedMessages([]); // Ensure selections are cleared
    toast.warn("All messages cleared!");
  };

  // Start editing a message
  const handleEditMessage = () => {
    if (selectedMessages.length !== 1) {
      toast.warn("Please select a single message to edit.");
      return;
    }

    const messageToEdit = messages.find(
      (message) => message.id === selectedMessages[0]
    );

    if (messageToEdit) {
      setEditingMessageId(messageToEdit.id);
      setEditedText(messageToEdit.text);
    } else {
      toast.error("Selected message not found.");
    }
  };

  // Save the edited message
  const saveEditedMessage = () => {
    if (!editedText.trim()) {
      toast.error("Message cannot be empty.");
      return;
    }

    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === editingMessageId
          ? { ...message, text: editedText }
          : message
      )
    );

    setEditingMessageId(null);
    setEditedText("");
    setSelectedMessages([]); // Clear selected messages
    toast.success("Message edited successfully!");
  };

  return (
    <aside className="bg-gray-200 text-black p-6 w-full h-screen sm:w-1/4 sm:min-w-[250px]">
      <div className="flex flex-col items-center mb-6">
        <button className="text-lg font-bold mb-4 border-slate-500 bg-[#C8C6C6] h-20 w-20 rounded-full flex items-center justify-center">
          <p>SA</p>
        </button>
        <p className="font-semibold text-center">Support Assistant</p>
        <p className="text-lg text-black mt-1 text-center">
          ( +233 ) 0245258015
        </p>
      </div>

      <div className="mt-6 bg-[#D9D9D9] p-3 rounded-md">
        <div className="flex items-center gap-2 mb-3">
          <FaEnvelope className="text-black" />
          <p className="text-sm">loremAssistant@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <button
            className="flex items-center gap-2 text-black bg-gray-200 p-2 rounded"
            onClick={deleteMessage}
          >
            <FaTrashAlt /> Delete
          </button>
          <button
            className="flex items-center gap-2 text-black bg-gray-200 p-2 rounded"
            onClick={handleEditMessage}
          >
            <FaEdit /> Edit
          </button>
          <button
            className="flex items-center gap-2 text-black bg-gray-200 p-2 rounded"
            onClick={clearMessages}
          >
            <FaBroom /> Clear Chat
          </button>
        </div>
      </div>

      {/* Show editing input if editing */}
      {editingMessageId && (
        <div className="mt-6 p-3 bg-gray-100 rounded-md">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Edit message"
          />
          <button
            onClick={saveEditedMessage}
            className="mt-2 bg-green-500 text-white p-2 rounded"
          >
            Save
          </button>
        </div>
      )}
    </aside>
  );
};

export default SideBar2;
