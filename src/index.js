import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global.js";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { AntecipationProvider } from "./providers/antecipation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AntecipationProvider>
      <GlobalStyle />
      <App />
    </AntecipationProvider>
  </React.StrictMode>
);
reportWebVitals();
