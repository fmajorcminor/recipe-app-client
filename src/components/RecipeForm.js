import React from "react";
import TextInput from "./common/TextInput";

function RecipeForm(props) {
  return (
    <form>
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

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default RecipeForm;

// // react form that calls a post method to this api: http://localhost:8080/api/recipes and then returns the recipe to the page

// import React, { Component } from "react";

// // import axios from "axios";

// class RecipeForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       culture: "",
//       temperature: "",
//       link: "",
//       mealType: "",
//       favorite: false,
//     };
//   }

//   handleTitleChange = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   };

//   handleCultureChange = (event) => {
//     this.setState({
//       culture: event.target.value,
//     });
//   };

//   handleTemperatureChange = (event) => {
//     this.setState({
//       temperature: event.target.value,
//     });
//   };

//   handleLinkChange = (event) => {
//     this.setState({
//       link: event.target.value,
//     });
//   };

//   handleMealTypeChange = (event) => {
//     this.setState({
//       mealType: event.target.value,
//     });
//   };

//   handleFavoriteChange = (event) => {
//     this.setState({
//       favorite: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     console.log(this.state.title);
//     console.log(this.state.culture);
//     console.log(this.state.temperature);
//     console.log(this.state.link);
//     console.log(this.state.mealType);
//     console.log(this.state.favorite);

//     axios
//       .post("http://localhost:8080/api/recipes", {
//         title: this.state.title,
//         culture: this.state.culture,
//         temperature: this.state.temperature,
//         link: this.state.link,
//         mealType: this.state.mealType,
//         favorite: this.state.favorite,
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={this.state.title}
//             onChange={this.handleTitleChange}
//           />
//         </label>
//         <label>
//           Culture:
//           <input
//             type="text"
//             value={this.state.culture}
//             onChange={this.handleCultureChange}
//           />
//         </label>
//         <label>
//           Temperature:
//           <input
//             type="text"
//             value={this.state.temperature}
//             onChange={this.handleTemperatureChange}
//           />
//         </label>
//         <label>
//           Link:
//           <input
//             type="text"
//             value={this.state.link}
//             onChange={this.handleLinkChange}
//           />
//         </label>
//         <label>
//           Meal Type:
//           <input
//             type="text"
//             value={this.state.mealType}
//             onChange={this.handleMealTypeChange}
//           />
//         </label>
//         <label>
//           Favorite:
//           <input
//             type="boolean"
//             value={this.state.favorite}
//             onChange={this.handleFavoriteChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default RecipeForm;
