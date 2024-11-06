import React, { Children } from "react";
import "./App.css";
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



function App() {
  const router = createBrowserRouter([

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
      element: <MaturationPhase />
    },

    {
      path: "/dashboard",
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

  return <RouterProvider router={router} />
}

export default App;
