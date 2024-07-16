import React from "react";
import ReactDOM from "react-dom/client";

import { CoinApp } from "./CoinApp.jsx";

import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import darkTheme from "./helpers/theme.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CoinApp />
    </ThemeProvider>
  </React.StrictMode>
);
