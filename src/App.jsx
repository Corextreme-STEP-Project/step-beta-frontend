import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
import UpdateProjectStatus from "./pages/project-owner/projectForm/EditProject";
import LiveUI_Dashboard from "./layout/minmap/LiveUI_Dashboard";
// import FAQ from "./component/minmap/Faq";
import FAQS from "./component/minmap/FAQItems";
import LiveChat from "./component/minmap/Livechat";
import ProjectOwnerDash from "./component/project-owner/ProjectOwnerDash";
import MessageHelp from "./component/project-owner/livechat/MessageHelp";
import NewChat from "./component/project-owner/newchat/NewChat";
import PerformanceTracker from "./layout/performance/PerformanceTracker";
// import ProjectDetails from '../src/layout/performance/ProjectDetails';
import Response from "./component/minmap/Response";
// import DocumentUpload from './pages/management/DocumentUpload';
// import DocumentUploadUI from './pages/management/DocumentUploadUI';
import Settings from "./pages/minmap/dashboard/Settings";
import MessagingHelp from "./pages/minmap/dashboard/MessagingHelp";
import EditProjectStatus from "./pages/project-owner/projectForm/Update";
import DocumentRepo from "./component/minmap/DocumentRepo";
import Projects from "./pages/minmap/Projects";
import Tenders from "./pages/minmap/Tenders";
import Reports from "./pages/minmap/Reports";
import Documents from "./pages/minmap/Documents";
import Performance from "./pages/minmap/Performance";
import Archives from "./pages/minmap/Archives";
import DocumentManagementSystem from "./pages/management/DocumentUploadUI";
import PerformanceAndIndicators from "./pages/minmap/performance-and-indicators/performanceAndIndicators";
import LandingPage from "./pages/logins/LandingPage";
import MergedNotificationDashboard from "./layout/minmap/NotificationDashboard";
import DetailedComplianceReport from "./pages/minmap/performance-and-indicators/DetailedComplianceReport ";
import KPIAnalysis from "./pages/minmap/performance-and-indicators/KPIAnalysis";
import ComplianceComparison from "./pages/minmap/performance-and-indicators/ComplianceComparison";
import ComplianceRiskAssessment from "./pages/minmap/performance-and-indicators/ComplianceRiskAssessment";
import ComplianceAuditInsights from "./pages/minmap/performance-and-indicators/ComplianceAuditInsights";



// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/projectownerdash",
    element: <ProjectOwnerDash />,
  },
  {
    path: "/messagehelp",
    element: <MessageHelp />,
  },
  {
    path: "/newchat",
    element: <NewChat />,
  },
  {
    path: "/upload",
    element: <DocumentManagementSystem />,
  },

  {
    path: "/live_ui_dashboard",
    element: <LiveUI_Dashboard />,

    children: [
      {
        index: true,
        element: <FAQS />,
      },
      {
        path: "live-chat",
        element: <LiveChat />,
      },
      {
        path: "respond",
        element: <Response />,
      },
    ],
  },

  {
    path: "/docs",
    element: <DocumentRepo />,
  },


  {
    path: "/notification",
    element: <MergedNotificationDashboard />,
  },
 
  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/tenders",
    element: <Tenders />,
  },

  {
    path: "/reports",
    element: <Reports />,
  },

  {
    path: "/documents",
    element: <Documents />,
  },

  {
    path: "/projects/:id/edit",
    element: <EditProjectStatus />,
  },
  {
    path: "/performance",
    element: <Performance />,
  },

  {
    path: "/archives",
    element: <Archives />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MinMapDashboard />,
      },


      {
        path:"settings",
        element:<Settings/>,
      },

      {
        path:"help",
        element:<MessagingHelp/>,
      },
      {
        path: "tender",
        element: <TenderManagement />,
      },

      {
        path: "performance-tracker",
        element: <PerformanceTracker />,
      },
      {
        path: "performance-compliance",
        element: <PerformanceAndIndicators />,
      },
      {
        path: "detailed-compliance-report",
        element: <DetailedComplianceReport />,
      },
      {
        path: "kpi-analysis",
        element: <KPIAnalysis />,
      },
      {
        path: "compliance-comparison",
        element: <ComplianceComparison />,
      },
      {
        path: "compliance-risk-assessment",
        element: <ComplianceRiskAssessment />,
      },
      {
        path: "compliance-audit-insights",
        element: <ComplianceAuditInsights />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/add-project",
    element: <ProjectForm />,
  },
  {
    path: "/project-list",
    element: <ProjectList />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },

  {
    path: "/maturation",
    element: <MaturationPhase />,
  },
  {
    path: "/projectowner",
    element: <ProjectOwnerPage />,
    children: [
      {
        // path: "projects",
        index: true,
        element: <ProjectOwnerDashboard />,
      },
      {
        path: "projectmaturation",
        element: <ProjectMaturation />,
      },
      {
        path: "contractawarding",
        element: <ContractAwarding />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
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
