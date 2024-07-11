import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import { GlobalState } from "./context and reducer/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <RouterProvider router={router}></RouterProvider>
  </GlobalState>,
);
