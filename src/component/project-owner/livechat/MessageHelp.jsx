import React from 'react';
import Sidebar from '../components/SideBar';
import SideBar2 from './components/SideBar2';
import Header2 from './components/Header2';
import Body2 from './components/Body2';

const MessageHelp = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header2 />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-1/12" /> {/* Left sidebar with a fixed width */}
        <div className="flex-1 overflow-y-scroll p-4"> {/* Main body container */}
          <Body2 />
        </div>
        <SideBar2  className="w-1/12" /> {/* Right sidebar with a fixed width */}
      </div>
    </div>
  );
};

export default MessageHelp;
