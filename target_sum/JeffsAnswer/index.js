const findPairs = require( './findPairsForSum' );
const givenArray = [ 3, 8, 7, 10, 3, 6, 9, 1, 4, 2 ];
const sum = 16;


// first run the linear code ---------------------------------
let pairs1 = findPairs.linearFind( givenArray, sum );

let msg1 = pairs1.length ? `Pair exists that equals ${ sum } - ( ${ pairs1[0][0] }, ${ pairs1[0][1] } )` : `No pair exists that equals ${ sum }`;
console.log( msg1 );



// second run the semi-logrithmic code ( it's logrithmic on subsequent calls )---------------------------------
let pairs2 = findPairs.logrithmicFind( givenArray, sum );

let msg2 = pairs2.length ? `Pair exists that equals ${ sum } - ( ${ pairs2[0][0] }, ${ pairs2[0][1] } )` : `No pair exists that equals ${ sum }`;
console.log( msg2 );