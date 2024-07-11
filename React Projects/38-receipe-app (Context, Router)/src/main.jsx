import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Error from "./Components/Error";
import { GlobalState } from "./Context/context";
import Details from "./Pages/Details";

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
  </GlobalState>
);
