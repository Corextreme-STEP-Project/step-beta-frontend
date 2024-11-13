// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBroom, faCancel, faCross, faDeleteLeft, faEnvelope, faPaperPlane, faPhone, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

// const LiveChat = () => {

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = () => {
//     if (input.trim() === '') return;
//     const newMessage = { text: input, sender: 'user', id: Date.now() };
//     setMessages([...messages, newMessage]);
//     setInput('');
//   };

//   return (
//     <div className="flex h-screen ">
    
//       <div className="flex-1 flex flex-col">
       
//         <div id="header" className="flex  flex-col items-left justify-center h-[59px] w-[100%]  fixed  pl-[56px] bg-[#53bd8d]">
//           <div className="text-2xl font-bold text-white">Messaging & Help</div>
//           <div className="text-white text-sm">Project Management</div>
//         </div>

        
//         <div id="chat-area " className="flex flex-1 bg-white">

//           <div id="msg sectoin" className="flex-1 p-6 overflow-y-auto">
//             <div className="text-center text-gray-400">No Messages Yet</div>
//             {/* Render messages */}
//             {messages.map((message) => (
//               <div key={message.id} className="mt-4">
//                 <p className={`p-2 rounded ${message.sender === 'user' ? 'bg-[#3aceb5] text-white' : 'bg-gray-300'}`}>
//                   {message.text}
//                 </p>
//               </div>
//             ))}
//           </div>

        
//           <div  id="right-sidebar" className="lg:w-[215px] h-full -mb-[40px] mt-[59px]  bg-[#3d9970] p-4 space-y-6">
//             <div className="text-center">
//               <div className="rounded-full bg-white flex  justify-center items-center w-16 h-16 mx-auto ">SA</div>
//               <p className="font-semibold mt-2">Support Assistant</p>
             
//             </div>
//             <p className="text- bg-white p-2 rounded-lg"><FontAwesomeIcon icon={faPhone} /> +233 234 5678</p>
//             <div className="space-y-4  flex flex-col justify-center items-center bg-[#53bd8d]">
              
//               <p className="text-white "><FontAwesomeIcon icon={faEnvelope} /> minmap@gmail.com</p>
//               <div className='flex flex-col justify-center items-center space-y-2'>
//               <button onClick={''} className="text-left w-full text-white  "> <FontAwesomeIcon className="pr-2" icon={faTrash} />Disable Chat</button>
//               <button onClick={''} className="text-left w-full text-white "> <FontAwesomeIcon className="pr-2"icon={faBroom} />Clear Chat</button>
//               <button  onClick={''} className="text-left w-full text-white "> <FontAwesomeIcon className="pr-2" icon={faCancel} />Close Chat</button>
//               </div>
              
//             </div>
//           </div>
//         </div>

       
//         <div id="message-input" className="flex -mt-10  items-center h-24  justify-center lg:w-[78.2%] bg-[#53bd8d]">
//           <div className='w-[90%] flex rounded-lg  bg-white'>
//           <input
//             type="text"
//             className="flex-1 p-2 px-5 border outline-none rounded-l-md shadow-lg"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         <button onClick={sendMessage} className=" text-green-800 text-lg w-20 rounded-full">
//             <FontAwesomeIcon icon={faPaperPlane} />
//           </button>
//           </div>
      
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveChat;


import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support Assistant', text: 'Hello', type: 'incoming' },
    { id: 2, sender: 'You', text: 'Hi', type: 'outgoing' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showOptions, setShowOptions] = useState(null); // Track which message options are visible

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), sender: 'You', text: newMessage, type: 'outgoing' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white ">
      {/* Header */}
      <div className="bg-[#53bd8d] text-white p-4 flex items-center justify-between h-[59px]">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
            SA
          </div>
          <div>
            <p className="font-semibold">Support Assistant</p>
            <p className="text-sm">typing...</p>
          </div>
        </div>
        <div className="text-lg text-white"><FontAwesomeIcon icon={faSearch}/></div>
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
              
              {/* Options Dropdown */}
              {showOptions === msg.id && (
                <div className="absolute top-0  w-20 p-2 bg-white text-[#3d9970] rounded-lg shadow-lg right-0 text-sm space-y-2 mt-10">
                  <button onClick={() => alert('Reply')}>Reply</button><br />
                  <button onClick={() => alert('Pin')}>Pin</button><br />
                  <button onClick={() => alert('Edit')}>Delete</button>
                  <button onClick={() => alert('Delete')}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
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
    </div>
  );
}

