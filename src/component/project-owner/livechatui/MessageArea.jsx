import React, { useState } from 'react';
import TypingIndicator from './TypingIndicator'; // Assume TypingIndicator is in a separate file

const MessageArea = ({ messages = [], currentUser, handleSendMessage, typingIndicator }) => {
  const [message, setMessage] = useState('');

  // Handle changes to the input field
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      handleSendMessage(message); // Send the message
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Message Display */}
      <div className="flex-1 overflow-y-auto mb-6">
        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === currentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-4 rounded-lg ${msg.sender === currentUser
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-800 shadow-sm'}`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs text-gray-500 mt-1 block">{msg.timestamp}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400">No messages yet</div>
          )}
        </div>
      </div>

      {/* Typing Indicator */}
      {typingIndicator && (
        <div className="flex justify-center mb-4">
          <TypingIndicator />
        </div>
      )}

      {/* Message Input and Send Button */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageArea;
