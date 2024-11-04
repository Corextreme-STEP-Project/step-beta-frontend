import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./assets/pages/logins/LoginForm";
import RegistrationForm from "./assets/pages/logins/RegistrationForm";

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

  ])

  return <RouterProvider router={router}/>
}

export default App;
