import React from "react";
// import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import RecipePage from "./RecipePage";
import NotFoundPage from "./NotFoundPage";
import ManageRecipePage from "./ManageRecipePage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipes" component={RecipePage} />
        <Route path="/recipe/:id" component={ManageRecipePage} />
        <Route path="/recipe" component={ManageRecipePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
