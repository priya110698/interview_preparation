
function include(file) {
	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */

// // Print this
//     *
//    * *
//   * * * 
//  * * * *
// * * * * *
// include('star-printing/file-1.js');
// include('7-days-aug-2025/d1-remove-duplication.js');
include('7-days-aug-2025/string-reverse.js');



// ***************** JavaScript array series **********************//
// include('array-methods/array-series-part-1.js');

//Missing brackets
// include('missing-brackets.js');

//Reverse logic for all types
// include('reverse-all-types.js');

//TO sum of prime number
// include('sum-of-prime.js');

// ****************************************************************************************************************** //
//TO remove from String Array
// include('remove-duplication/remove-duplication-1.js');

//TO remove from Array of objects
// include('remove-duplication/remove-duplication-2.js');
// include('remove-duplication/remove-duplication-3.js');
// ****************************************************************************************************************** //

// **************** PALINDROME **********************************//
//include('palindrome/palindrome-1.js');


