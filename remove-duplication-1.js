// remove-duplication using object

const numberOfRecords = 100000;
const records = [];

for (let i = 0; i < numberOfRecords; i++) {
    records.push(Math.floor(Math.random() * 1000000));
}

console.log(records); // Display the generated 

//***************** */

// Array with duplicate keys:
let duplicateArrays = records;

//Declare new array & obj:
let uniqueArray = [];
let uniqueObj = {};

// Way - 1 :
//Iterate the array
// for (let i = 0; i < duplicateArrays.length; i++) {
//     let key = duplicateArrays[i];
//     uniqueObj[key] = duplicateArrays[i];
// }


// console.log("uniqueObj", uniqueObj);
// for(i in uniqueObj) {
//     uniqueArray.push(uniqueObj[i])
// }

// //Unique array
// console.log("uniqueArray", uniqueArray);

// Way - 2 :
uniqueArray.push(...new Set(duplicateArrays));
console.log(uniqueArray);

