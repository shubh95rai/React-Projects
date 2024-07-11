import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { GlobalState } from "./context/context";
import Details from "./pages/Details";
import Error from "./components/Error";

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
        path: "/favourites",
        element: <Favourites />,
      },
      
      {
        path: "/recipe-item/:id",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <RouterProvider router={router} />
  </GlobalState>,
);
