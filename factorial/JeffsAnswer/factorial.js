function factorial( number ) {
	let sum = 1;
	for ( let i = number; i > 0; i-- ) {
		sum *= i;
	}
	return sum;
}

module.exports = factorial;

