var ADD_INGREDIENT = 'ADD_INGREDIENTS';
var addIngredient = function( ingredient ) {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient
  };
};

exports.ADD_INGREDIENT = ADD_INGREDIENT;
exports.addIngredient = addIngredient;
