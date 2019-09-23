(function( d ) {
   'use strict';

   var c, num, temp1 = 'noplay', temp2 = 'noplay', check, pcCount = 0, plyCount = 0, delay = 6000,
       ary = [ 'paper1', 'rock1', 'scissor1' ],
       gam = d.getElementById( 'game' ),
       con = d.getElementById( 'container' ),
       pc = d.getElementById( 'pc' ),
       ply = d.getElementById( 'player' ),
       plb = d.getElementById( 'play' ),
       mes = d.getElementById( 'message' ),
       inp = d.getElementsByTagName( 'input' );

       gam.reset();

   for ( c= 0; c < inp.length; c ++ ) {
      if ( inp[ c ].type === 'radio' ) {
           inp[ c ].addEventListener( 'click', playerChoice( c ), false );
        }
      }

   function playerChoice( c ) {
      inp[ c ].onclick = function() {
          con.classList.remove( 'rotate' );
          con.classList.remove( 'rotate1' );
          pc.classList.remove( temp1 );
          pc.classList.add( 'noplay' );
          ply.classList.remove( temp2 );
          ply.classList.add( inp[ c ].value );
          temp2 = inp[ c ].value;
          plb.disabled = false; 

      switch( temp2 ) {

          case 'paper2': 
                          check = 0;
                          break; 

          case 'rock2': 
                          check = 1;
                          break; 

          case 'scissor2': 
                          check = 2;
                          break;

       }
    };
  }

   plb.addEventListener( 'click',  
      function() { 
          num = Math.floor( Math.random() * ary.length );
          pc.classList.remove( temp1 );
          pc.classList.add( ary[ num ] );
          temp1 = ary[ num ];
          plb.disabled = true;

         if (( num ===  0 && check === 1 )||
             ( num ===  1 && check === 2 ) ||
             ( num ===  2 && check === 0 )) {
             d.getElementById( 'pc-score' ).value = ++ pcCount ;
           }

         if (( num ===  0 && check === 2 )||
             ( num ===  1 && check === 0 ) ||
             ( num ===  2 && check === 1 )) {
             d.getElementById( 'player-score' ).value =  ++ plyCount;
           }

         if (plyCount === 5 ) {
             con.classList.add( 'rotate' );
             mes.value = 'Well done, you win';
             newGame();
           }

         if (pcCount === 5 ) {
            con.classList.add( 'rotate1' );
             mes.value = 'Bad luck, your pc wins';
             newGame();
           }
         }, false );

   function newGame() {
          plb.disabled = true;
          pc.classList.remove( temp1 );
          pc.classList.add( 'noplay' );
          ply.classList.remove( temp2 );
          ply.classList.add( 'noplay' );
          pcCount = 0;
          plyCount = 0;
   for ( c= 0; c < inp.length; c ++ ) {
      if ( inp[ c ].type === 'radio' ) {
           inp[ c ].disabled = true;
        }
      }
          setTimeout( 
             function(){
                  gam.reset();
                  for ( c= 0; c < inp.length; c ++ ) {
                     if ( inp[ c ].type === 'radio' ) {
                          inp[ c ].disabled = false;
                       }
                     }
                 }, delay );
     }
}( document ));