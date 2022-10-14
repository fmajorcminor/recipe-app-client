import React, { useState, useEffect } from "react";
import RecipeForm from "./RecipeForm";

const ManageRecipePage = (props) => {
  const [recipe, setRecipe] = useState({
    recipe_id: null,
    title: "",
    culture: "",
    temperature: "",
    link: "",
    mealType: "",
    favorite: false,
  });

  function handleChange(event) {
    const updatedRecipe = {
      ...recipe,
      [event.target.name]: event.target.value,
    };
    setRecipe(updatedRecipe);
  }

  return (
    <>
      <h2>Manage Recipe</h2>

      <RecipeForm recipe={recipe} onChange={handleChange} />
    </>
  );
};

export default ManageRecipePage;
