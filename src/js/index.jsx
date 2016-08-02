var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( 'react-redux' ).Provider;

var store = require( './store' );
var IngredientList = require( './ingredient-list' );

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <IngredientList />
    </Provider>,
    document.getElementById( 'app' ) );
} );
