import React, { useState, useEffect } from "react";
// import { getRecipes } from "../api/recipeApi";
import recipeStore from "../stores/recipeStore";
import RecipeList from "./RecipeList";
import { Link } from "react-router-dom";
import { loadRecipes } from "../actions/recipeActions";

function RecipePage() {
  const [recipes, setRecipes] = useState(recipeStore.getRecipes());

  useEffect(() => {
    recipeStore.addChangeListener(onChange);
    if (recipeStore.getRecipes().length === 0) loadRecipes();
    return () => recipeStore.removeChangeListener(onChange); //cleanup on unmount (navigation to another page)
  }, []);

  function onChange() {
    setRecipes(recipeStore.getRecipes()); //this is a hook
  }
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
