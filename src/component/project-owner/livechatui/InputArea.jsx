import React from "react";

const InputArea = ({ newMessage, handleTyping, sendMessage }) => {
  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-300">
      <input
        type="text"
        value={newMessage}
        onChange={handleTyping}
        placeholder="Type a message..."
        className="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 ml-2"
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;
