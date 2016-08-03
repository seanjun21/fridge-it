var actions = require( './actions' );

// var initialIngredientState = [];
var initialIngredientState = {
  recipeResult: null,
  searchIngredients: []
};

var ingredientReducer = function( state, action ) {
  state = state || initialIngredientState;

  if ( action.type === actions.ADD_INGREDIENT ) {
    return Object.assign( {}, state, {
      recipeResult: null,
      searchIngredients: state.searchIngredients.concat( action.ingredient )
    } );
  } else if ( action.type = actions.FETCH_RECIPE_SUCCESS ) {
    return Object.assign( {}, state, {
      recipeResult: action.recipe
    } );
  }
  return state;
};

exports.ingredientReducer = ingredientReducer;
