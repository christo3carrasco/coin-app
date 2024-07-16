import React from "react";
import ReactDOM from "react-dom/client";

import { CoinApp } from "./CoinApp.jsx";

import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <CoinApp />
  </React.StrictMode>
);
