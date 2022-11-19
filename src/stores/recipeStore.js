import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _recipes = [];

class RecipeStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getRecipes() {
    return _recipes;
  }

  getRecipeById(id) {
    return _recipes.find((recipe) => recipe.id === id);
  }
}

const store = new RecipeStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_RECIPE:
      _recipes.push(action.recipe);
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _recipes = action.recipes;
      store.emitChange();
      break;
    default:
    //
  }
});

export default store;
