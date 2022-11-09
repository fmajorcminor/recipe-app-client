import React, { useState, useEffect } from "react";
import RecipeForm from "./RecipeForm";
import * as recipeApi from "../api/recipeApi";
import { toast } from "react-toastify";

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

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      recipeApi.getRecipeById(id).then((_recipe) => setRecipe(_recipe));
    }
  }, [props.match.params.id]);

  function handleSubmit(event) {
    event.preventDefault();
    recipeApi.saveRecipe(recipe).then(() => {
      props.history.push("/recipes"); //redirect to courses page
      toast.success("Recipe Saved");
    });
  }

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
      <RecipeForm
        recipe={recipe}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageRecipePage;
