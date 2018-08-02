
function rotateArray( givenArray, rotationSteps ) {
	if ( rotationSteps > 0 ) {
		let normalizedNumber = ( rotationSteps > givenArray.length ) ? rotationSteps % givenArray.length : rotationSteps;
		let startNumber = givenArray.length - normalizedNumber;

		let firstPart = givenArray.slice( 0, startNumber );
		let secondPart = givenArray.slice( -normalizedNumber);

		return secondPart.concat( firstPart );
	} else {
		return givenArray;
	}
}

module.exports = rotateArray;

