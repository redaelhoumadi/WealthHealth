import "./index.css";
import './assets/fonts/fonts.css'; 
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
