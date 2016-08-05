var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( 'react-redux' ).Provider;

var store = require( './store' );
var Fridge = require( './fridge' );

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Fridge />
    </Provider>,
    document.getElementById( 'app' ) );
} );
