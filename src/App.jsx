import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./assets/pages/logins/LoginForm";
import RegistrationForm from "./assets/pages/logins/RegistrationForm";

import LiveUI_Dashboard from "./layout/minmap/LiveUI_Dashboard";

// import FAQ from "./component/minmap/Faq";
import FAQS from "./component/minmap/FAQItems";
import LiveChat from "./component/minmap/Livechat";


function App() {
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
