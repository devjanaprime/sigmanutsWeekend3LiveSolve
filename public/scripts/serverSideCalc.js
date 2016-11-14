var verbose = true;
var x = '';
var y = '';
var type ='';
var capturingY = false;

$( document ).ready( function(){
    $( '#calculateButton' ).on( 'click', function(){
      if( verbose ) console.log( 'calculateButton clicked' );
      // assemble user input into an object to send
      var objectToSend = {
        x: x,
        y: y,
        type: type
      }; // end objectToSend
      if( verbose ) console.log( 'sending:', objectToSend );
      // POST to server for calculation
      $.ajax({
        type: 'POST',
        url: '/calculate',
        data:  objectToSend,
        success: function( data ){
          if( verbose ) console.log( 'back from ajax call:', data );
          $( '#output' ).html( data.answer );
        },
        error: function(){
          if( verbose ) console.log( 'no worky' );
        }
      }); // end ajax
    }); // end calculateButton on click

    $( '#clearButton' ).on( 'click', function(){
      // clear output
      $( '#output').html('');
      // clear global vars
      x = '';
      y = '';
      // reset global variables
      type ='';
      capturingY = false;
    }); // end clearButton on click

    $( '.numberIn' ).on( 'click', function(){
      console.log( 'numberIn class clicked:', $( this ).attr( 'number' ) );
      if( capturingY ){
        y += $( this ).attr( 'number' );
        $( '#output' ).html( y );
      }
      else{
        x += $( this ).attr( 'number' );
        $( '#output' ).html( x );
      }
    }); // end numberIn on click

    $( '.typeIn' ).on( 'click', function(){
      console.log( 'typeIn on click:', $( this ).attr( 'type' ) );
      // set type = the type attribute of this button
      type = $( this ).attr( 'type' );
      // start capturingY if not already capturing y
      if( !capturingY ){
        capturingY = true;
        console.log( 'flipping over to capture y');
      }
    }); // end typeIn on click
}); // end doc reacy
