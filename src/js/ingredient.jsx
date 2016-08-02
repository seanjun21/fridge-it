var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var Ingredient = React.createClass( {
  render: function() {
    return (
      <div className="ingredient">
        { this.props.ingredient }
      </div>
    );
  }
} );

var Container = connect()( Ingredient );

module.exports = Container;
