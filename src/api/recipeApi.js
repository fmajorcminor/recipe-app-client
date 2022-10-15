import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/api/recipes/";

export function getRecipes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getRecipeById(id) {
  return fetch(baseUrl + id)
    .then(handleResponse)
    .catch(handleError);
}

export function saveRecipe(recipe) {
  return fetch(baseUrl + (recipe.recipe_id || ""), {
    method: recipe.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipe(recipeId) {
  return fetch(baseUrl + recipeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
