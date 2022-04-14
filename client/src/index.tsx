import React from "react";
import ReactDOM from "react-dom/client";
import Routeur from "./routeur";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>
);
