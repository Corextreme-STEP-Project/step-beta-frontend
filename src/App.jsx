import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import TenderManagement from "./layout/tender/TenderManagement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    }, 
    {
      path: "/tender",
      element: <TenderManagement />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
