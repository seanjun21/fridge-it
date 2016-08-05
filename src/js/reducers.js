var actions = require( './actions' );
var _ = require( 'lodash' );

// var initialIngredientState = [];
var initialIngredientState = {
  recipeResult: null,
  searchIngredients: []
};

var ingredientReducer = function( state, action ) {
  state = state || initialIngredientState;

  if ( action.type === actions.ADD_INGREDIENT ) {
    return Object.assign( {}, state, {
      searchIngredients: state.searchIngredients.concat( action.ingredient )
    } );
  } else if ( action.type === actions.FETCH_RECIPE_SUCCESS ) {
    return Object.assign( {}, state, {
      recipeResult: action.recipe
    } );
  } else if ( action.type === actions.DEL_INGREDIENT ) {
    _.remove( state.searchIngredients, function( n ) {
      return n === action.ingredient;
    } )

    _.remove( state.recipeResult, function( o ) {
      var patt = new RegExp( action.ingredient, 'i' );
      var res = patt.test( o.ingredients );
      return res;
    } );

    return Object.assign( {}, state, {
      recipeResult: state.recipeResult,
      searchIngredients: state.searchIngredients
    } );
  }
  return state;
};

exports.ingredientReducer = ingredientReducer;
