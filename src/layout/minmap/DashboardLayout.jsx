import { Outlet } from "react-router-dom";
import Sidebar from "../../component/minmap/Sidebar";


const DashboardLayout = () => {
  return (
    <div className='flex flex-row items-start'>
        <Sidebar/>
        <Outlet/>
    </div>
  );
};

export default DashboardLayout;