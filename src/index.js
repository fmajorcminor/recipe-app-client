import React from "react";
import "./index.css";
// import RecipeForm from "./components/RecipeForm";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
