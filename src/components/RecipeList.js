import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Culture</th>
          <th>Temperature</th>
          <th>Link</th>
          <th>Meal Type</th>
        </tr>
      </thead>
      <tbody>
        {props.recipes.map((recipe) => {
          return (
            <tr key={recipe.id}>
              <td>
                <Link to={"/recipe/" + recipe.recipe_id}>{recipe.title}</Link>
              </td>
              <td>{recipe.culture}</td>
              <td>{recipe.temperature}</td>
              <td>{recipe.link}</td>
              <td>{recipe.mealType}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      culture: PropTypes.string.isRequired,
      temperature: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      mealType: PropTypes.string.isRequired,
      // favorite: PropTypes.boolean,
    })
  ).isRequired,
};

export default RecipeList;
