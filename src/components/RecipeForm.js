import React from "react";
import TextInput from "./common/TextInput";

function RecipeForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.recipe.title}
        onChange={props.onChange}
      />

      <TextInput
        id="culture"
        name="culture"
        label="Culture"
        value={props.recipe.culture}
        onChange={props.onChange}
      />

      <TextInput
        id="temperature"
        name="temperature"
        label="Temperature"
        value={props.recipe.temperature}
        onChange={props.onChange}
      />

      <TextInput
        id="link"
        name="link"
        label="Link"
        value={props.recipe.link}
        onChange={props.onChange}
      />

      <TextInput
        id="mealType"
        name="mealType"
        label="Meal Type"
        value={props.recipe.mealType}
        onChange={props.onChange}
      />

      <button type="submit" value="Save" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default RecipeForm;
