

function linearFind( inputArray, sum ) {
	pairs = [];
	let i, j;
	for ( i = 0; i < inputArray.length; i++ ) {
		if ( inputArray[i] < sum ) {		// optimize out cases where the first number is larger than the sum
			j = i + 1;
			if ( j < inputArray.length ) {
				for ( j; j < inputArray.length; j++ ) {
					if ( inputArray[i] + inputArray[j] == sum ) {
						pairs.push( [ inputArray[i], inputArray[j] ] )
						break;
					}
				}
			}
			if ( pairs.length > 0 ) {
				break;
			}
		}
	}

	return pairs;
}





var cachedArrayAsString = undefined
var cachedSortedArray = undefined;


function logrithmicFind( inputArray, sum ) {

	let pairs = [];
	let inputArrayAsString = JSON.stringify( inputArray );
	if ( inputArrayAsString != cachedArrayAsString ) {
		cachedArrayAsString = inputArrayAsString;
		cachedSortedArray = inputArray.sort( function( a, b ) { return a-b; }).slice();
	}

	for ( i = 0; i < cachedSortedArray.length; i++ ) {
		let targetValue = sum - cachedSortedArray[i];
		if ( i + 1 < cachedSortedArray.length ) {
			let numFound = binarySearch( i, cachedSortedArray, targetValue );
			if ( numFound ) {
				pairs.push( [ cachedSortedArray[i], targetValue ] )
				break;
			}
		}
	}
	return pairs;
}





function binarySearch( i, array, value ) {
	let firstIndex = i + 1;
	let lastIndex = cachedSortedArray.length - 1;
	let middleIndex = Math.floor( ( firstIndex + lastIndex ) / 2 );

	while ( array[middleIndex] !== value && firstIndex < lastIndex )  {
		if ( value < array[middleIndex]) {
			lastIndex = middleIndex - 1;
		} else {
			firstIndex = middleIndex + 1;
		}

		middleIndex = Math.floor( ( firstIndex + lastIndex ) / 2 );
	}

	return ( array[middleIndex] === value ) ? true : false;
}



exports.linearFind = linearFind;
exports.logrithmicFind = logrithmicFind;
