import React from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet to render nested routes
import MessageArea from './MessageArea';
import InputArea from './InputArea';
import TypingIndicator from './TypingIndicator';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader'; // Import ChatHeader

const LiveChatUi = () => {  
  return (
    <div className="flex flex-col w-full h-screen p-6">  {/* Full height and responsive width */}
      {/* ChatHeader at the top of the screen */}
      <div className="mb-4">
        <ChatHeader />  {/* Add ChatHeader component */}
      </div>
      
      <div className="flex flex-row h-full space-x-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200 p-6 rounded-lg shadow-md h-full">
          <Sidebar />  {/* Sidebar with active users */}
        </div>

        {/* Main content area (MessageArea, InputArea, etc.) */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md overflow-auto h-full">
          {/* Render main content components */}
          <MessageArea />
          <InputArea />
          <TypingIndicator />
          
          {/* The Outlet will render child components based on the route */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatUi;
