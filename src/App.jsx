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
import DocumentManagementSystem from "./pages/management/DocumentUploadUI";
import PerformanceAndIndicators from "./pages/minmap/performance-and-indicators/performanceAndIndicators";
import LandingPage from "./pages/logins/LandingPage";

import AddMilestoneForm from "./pages/Perf-Indic/AddMilestone";
import AddPerformanceIndicatorForm from "./pages/Perf-Indic/AddIndicator";
import PerformanceIndicatorList from "./pages/Perf-Indic/IndicatorList";
import MilestoneList from "./pages/Perf-Indic/MilestoneList";
import PerformanceIndicatorDetail from "./pages/Perf-Indic/IndicatorId";
import MilestoneDetails from "./pages/Perf-Indic/MilestoneId";

import MergedNotificationDashboard from "./layout/minmap/NotificationDashboard";
import NotificationCreator from "./component/minmap/NotificationCreator";
import NotificationList from "./component/project-owner/NotificationList";
import DetailedComplianceReport from "./pages/minmap/performance-and-indicators/DetailedComplianceReport ";
import KPIAnalysis from "./pages/minmap/performance-and-indicators/KPIAnalysis";
import ComplianceComparison from "./pages/minmap/performance-and-indicators/ComplianceComparison";
import ComplianceRiskAssessment from "./pages/minmap/performance-and-indicators/ComplianceRiskAssessment";
import ComplianceAuditInsights from "./pages/minmap/performance-and-indicators/ComplianceAuditInsights";

import ChatDashboardLayout from "./layout/project-owner/ChatDashboardLayout";
import ReceptionsPayments from "./component/project-owner/ReceptionsPayments";
import SettingsMain from "./component/project-owner/SettingsMain";
import MessagingHelpMain from "./component/project-owner/MessagingHelp";
import Tenders from "./pages/minmap/dashboard/Tenders";
import DocumentRepo from "./pages/minmap/dashboard/DocumentRepo";
import Reports from "./pages/minmap/dashboard/Reports";
import Projects from "./pages/minmap/dashboard/Projects";
import Performance from "./pages/minmap/dashboard/Performance";
import Archives from "./pages/minmap/dashboard/Archives";
import LiveChatUi from "./component/project-owner/livechatui/LiveChatUi";
import MessageArea from "./component/project-owner/livechatui/MessageArea";
import InputArea from "./component/project-owner/livechatui/InputArea";
import ChatHeader from "./component/project-owner/livechatui/ChatHeader";
import Sidebar from "./component/project-owner/livechatui/Sidebar";
import TypingIndicator from "./component/project-owner/livechatui/TypingIndicator";

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
    path: "/livechatui",
    element: <LiveChatUi />,

    children: [
      {
        index: true,
        element: <MessageArea />,
      },
      {
        path: "inputarea",
        element: <InputArea />,
      },
      {
        path: "chatheader",
        element: <ChatHeader />,
      },
      {
        path: "sidebar",
        element: <Sidebar />,
      },
      {
        path: "typingindicator",
        element: <TypingIndicator />,
      },
    ],
  },

  {
    path: "/notification",
    element: <MergedNotificationDashboard />,
  },

  {
    path: "/projects/:id/edit",
    element: <EditProjectStatus />,
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
        path: "projects",
        element: <Projects />,
      },

       {
         path: "tenders",
         element:<Tenders/>
       },

       {
         path: "docs",
        element: <DocumentRepo />,
       },

       {
         path: "reports",
         element: <Reports/>,
       },

      {
        path: "performance",
        element: <Performance/>,
      },

       {
         path: "archives",
         element: <Archives/>,
       },

      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "help",
        element: <MessagingHelp />,
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
        path: "indicator-list",
        element: <PerformanceIndicatorList />,
      },
      {
        path: "indicator-form",
        element: <AddPerformanceIndicatorForm />,
      },
      {
        path: "milestone-form",
        element: <AddMilestoneForm />,
      },
      {
        path: "milestone-list",
        element: <MilestoneList />,
      },
      {
        path: "milestone/:id",
        element: <MilestoneDetails />,
      },
      {
        path: "indicator/:id",
        element: <PerformanceIndicatorDetail />,
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
      {
        path: "create-notification",
        element: <NotificationCreator />,
      },

      {
        path: "document",
        element: <DocumentManagementSystem />,
      },
    ],
  },

  // {
  //   path: "/notification",
  //   element: <MergedNotificationDashboard />,
  // },
  // {
  //   path: "/notification",
  //   element: <MnmapNotifications />,
  // },
  // {
  //   path: "/note-form",
  //   element: <CreateNotificationForm />,
  // },

  {
    path: "/add-project",
    element: <ProjectForm />,
  },
  {
    path: "/project-list",
    element: <ProjectList />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },

  {
    path: "/maturation",
    element: <MaturationPhase />,
  },

  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <MinMapDashboard />,
  //     },
  //     {
  //       path: "performance-compliance",
  //       element: <PerformanceAndIndicators />,
  //     },
  //     {
  //       path: "create-notification",
  //       element: <NotificationCreator />,
  //     },

  //   ],
  // },

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
        path: "receptions",
        element: <ReceptionsPayments />,
      },
      {
        path: "docs",
        element: <DocumentRepo />,
      },
      {
        path: "settings",
        element: <SettingsMain />,
      },
      {
        path: "help",
        element: <MessagingHelpMain />,
      },
      {
        path: "contractawarding",
        element: <ContractAwarding />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "stakeholders-messaging",
        element: <ChatDashboardLayout />,
        children: [
          // {
          //   index: true,
          //   element:
          // }
        ],
      },
      {
        path: "notification-list",
        element: <NotificationList />,
      },
      {
        path: "document",
        element: <DocumentManagementSystem />,
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
