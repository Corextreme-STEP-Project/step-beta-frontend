
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import TenderManagement from "./layout/tender/TenderManagement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/logins/LoginForm";
import RegistrationForm from "./pages/logins/RegistrationForm";
import DashboardLayout from "./layout/minmap/DashboardLayout";
import MinMapDashboard from "./pages/minmap/dashboard/MinMapDashboard";
import MaturationPhase from "./component/minmap/MaturationPhase";
import ProjectForm from "./pages/project-owner/projectForm/Form";
import ProjectList from "./pages/project-owner/projectForm/List";
import ProjectDetails from "./pages/project-owner/projectForm/details";
import ProjectOwnerDashboard from "./component/project-owner/ProjectOwnerDashboard";
import ProjectMaturation from "./component/project-owner/ProjectMaturation";
import ContractAwarding from "./component/project-owner/ContractAwarding";
import Notifications from "./component/project-owner/Notifications";
import ProjectOwnerPage from "./pages/project-owner/ProjectOwnerPage";
import EditProject from './pages/project-owner/projectForm/EditProject';
import UpdateProjectStatus from './pages/project-owner/projectForm/EditProject';
import LiveUI_Dashboard from "./layout/minmap/LiveUI_Dashboard";
// import FAQ from "./component/minmap/Faq";
import FAQS from "./component/minmap/FAQItems";
import LiveChat from "./component/minmap/Livechat";




// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
});



  const router = createBrowserRouter ([


{
  path:"/live_ui_dashboard",
  element: <LiveUI_Dashboard/>,

  children: [
    {
    index:true,
      element: <FAQS/>,
    },
    {
    path: "live-chat",
      element: <LiveChat/>,
    },

  ]
 
},
    
    {
      path: "/tender",
      element: <TenderManagement />
    },
{
  path:"/login",
  element: <LoginForm/>,
},
{
  path:"/register",
  element: <RegistrationForm/> ,
},
{
  path:"/add-project",
  element: <ProjectForm/> ,
},
{
  path:"/project-list",
  element: <ProjectList/> ,
},
{
  path:"/project/:id",
  element: <ProjectDetails/> ,
},
{
  path:"/update-status",
  element: <UpdateProjectStatus/> ,
},

{
path:"/maturation",
element: <MaturationPhase/>
},

{
  path:"/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <MinMapDashboard />,
    },


  ],
},
{
  path: "/projectowner",
  element: <ProjectOwnerPage />,
  children: [
    {
      // path: "projects",
      index: true,
      element: <ProjectOwnerDashboard />
    },
    {
      path: "projectmaturation",
      element: <ProjectMaturation />
    },
    {
      path: "contractawarding",
      element: <ContractAwarding />
    },
    {
      path: "notifications",
      element: <Notifications />
    },
  ]
},

  ]);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );

}

export default App;
