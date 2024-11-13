import React from "react";
import Header from "../../component/minmap/Header";
import SidebarLiveUI from "../../component/minmap/LiveUI_Sidebar";
import FAQ from "../../component/minmap/Faq";
import { Outlet } from "react-router-dom";
import ChatsAndHistory from "../../component/minmap/chatshistory";


const LiveUI_Dashboard = () => {
  return (
    <div className="w-100vw h-100vh">
      <div className="w-[100%]">
        <Header />
      </div>
      <div className="flex justify-between">
      <div className="w-[20%]">
        <SidebarLiveUI />
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default LiveUI_Dashboard;
