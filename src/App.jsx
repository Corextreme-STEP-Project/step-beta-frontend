import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import TenderSubmission from "./layout/tender";

// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  },
  {
    path: "/tender",
    element: <TenderSubmission />
  }
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
