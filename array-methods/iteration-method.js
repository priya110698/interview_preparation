// //3. Iteration Methods
// // 1. forEach()
// // TO loop the array
// // Will return undefined
// // array.forEach(callback(element, index, array), thisArg);

// //Ex:
// // const users = [
// //     { name: "Alice", age: 25 },
// //     { name: "Bob", age: 30 },
// //     { name: "Charlie", age: 35 }];

// const users = [1, 2, 3, 'a', 'b', 'c'];

// users.forEach((element, index, array) => {
//     console.log("Array Element: ", element);
//     console.log("Array Index: ", index);
//     console.log("Array: ", array);
//     console.log("     ");
// });

/* *************** */

// 2. map()
// To transaforming array data
// Returns transaformed array
// array.map(callback(element, index, array), thisArg)

// //Ex-1:
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);

// console.log("Original Array : ", numbers); // Output: [1, 2, 3, 4]
// console.log("Doubled Array : ", doubled); // Output: [2, 4, 6, 8]

// EX-2:
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const ageModified = users.map((userObj) => {
//     return userObj.age + 1
// });

// const ageModifiedUsers = users.map((userObj) => {
//     return { ...userObj, age: userObj.age + 1 }
// });

// console.log("Original Users Array : ", users); 
// console.log("One Age incremented  : ", ageModified); // [ 26, 31, 36 ]
// console.log("One Age incremented  Array : ", ageModifiedUsers); 


// 3. filter()
// To filter the array as we want using conditions
// Returns new array with filtered values
// let newArray = array.filter(callback(element, index, array));

//EX-1:
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log("Filtered Values", evenNumbers); // Output: [2, 4, 6]


// //Ex-2:
// // Array of objects representing a list of people
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 22 }
// ];

// // Filtering the array to find people older than 28
// const olderThan28 = people.filter(person => person.age > 28);
// console.log("Filtered Values", olderThan28);

// 4. reduce()
// To used for combine the array values
// Returns each time currentValue
// arr.reduce(callback[, initialValue]) => array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Syntax = array.reduce((accumulator, currentValue) => {return currentValue}, initalValue);

// Ex-1:
// let num = [1, 2, 4, 5, 61];
// let total = num.reduce((accumalator, arrayElement) => {
//     console.log(accumalator, arrayElement);
//     return accumalator += arrayElement;
// }, 0);

// console.log("total = ", total);
// console.log("--------------------------------------------------");

// // Ex-2: Calculate Total Price
// const cart = [{ name: 'Apple', price: 1.2 }, { name: 'Banana', price: 0.8 }, { name: 'Orange', price: 1.5 }, { name: 'Milk', price: 2.3 }];

// let totalPrice = cart.reduce((accumalator, arrayElement) => {
//     console.log(accumalator, arrayElement);
//     return accumalator += arrayElement.price;
// }, 0);

// console.log("Total Price = ", totalPrice);

// // 5. reduceRight()
// // To process the array values like reduce. But from Right to left order.

// //EX-1:
// // String Reverse:
// let strReverse = "Hello World";
// let strReverseArray = strReverse.split("");
// let reversedString = strReverseArray.reduceRight((accumulator, currentValue) => {
//     return accumulator += currentValue
// }, '');
// console.log("Reversed String", reversedString);


// 6. some()
// To find the particular value - is one / more available in array or not
// Returns True / False

//Ex-1:
// const numbers = [1, 3, 5, 7, 8];
// const hasEvenNumber = numbers.some(num => num % 2 === 0);

// console.log("Is array contains any even number", hasEvenNumber); // Output: true


// //Ex-2:
// let users = [
//     { id: 1, name: 'Alice', role: 'user' },
//     { id: 2, name: 'Bob', role: 'admins' },
//     { id: 3, name: 'Charlie', role: 'user' }
//   ];
  
//   // Check if at least one user is an admin
//   const hasAdmin = users.some(user => user.role === 'admin');
//   //const hasAdmin = users.some(user => user.role.includes('admin'));
  
//   console.log(hasAdmin); // Output: true
  


// 7. every()
// To check if all elements in an array satisfy a specific condition
// Returns true / false

// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);

// console.log(allEven); // Output: true

// const users = [
//   { id: 1, name: 'Alice', active: true },
//   { id: 2, name: 'Bob', active: true },
//   { id: 3, name: 'Charlie', active: false }
// ];

// // Check if all users are active
// const allActive = users.every(user => user.active);

// console.log(allActive); // Output: false

//-------------------------------------------------------------------

//Summary:
// 1. forEach()
// To loop the array
// Will return undefined
// array.forEach(callback(element, index, array), thisArg);
const users = [1, 2, 3, 'a', 'b', 'c'];
users.forEach((element, index, array) => {
    console.log("Array Element: ", element);
    console.log("Array Index: ", index);
    console.log("Array: ", array);
    console.log("     ");
});

// 2. map()
// To transform array data
// Returns transformed array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Original Array : ", numbers); // [1, 2, 3, 4]
console.log("Doubled Array : ", doubled); // [2, 4, 6, 8]

// 3. filter()
// To filter the array based on conditions
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Filtered Even Numbers: ", evenNumbers); // [2, 4]

// 4. reduce()
// Used to combine array values into a single result
const total = numbers.reduce((accum, num) => accum + num, 0);
console.log("Total of Numbers: ", total); // 10

// 5. reduceRight()
// Processes the array values from right to left order
let strReverse = "Hello World";
let reversedString = strReverse.split("").reduceRight((acc, char) => acc + char, '');
console.log("Reversed String: ", reversedString); // "dlroW olleH"

// 6. some()
// Checks if at least one element satisfies a condition
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log("Does the array contain any even numbers? ", hasEvenNumber); // true

// 7. every()
// Checks if all elements satisfy a condition
const allEven = numbers.every(num => num % 2 === 0);
console.log("Are all numbers even? ", allEven); // false

// Array of objects example
const usersArray = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: true },
  { id: 3, name: 'Charlie', active: false }
];

// Check if all users are active
const allActive = usersArray.every(user => user.active);
console.log("Are all users active? ", allActive); // false

