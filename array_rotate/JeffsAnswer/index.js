const rotateArray = require( './rotate_array' );

let givenArray = [ 5, 2, 4, 7, 8, 4, 6 ];
let rotationSteps = 12;		// this is the 'n' of the stated problem but I usually user verbose variable names so things are clearer and more self-dcoumenting

let rotatedArray = rotateArray( givenArray, rotationSteps );

console.log( givenArray + ' rotated ' + rotationSteps + ' to the right is ' + rotatedArray );