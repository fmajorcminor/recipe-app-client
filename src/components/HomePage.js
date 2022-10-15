import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Recipe App</h1>
      <Link to="recipes" className="btn btn-primary">
        See All Recipes
      </Link>
    </div>
  );
}

export default HomePage;
