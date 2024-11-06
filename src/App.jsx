import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/logins/LoginForm";
import RegistrationForm from "./pages/logins/RegistrationForm";
import ProjectForm from "./pages/project-owner/projectForm/Form";
import ProjectList from "./pages/project-owner/projectForm/List";
import ProjectDetails from "./pages/project-owner/projectForm/details";

function App() {
  const router = createBrowserRouter ([

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

  ])

  return <RouterProvider router={router}/>
}

export default App;
