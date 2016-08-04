var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var actions = require( './actions' );
var Ingredient = require( './ingredient' );

var IngredientList = React.createClass( {
  addIngredient: function() {
    var ingredientName = this.refs.ingredientName.value;
    var allIngredients = this.props.state.searchIngredients.slice();
    allIngredients.push( ingredientName );
    var concatIngredients = allIngredients.join( '|' );

    // TODO: Add the repository to the state
    this.props.dispatch( actions.addIngredient( ingredientName ) );
    this.props.dispatch( actions.fetchRecipe( concatIngredients ) );
  },
  render: function() {
    var ingredients = this.props.state.searchIngredients.map( function( ingredient ) {
      return (
        <li key={ ingredient }>
          <span className="arrow"></span>
          <Ingredient className="ingredient" ingredient={ ingredient } />
        </li>
      );
    } );
    var newRecipe = "";
    if ( this.props.state.recipeResult !== null ) {
      newRecipe = <li>{this.props.state.recipeResult}</li>
    }
    return (
      <div className="ingredient-list">
        <div className="top-bar">
          <div className="search-container">
            <input className="input-box" type="text" ref="ingredientName" />
            <button type="button" onClick={this.addIngredient}>
            Fridge-It
            </button>
          </div>
          <ul className="ingredients-container">
            {ingredients}
          </ul>
        </div>
        <ul className="ingredient-recipe">
          {newRecipe}          
        </ul>
      </div>
    );
  }
} );

var mapStateToProps = function( state, props ) {
  return {
    state: state
  };
};

var Container = connect( mapStateToProps )( IngredientList );

module.exports = Container;
