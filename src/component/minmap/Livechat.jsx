import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support Assistant', text: 'Hello', type: 'incoming', time: '10:30 AM' },
    { id: 2, sender: 'You', text: 'Hi', type: 'outgoing', time: '10:31 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showOptions, setShowOptions] = useState(null); // Track which message options are visible
  const [editingMessage, setEditingMessage] = useState(null); // Track the message being edited
  const [editedText, setEditedText] = useState(''); // Store edited message text

  // Function to format the current time in hh:mm AM/PM format
  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = getCurrentTime(); // Get the current time when the message is sent
      setMessages([
        ...messages,
        { id: Date.now(), sender: 'You', text: newMessage, type: 'outgoing', time: currentTime },
      ]);
      setNewMessage('');
      
      // Show a toast notification when a message is sent
      toast.success('Message sent successfully!');
    }
  };

  // Handle Edit
  const handleEditMessage = (message) => {
    setEditingMessage(message.id); // Set the message as being edited
    setEditedText(message.text); // Populate the edit field with current message text
  };

  const saveEditedMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, text: editedText } : msg
      )
    );
    setEditingMessage(null); // Clear the editing state
    setEditedText(''); // Clear the edited text field

    // Show a toast notification when a message is edited
    toast.success('Message edited successfully!');
  };

  // Handle Delete
  const handleDeleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    
    // Show a toast notification when a message is deleted
    toast.info('Message deleted!');
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#53bd8d] text-white p-4 flex items-center justify-between h-[59px]">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">SA</div>
          <div>
            <p className="font-semibold">Support Assistant</p>
            <p className="text-sm">Online</p>
          </div>
        </div>
        <div className="text-lg text-white"><FontAwesomeIcon icon={faSearch} /></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 rounded-lg pr-5">
        <div className="text-center text-2xl text-black font-semibold">Today</div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'incoming' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`relative p-3 rounded-lg ${
                msg.type === 'incoming' ? 'bg-[#3d9970]' : 'bg-[#3d9970] text-white'
              }`}
              onClick={() => setShowOptions(showOptions === msg.id ? null : msg.id)}
            >
              {msg.type === 'incoming' && <p className="text-sm font-semibold">{msg.sender}</p>}
              <p>{msg.text}</p>
              {/* Show time */}
              <p className="text-xs text-white">{msg.time}</p>

              {/* Options Dropdown */}
              {showOptions === msg.id && (
                <div className="absolute right-0 top-10 w-20 p-2 bg-white text-[#3d9970] rounded-lg shadow-lg text-sm space-y-2 mt-2">
                  <button onClick={() => alert('Reply')}>Reply</button><br />
                  <button onClick={() => alert('Pin')}>Pin</button><br />
                  <button onClick={() => handleEditMessage(msg)}>Edit</button>
                  <button onClick={() => handleDeleteMessage(msg.id)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Message */}
      {editingMessage && (
        <div className="flex items-center bg-[#3d9970] p-4">
          <input
            type="text"
            placeholder="Edit your message"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 mx-3 p-2 rounded-lg outline-none"
          />
          <button onClick={() => saveEditedMessage(editingMessage)} className="text-white text-xl">Save</button>
        </div>
      )}

      {/* Message Input */}
      {!editingMessage && (
        <div className="flex items-center bg-[#3d9970] p-4">
          <button className="text-white text-2xl">+</button>
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 mx-3 p-2 rounded-lg outline-none"
          />
          <button onClick={handleSendMessage} className="text-white text-2xl">➤</button>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer autoClose={300} />
    </div>
  );
}
