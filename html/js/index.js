function __init() {
  var _multiple = ( $( 'body' ).width() > 639 );

  if ( $( 'div.post' ).length == 1 ) { // workaround to bug where one-post tags weren't showing the post in tag view
    _multiple = false;
    }

  function __other() {
    $( '#foot' ).css( 'visibility', 'visible' );
    $( '#home #head' ).css( 'visibility', 'visible' ).hide().fadeIn();
    }

  function __posts() {
    $( '#posts' ).vgrid( {
      delay: ( _multiple ? 60 : 0 ),
      easeing: 'easeOutQuint',
      forceAnim: _multiple,
      gridDefWidth: 3 + 12 + 290 + 12 + 3,
      selFitWidth: '#all',
      selRefGrid: '#posts > div.post',
      time: 800
      } );

    $( '#posts > div.post' ).css( 'visibility', 'visible' );
    };

  if ( _multiple ) {
    setTimeout( __posts, 300 );
    setTimeout( __other, 1500 );
    }
  else {
    __posts();
    __other();
    }

  $( window ).load( function () {
    window.scrollTo( 0, 0 );
    } );
  }

$( __init );
