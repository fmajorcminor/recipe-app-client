import dispatcher from "../appDispatcher";
import * as recipeApi from "../api/recipeApi";
import actionTypes from "./actionTypes";

//This function is an action creator
export function saveRecipe(recipe) {
  return recipeApi.saveRecipe(recipe).then((savedRecipe) => {
    //Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_RECIPE, //this is the action within the dispatch
      recipe: savedRecipe,
    });
  });
}

export function loadRecipes() {
  return recipeApi.getRecipes().then((recipes) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      recipes: recipes,
    });
  });
}
