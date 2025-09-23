import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipeState from "./context/State.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeState>
);
