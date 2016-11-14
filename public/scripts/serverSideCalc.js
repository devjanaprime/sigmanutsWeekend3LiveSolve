var verbose = true;

$( document ).ready( function(){
    $( '#calculateButton' ).on( 'click', function(){
      if( verbose ) console.log( 'calculateButton clicked' );
      // assemble user input into an object to send
      var objectToSend = {
        x: $( '#xIn' ).val(),
        y: $( '#yIn' ).val(),
        type: $( '#typeIn' ).val()
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

    $( '#clearButton').on( 'click', function(){
      // clear inputs
      $( '#xIn' ).val('');
      $( '#yIn' ).val('');
      // reset type selector
      $( '#typeIn').val('add');
      // clear output
      $( '#output').html('');
    }); // end clearButton on click
}); // end doc reacy
