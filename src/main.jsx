import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";   // ✅ use HashRouter instead
import RecipeState from "./context/State.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeState>
    <HashRouter>
      <App />
    </HashRouter>
  </RecipeState>
);
