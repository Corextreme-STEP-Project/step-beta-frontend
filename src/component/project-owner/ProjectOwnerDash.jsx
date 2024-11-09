import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Body from "./components/Body";

const ProjectOwnerDash = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default ProjectOwnerDash;
