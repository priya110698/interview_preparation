function include(file) {

	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);

}

/* Include Many js files */

//Reverse logic for all types
include('reverse-all-types.js');

//TO remove from String Array
// include('remove-duplication-1.js');

//TO remove from Array of objects
// include('remove-duplication-2.js');
