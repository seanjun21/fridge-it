/*---------- DEPENDENCIES ----------*/
var express = require( 'express' );
var cors = require( 'cors' );
var app = express();
app.use( cors() );

var mongoose = require( 'mongoose' );
var DATA = require( './data.js' );
var _ = require( 'lodash' );

/*---------- GET REQUESTS ----------*/
app.get( '/recipes', cors(), function( request, response ) {
  response.status( 200 ).json( "" );
} );

app.get( '/recipes/:ingredient', cors(), function( request, response ) {
  // request = ingredient1|ingredient2;
  var ingrtSplit = request.params.ingredient.split( '|' );

  var test = _.filter( DATA, function( o ) {
    var patt = new RegExp( ingrtSplit[ 0 ], 'i' );
    var res = patt.test( o.ingredients );
    return res;
  } );

  var test2 = _.filter( test, function( o ) {
    var patt = new RegExp( ingrtSplit[ 1 ], 'i' );
    var res = patt.test( o.ingredients );
    return res;
  } );

  response.status( 200 ).json( test2 );
} );


app.listen( process.env.PORT || 9000 );

exports.app = app;
