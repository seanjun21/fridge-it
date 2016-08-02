var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var actions = require( './actions' );
var Ingredient = require( './ingredient' );

var IngredientList = React.createClass( {
  addIngredient: function() {
    var ingredientName = this.refs.ingredientName.value;
    // TODO: Add the repository to the state
    this.props.dispatch( actions.addIngredient( ingredientName ) );
  },
  render: function() {
    var ingredients = this.props.state.searchIngredients.map( function( ingredient ) {
      return <Ingredient ingredient={ ingredient } key={ ingredient }/>;
    } );
    var newRecipe = "";
    if ( this.props.state.recipeResult !== null ) {
      newRecipe = <div className="ingredient-recipe">
          <a href={this.props.state.recipeResult.url}>{this.props.state.recipeResult.name}</a>
        </div>
    }
    return (
      <div className="ingredient-list">
        <input type="text" ref="ingredientName" />
        <button type="button" onClick={this.addIngredient}>
          Fridge-It
        </button>
        {ingredients}
        {newRecipe}
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
