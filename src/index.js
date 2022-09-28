import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { AntecipationProvider } from "./providers/antecipation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AntecipationProvider>
      <App />
    </AntecipationProvider>
  </React.StrictMode>
);
reportWebVitals();
