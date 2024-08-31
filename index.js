function include(file) {
	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */
//Missing brackets
// include('missing-brackets.js');

//Reverse logic for all types
// include('reverse-all-types.js');

//TO sum of prime number
// include('sum-of-prime.js');

// ****************************************************************************************************************** //
//TO remove from String Array
include('remove-duplication/remove-duplication-1.js');

//TO remove from Array of objects
// include('remove-duplication/remove-duplication-2.js');
// include('remove-duplication/remove-duplication-3.js');
// ****************************************************************************************************************** //



