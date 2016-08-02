var redux = require( 'redux' );
var createStore = redux.createStore;

var reducers = require( './reducers' );

var store = createStore( reducers.ingredientReducer );

module.exports = store;
