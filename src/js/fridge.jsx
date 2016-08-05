var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var actions = require( './actions' );
var Ingredient = require( './ingredient' );
var Recipe = require( './recipe' );

var Fridge = React.createClass( {
  addIngredient: function() {
    var ingredientName = this.refs.ingredientName.value;
    var allIngredients = this.props.state.searchIngredients.slice();
    allIngredients.push( ingredientName );
    var concatIngredients = allIngredients.join( '|' );

    if ( this.props.state.searchIngredients.length < 2 ) {
      if ( ingredientName !== '' ) {
        for ( var i = 0; i < this.props.state.searchIngredients.length; i++ ) {
          if ( this.props.state.searchIngredients[ i ] === ingredientName ) {
            this.refs.ingredientName.value = '';
            return
          }
        }
        this.props.dispatch( actions.addIngredient( ingredientName ) );
        this.props.dispatch( actions.fetchRecipe( concatIngredients ) );
      }
    }
    this.refs.ingredientName.value = '';
  },

  delIngredient: function( event ) {
    var ingredientDel = event.currentTarget.textContent;
    this.props.dispatch( actions.delIngredient( ingredientDel ) );
    this.props.dispatch( actions.fetchRecipe( this.props.state.searchIngredients ) );
  },

  handleKeyPress: function( e ) {
    if ( e.key === 'Enter' ) {
      this.addIngredient();
    }
  },

  render: function() {
    self = this;
    var ingredients = this.props.state.searchIngredients.map( function( ingredient, index ) {
      return (
        <li key={index} onClick={self.delIngredient}>
          <span className="arrow"></span>
          <Ingredient ingredient={ ingredient } />
        </li>
      );
    } );
    var newRecipe = "";
    if ( this.props.state.recipeResult ) {
      newRecipe = this.props.state.recipeResult.map( function( recipe, index ) {
        return (
          <li key={index}>
            <Recipe recipe={recipe} />
          </li>
        );
      } );
    }
    return (
      <div className="fridge">
        <div className="top-bar">
          <div className="search-container">
            <input type="text" ref="ingredientName" onKeyPress={this.handleKeyPress} placeholder="Ingredients?"/>
            <button type="submit" onClick={this.addIngredient}></button>
          </div>
          <ul className="ingredients-list">
            {ingredients}
          </ul>
        </div>
        <ul className="recipes-list">
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

var Container = connect( mapStateToProps )( Fridge );

module.exports = Container;
