import React, { useState, useEffect } from "react";
import { getRecipes } from "../api/recipeApi";
import RecipeList from "./RecipeList";
import { Link } from "react-router-dom";

function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((_recipes) => setRecipes(_recipes));
  }, []);

  return (
    <>
      <h2>Recipes</h2>
      <Link className="btn btn-primary" to="/recipe">
        Add Recipe
      </Link>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default RecipePage;
