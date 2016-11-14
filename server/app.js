var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var path = require( 'path' );

var port = process.env.PORT || 3009;

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end app listen

// home base
app.get( '/', function( req, res ){
  // send back index.html in views folder
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end bse url

// calculate post route
app.post( '/calculate', urlEncodedParser, function( req, res ){
  console.log( 'calculate post route hit', req.body );
  // determine operator and do appropriate math
  // incoming x and y are text so much convert to Numbers
  switch ( req.body.type ) {
    case 'add':
      var answer = Number( req.body.x ) + Number( req.body.y );
      break;
    case 'subtract':
      answer = Number( req.body.x ) - Number( req.body.y );
      break;
    case 'multiply':
      answer = Number( req.body.x ) * Number( req.body.y );
      break;
    case 'divide':
      answer = Number( req.body.x ) / Number( req.body.y );
      break;
  }
  // send answer object to client
  var answerObject = {
    answer: answer
  }; // end answer object
  res.send( answerObject );
}); // end calculate post

// set up static folder
app.use( express.static( 'public' ) );
