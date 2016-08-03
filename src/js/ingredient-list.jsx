var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var actions = require( './actions' );
var Ingredient = require( './ingredient' );

var IngredientList = React.createClass( {
  addIngredient: function() {
    var ingredientName = this.refs.ingredientName.value;
    // TODO: Add the repository to the state
    this.props.dispatch( actions.addIngredient( ingredientName ) );
    this.props.dispatch( actions.fetchRecipe( ingredientName ) );
  },
  render: function() {
    var ingredients = this.props.state.searchIngredients.map( function( ingredient ) {
      return ( <li><span className="arrow"></span><Ingredient className="ingredient" ingredient={ ingredient } key={ ingredient }/></li> );
    } );
    var newRecipe = "";
    if ( this.props.state.recipeResult !== null ) {
      newRecipe = <div className="ingredient-recipe">{this.props.state.recipeResult}</div>
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
