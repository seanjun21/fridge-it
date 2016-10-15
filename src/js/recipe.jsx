var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var Recipe = React.createClass( {
  render: function() {
    return (
      <div className="recipe">
        <a href={this.props.recipe.url} target="_blank">{ this.props.recipe.name }</a>
      </div>
    );
  }
} );

module.exports = Recipe;
