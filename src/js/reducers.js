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
      recipeResult: { "name": "Herb Roasted Pork Tenderloin with Preserves", "ingredients": "2 whole Pork Tenderloins\n Salt And Pepper, to taste\n8 Tablespoons Herbs De Provence (more If Needed\n1 cup Preserves (fig, Peach, Plum)\n1 cup Water\n1 Tablespoon Vinegar", "url": "http://thepioneerwoman.com/cooking/2011/09/herb-roasted-pork-tenderloin-with-preserves/", "image": "http://static.thepioneerwoman.com/cooking/files/2011/09/porkloin.jpg", "cookTime": "PT15M", "recipeYield": "12", "datePublished": "2011-09-15", "prepTime": "PT5M", "description": "This was yummy. And easy. And pretty! And it took basically no time to make.     Before I share the recipe, I'll just say it:..." },
      searchIngredients: state.searchIngredients.concat( action.ingredient )
    } );
  }
  return state;
};

exports.ingredientReducer = ingredientReducer;
