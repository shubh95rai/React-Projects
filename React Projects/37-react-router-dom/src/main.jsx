import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact, { fetchData } from "./Components/Contact.jsx";
import Fetch from "./Components/Fetch.jsx";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: fetchData,
      },
      {
        path: "/fetch",
        element: <Fetch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
