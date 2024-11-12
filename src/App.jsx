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
import ProjectOwnerDash from "./component/project-owner/ProjectOwnerDash";
import MessageHelp from "./component/project-owner/livechat/MessageHelp";
import NewChat from "./component/project-owner/newchat/NewChat";
// import DocumentUpload from './pages/management/DocumentUpload';
// import DocumentUploadUI from './pages/management/DocumentUploadUI';
import DocumentManagementSystem from './pages/management/DocumentUploadUI';
import DocumentRepository from './component/DocumentRepository';
import { RoleProvider } from './context/RoleContext';
import { AuthRoute } from './component/AuthRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      <RoleProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/projectownerdash" element={<ProjectOwnerDash />} />
            <Route path="/messagehelp" element={<MessageHelp />} />
            <Route path="/newchat" element={<NewChat />} />
            <Route path="/tender" element={<TenderManagement />} />
            <Route path="/add-project" element={<ProjectForm />} />
            <Route path="/project-list" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/update-status" element={<UpdateProjectStatus />} />
            <Route path="/maturation" element={<MaturationPhase />} />
            <Route path="/upload" element={<DocumentManagementSystem />} />
            <Route
              path="/live_ui_dashboard/*"
              element={<LiveUI_Dashboard />}
            >
              <Route
                index
                element={<FAQS />} />
              <Route
                path="livechat"
                element={<LiveChat />}
              />
            </Route>

            {/* Role-Based Routes */}
            <Route
              path="/projectowner/*"
              element={
                <AuthRoute requiredRole="Project Owner">
                  <Routes>
                    <Route path="/" element={<ProjectOwnerPage />} />
                    <Route path="dashboard" element={<ProjectOwnerDashboard />} />
                    <Route path="projectmaturation" element={<ProjectMaturation />} />
                    <Route path="contractawarding" element={<ContractAwarding />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="docrepo" element={<DocumentRepository />} />
                  </Routes>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <AuthRoute requiredRole="Project Regulator">
                  <DashboardLayout>
                    <Routes>
                      <Route index element={<MinMapDashboard />} />
                    </Routes>
                  </DashboardLayout>
                </AuthRoute>
              }
            />
            <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />

            {/* Add a default redirect */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </RoleProvider>
    </ThemeProvider>
  );
}

export default App;
