const factorial = require( './factorial' );

if ( process.argv.length <= 2 ) {
	console.log( 'please rerun this program, making sure to enter a whole number after "node index.js" - e.g. "node index.js 7"');
} else {
	let number = process.argv[2];
	let sum = factorial( number );
	console.log( 'the factorial of', number, 'is', sum );
}
