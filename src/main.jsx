import React from "react";
import ReactDOM from "react-dom/client";

import { CoinApp } from "./CoinApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinApp />
  </React.StrictMode>
);
