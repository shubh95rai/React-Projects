import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import { GlobalState } from "./context and reducer/context";
import Watched from "./pages/Watched";
import Watchlist from "./pages/Watchlist";

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
        path: "/watched",
        element: <Watched />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <RouterProvider router={router}></RouterProvider>
  </GlobalState>,
);
