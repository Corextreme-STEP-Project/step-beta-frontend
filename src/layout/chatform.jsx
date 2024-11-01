import React, { useState } from 'react';

function ChatForm({ closePopup }) {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
    setMessage(''); 
    setName('');
    setEmail('');
    setPhone('');
    closePopup();
  };

  return (
    <div className=" bottom-20 left-0 lg:w-64 mr-5 p-4 bg-white shadow-lg rounded-lg border ">
        <p className="text-black pb-3">
          Please fill out the form below to start chatting 
        </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter Full Name "
          value={name}
        //   onChange={(event) => setName(event.target.value)}
          className="w-full p-2 border border-gray-00 rounded-md focus:outline-none focus:ring-2 "
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
        //   onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          required
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
        //   onChange={(event) => setPhone(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          required
        />
        
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          placeholder="Type your message.."
          value={message}
        //   onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <div className="flex  lg:w-[100%] w-[100%] justify-evenly gap-5 mt-2">
          <button
            type="button"
            className="text-black hover:bg-[#09445f] border-yellow-500 border-2 lg:p-2 p-2 rounded-lg"
            onClick={closePopup}
          >
            Cancel
          </button>

          <button
          type="submit"
          className=" bg-yellow-500 text-white p-2 lg:p-2 rounded-md hover:bg-[#09445f] flex items-center justify-center  "
        >
          <span className="mr-2">➤</span> Start Chat
        </button>

        </div>
      </form>
    </div>
  );
}
export default ChatForm