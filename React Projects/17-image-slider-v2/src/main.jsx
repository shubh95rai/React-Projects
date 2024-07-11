import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App url={"https://picsum.photos/v2/list"} page={"1"} limit={"5"} />,
);
