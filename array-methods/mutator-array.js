// 1.Mutator Array Methods: 
// Modifies Original array 

// 1.push()
// -> "Add" Element(s) to "End-Of-Array"
// Ex:
const pushArray = [1, 2, 3];
pushArray.push(4);
// console.log("pushArray = ", pushArray);
// console.log("pushArray Length = ", pushArray.length);

pushArray.push(5, '6', { a: 12 });
// console.log("pushArray = ", pushArray);
// console.log("pushArray Length = ", pushArray.length);

pushArray.push(null, undefined);
// console.log("pushArray = ", pushArray);
// console.log("pushArray Length = ", pushArray.length);


// 2.pop()
// -> "Remove" Element from "End-Of-Array"
// Ex:
// pushArray.pop();
// console.log("pushArray", pushArray);
// console.log("pushArray Length", pushArray.length);

// pushArray.pop();
// console.log("pushArray", pushArray);
// console.log("pushArray Length", pushArray.length);

// pushArray.pop();
// console.log("pushArray", pushArray);
// console.log("pushArray Length", pushArray.length);

// 3.shift() (Imagine Concert line - If concert room opens 1st person shift from line to concert room means that element get out from the array)
// -> "Remove" Element from "Begging-Of-Array"
// Ex:
// pushArray.shift();
// console.log("pushArray", pushArray);
// console.log("pushArray Length", pushArray.length);


// 4.unshift() (Imagine our resume - New experiences go on top always like element added on first)
// -> "Add" Element(s) to "Begging-Of-Array"
// Ex:
// pushArray.unshift(1);
// console.log("pushArray = ", pushArray);
// console.log("pushArray Length = ", pushArray.length);

// pushArray.unshift(-1, 0);
// console.log("pushArray = ", pushArray);
// console.log("pushArray Length = ", pushArray.length);


// 5. splice()
// -> To "add, remove, or replace elements" in an array starting at a specified index. 
// (Imagine a birthday cake: after slicing out one piece, the remaining cake stays altered - 
// similarly, the original array is modified by splice.)

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// 1. startIndex: The index at which to begin modifying the array.
// 2. deleteCount (optional): The number of elements to remove. If 0, no elements are removed.
// 3. ...itemsToAdd (optional): Elements to add at the startIndex. If omitted, no elements are added.

// Ex:
console.log("Original Array = ", pushArray);

// console.log("Splice() = ", pushArray.splice(1)); // To Delete
// //console.log("Splice(0, 2) = ", pushArray.splice(0, 2,)); // To Delete


console.log("Spliced Array = ", pushArray.splice(pushArray.length - 3, 2)); // To Delete
console.log("Original Array = ", pushArray);

// pushArray.splice(pushArray.length - 3, 2, 'hi', 'bye'); // To add
// console.log("Modified Array = ", pushArray);



// 6.sort()
// -> Sort elements based on Lexical(alphabetical)-order as ascending order in default.
// -> Internally - elements are converted into string type -> unicode value based sorting
//Ex:
// let sortArr = [2, 5, 1, 10, 20];
// console.log("sortArr", sortArr.sort()); //Lexical Order (Dictionary order)

// sortArr.sort((a, b) => a - b);
// //-  while doing a - b is:
// // - Negative (a < b): a comes before b.
// // - Zero (a == b): a and b remain unchanged.
// // - Positive (a > b): b comes before a.
// console.log("sortArr", sortArr);



// 7.reverse()
// -> Reverse the whole array
//Ex:
// reverseArray = [1, 2, 4];
// reverseArray.reverse();
// console.log("sortArr", reverseArray);

// reverseArrayObj = [{ a: 1 }, { b: 2 }, { c: 4 }];
// reverseArrayObj.reverse();
// console.log("sortArr", reverseArrayObj);



// 8.fill()
// Replace the array values from '0' by default. 
// If mentioned index, that specified indecies will get replaced
// array.fill(value, startIndex, till)
// Ex:
// let fillArr = [1, 2, 3, 4];
// fillArr.fill(0, 1, 3);
// console.log("fillArr = ", fillArr);

// fillArr.fill(0);
// console.log("fillArr = ", fillArr);


// summary:
// 1. push() - Adds elements to the end of the array.
// 2. pop() - Removes an element from the end of the array.
// 3. shift() - Removes an element from the beginning of the array.
// 4. unshift() - Adds elements to the beginning of the array.
// 5. splice() - Adds or removes elements at a specified index.
// 6. sort() - Sorts elements in lexical (alphabetical) order or using a compare function.
// 7. reverse() - Reverses the entire array.
// 8. fill() - Replaces array values with a specified value, optionally starting from a specified index.