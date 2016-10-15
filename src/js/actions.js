var fetch = require( 'isomorphic-fetch' );
var _ = require( 'lodash' );

var ADD_INGREDIENT = 'ADD_INGREDIENTS';
var addIngredient = function( ingredient ) {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient
  };
};

var DEL_INGREDIENT = 'DEL_INGREDIENT';
var delIngredient = function( ingredient ) {
  return {
    type: DEL_INGREDIENT,
    ingredient: ingredient
  }
};

var FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
var fetchRecipeSuccess = function( ingredient, recipe ) {
  return {
    type: FETCH_RECIPE_SUCCESS,
    ingredient: ingredient,
    recipe: recipe
  };
};

var FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';
var fetchRecipeError = function( ingredient, error ) {
  return {
    type: FETCH_RECIPE_ERROR,
    ingredient: ingredient,
    error: error
  };
};

var fetchRecipe = function( ingredient ) {
  return function( dispatch ) {
    var url = 'http://localhost:9000/recipes/' + ingredient;
    return fetch( url, {
        method: 'GET'
      } ).then( function( response ) {
        if ( response.status < 200 || response.status >= 300 ) {
          var error = new Error( response.statusText );
          error.response = response;
          throw error;
        }
        return response;
      } )
      .then( function( response ) {
        return response.json();
      } )
      .then( function( data ) {
        var recipes = _.map( data, function( recipe ) {
          return {
            name: recipe.name,
            url: recipe.url,
            ingredients: recipe.ingredients
          };
        } );
        // console.log( recipes, 'RECIPES' );

        return dispatch(
          fetchRecipeSuccess( ingredient, recipes )
        );
      } )
      .catch( function( error ) {
        return dispatch(
          fetchRecipeError( ingredient, error )
        );
      } );
  }
};

exports.ADD_INGREDIENT = ADD_INGREDIENT;
exports.addIngredient = addIngredient;
exports.DEL_INGREDIENT = DEL_INGREDIENT;
exports.delIngredient = delIngredient;


exports.FETCH_RECIPE_SUCCESS = FETCH_RECIPE_SUCCESS;
exports.fetchRecipeSuccess = fetchRecipeSuccess;
exports.FETCH_RECIPE_ERROR = FETCH_RECIPE_ERROR;
exports.fetchRecipeError = fetchRecipeError;

exports.fetchRecipe = fetchRecipe;
