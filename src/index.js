import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import App from "./App.jsx";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: "cyan",
        fontFamily: "Inter, sans-serif",
        headings: {
          fontFamily: "Roboto Slab, sans-serif",
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
