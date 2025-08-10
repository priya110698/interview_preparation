// Accessor Methods
// These methods do not modify the original array.

// // 1. concat()
// // Combines two or more arrays.
// //Ex:
// const arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [7, 8, 9];
// let newArr = [];
// newArr = arr1.concat(arr2, arr3);
// console.log("newArr = ", newArr);
// console.log("Still Arr 1 = ", arr1);
// console.log("Still Arr 2 = ", arr2);
// console.log("Still Arr 3 = ", arr3);


// // 2. join()
// // Joins array elements & converts into string
// // Ex:
// const joinArr = ['Hello', 'World'];
// let val = '';
// val = joinArr.join(' ');
// console.log("joinArr = ", val);

// const arr = ['hello', 'world', 'javascript'];
// const str = arr.join(' ');
// console.log(str); 







// // 3. slice()
// // Returns a shallow copy of a portion of an array. - Imagine Sliced Mango, we will get the sliced piece here
// // Negative indices count backward
// // Syntax: array.slice(start, end);
// // 1. start (optional): If omitted, it defaults to 0.
// // 2. end (optional): (not included). If omitted, it extracts to the end of the array
// // Ex:
const array = [1,2,3,4,5];
let newSlicedVal = array.slice(1,3);

console.log("Sliced Array = ", newSlicedVal);
console.log("Original Array = ", array); //No change(coz slice:shallow-copy)
console.log("Sliced with nagative number = ", array.slice(-4,-1));
console.log("Shallow copy = ", array.slice()); //No change(coz slice:shallow-copy)

// // Splitting File Extensions
// // Extract the file name or extension.
// const fileName = "document.pdf";
// const nameOnly = fileName.slice(0, fileName.lastIndexOf("."));
// const extension = fileName.slice(fileName.lastIndexOf(".") + 1);

// console.log(nameOnly); // Output: "document"
// console.log(extension); // Output: "pdf"


























// // 4. indexOf()
// // Returns the "first-found index of the given value" -> if "exact" match, if not present return "-1" -- it's for string array
// // Return Index / -1
// //Ex:
// let indexofArray = ['apple', 'banana', 'mango', 'apple'];
// console.log("indexofArray", indexofArray.indexOf('Apple')); //-1
// console.log("indexofArray", indexofArray.indexOf('apple')); //0

// // 5. lastIndexOf()
// // Returns the "last-finding-index-of-given-value" -> if "exact" match, if not present return "-1". It searches the array backward.  -- it's for string array
// // Return Index / -1
// // Ex:

// let numbers = [10, 20, 30, 20, 40];
// console.log("lastIndex of 20 is = ",numbers.lastIndexOf(20));  // Output: 3
// console.log("lastIndex of '20' is = ", numbers.lastIndexOf('20'));  // Output: -1

// 6. includes()
// To check whether "Exact-value" included in array / not -- it's for string array
// Return true / false

// let includesArray = ['A','B','C','D','E'];
// console.log(includesArray.includes('A')); //true
// console.log(includesArray.includes('a')); //false


// 7. find()
// To find the "1st exact-matching value" from Array
// Returns found value / undefined

// Ex:
// let findArr = ['A', 'B', 'C'];
// console.log(findArr.find(ele => ele == 'b')); //undefined
// console.log(findArr.find(ele => ele == 'B')); //B

// let findArrObj = [{ key: 'a' }, {key:'b'}, {key:'c'}];
// console.log(findArrObj.find(eleObj => eleObj.key == 'b')); //{ key: 'b' }
// console.log(findArrObj.find(eleObj => eleObj.key == 'B')); //undefined

// ***************************************************

// 8. findIndex()
// To find the "index of array-element"
// Returns "1st matching value's 'Index'"
// array.findIndex((element, index, array) => { /* test condition */ });

//Ex:
// let stringArr = [1, 2, 7, 3, 4, 5];
// console.log(stringArr.findIndex((obj) => obj == 7)); // 2
// console.log(stringArr.findIndex((obj) => obj === '7')); // -1
// console.log(stringArr.findIndex((obj) => obj == '')); // -1

// let arrOfObj = [{name: 'John', age: 12},{name: 'Kin', age: 15}, {name: 'jenna', age: 18}];
// console.log(arrOfObj.findIndex((arrObj) => arrObj.name == 'jenna')); // 2
// console.log(arrOfObj.findIndex((arrObj) => arrObj.name == 'JENNA')); // -1

// // 9. keys()
// // To get the keys(Indexes) of array
// // Returns "array-iterator"

// let arr = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Jane', age: 25 },
//     { id: 3, name: 'Joe', age: 40 }
//   ];

// console.log("", arr.keys()); //Object [Array Iterator] {}

// for(let i of arr.keys()) {
//     console.log(i); //0 , 1, 2
// }

// 10. values()
// To get the values of array
// Returns "Array-iterator"

// let arrVal = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Jane', age: 25 },
//     { id: 3, name: 'Joe', age: 40 }
//   ];

// console.log("", arrVal.values()); //Object [Array Iterator] {}

// for(let i of arrVal.values()) {
//     console.log(i); 
// }

// Result:
// { id: 1, name: 'John', age: 30 }
// { id: 2, name: 'Jane', age: 25 }
// { id: 3, name: 'Joe', age: 40 }


// -- Extra
// let obj = { key: 'value' };
// let arr = [obj, { key: 'value' }];
// console.log(arr.indexOf(obj));           // Output: 0 (exact same object reference)
// console.log(arr.indexOf({ key: 'value' })); // Output: -1 (not the same reference, even though it looks similar)
