// remove-duplication using object

const numberOfRecords = 100000;
const records = [];

for (let i = 0; i < numberOfRecords; i++) {
    records.push(Math.floor(Math.random() * 1000000));
}

console.log("Duplicate Array", records); // Display the generated 

//***************** */

// Array with duplicate keys:
let duplicateArrays = records;

//Declare new array & obj:
let uniqueArray = [];
let uniqueObj = {};

// Way - 1 :
  // Steps:
  // 1. Iterate Array
  // 2. Assign the value to Object Key 
  // 3. Iterate Object & push the key / value in array


//Iterate the array
// for (let i = 0; i < duplicateArrays.length; i++) {
//     let key = duplicateArrays[i];
//     uniqueObj[key] = duplicateArrays[i];
// }


// console.log("uniqueObj", uniqueObj);
// for(i in uniqueObj) {
//     uniqueArray.push(uniqueObj[i])
// }

//Unique array
// console.log("Unique Array", uniqueArray);

// Way - 2 :
   // Steps:
   // 1.Add duplicateContain Array to Set
   // 2.Push that set value into the array

uniqueArray.push(...new Set(duplicateArrays));
console.log("Unique Array",uniqueArray);

