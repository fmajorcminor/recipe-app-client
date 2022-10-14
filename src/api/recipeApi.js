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
