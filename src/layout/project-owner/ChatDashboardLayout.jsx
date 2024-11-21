import { Outlet } from "react-router-dom";
import ChatSidebar from "./components/ChatSidebar";

const ChatDashboardLayout = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-30px)] m-4 md:m-[15px] rounded-xl shadow-2xl overflow-hidden bg-white">
      <ChatSidebar />
      <div className="flex justify-center items-center w-full h-auto md:h-full bg-[#edecee] overflow-auto p-4 md:p-11">
        <div className="w-full mt-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ChatDashboardLayout;
