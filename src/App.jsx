import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import LoginForm from "./assets/pages/logins/LoginForm";
import RegistrationForm from "./assets/pages/logins/RegistrationForm";

function App() {
  const router = createBrowserRouter ([
{
  path:"/",
  element: <Layout/>
},
{
  path:"/login",
  element: <LoginForm/>,
},
{
  path:"/register",
  element: <RegistrationForm/> ,
},

  ])

  return <RouterProvider router={router}/>
}

export default App;
