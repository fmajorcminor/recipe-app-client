import React from "react";
// import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import RecipePage from "./RecipePage";
import NotFoundPage from "./NotFoundPage";
import ManageRecipePage from "./ManageRecipePage";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/recipes" component={RecipePage} />
        <Route path="/recipe/:id" component={ManageRecipePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
