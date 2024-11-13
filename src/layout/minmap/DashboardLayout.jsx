import { Outlet } from "react-router-dom";
import Sidebar from "../../component/minmap/Sidebar";


const DashboardLayout = () => {
  return (
    <div className='flex flex-row items-start'>
        <Sidebar/>
        <div className="w-full h-screen">
          <Outlet/>
        </div>
        
    </div>
  );
};

export default DashboardLayout;