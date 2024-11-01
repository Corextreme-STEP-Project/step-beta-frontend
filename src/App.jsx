import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";

function App() {
  const router = createBrowserRouter ([
{
  path:"/",
  element: <Layout/>
}

  ])

  return <RouterProvider router={router}/>
}

export default App;
