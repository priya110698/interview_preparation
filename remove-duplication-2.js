//remove Array-of-objects duplication using Set

const numberOfRecords = 100000;
const records = [];

for (let i = 0; i < numberOfRecords; i++) {
    // Create your record here (e.g., an object with properties)
    const record = {
        id: Math.floor(Math.random() * 1000000),
        name: `Record ${i + 1}`,
        // Add other properties as needed
    };

    records.push(record);
}

console.log("Duplicate Array",records); // Display the generated 

//***************** */


let duplicateArrays = records;

//Declare new array & obj:
let uniqueArray = [];
let removedDuplicateArray = [];
// let uniqueObj = new Map();
let uniqueSet = new Set();

//STEPS: 
 // 1. Iterate duplicate array
 // 2. Check the Set & add the unique value into set
 // 3. While adding set push the total object into array

//Iterate the array
for (let i = 0; i < duplicateArrays.length; i++) {
    let keyValue = duplicateArrays[i].id;
    if (!uniqueSet.has(keyValue)) {
        uniqueSet.add(keyValue);
        uniqueArray.push(duplicateArrays[i]);
    } else {
        removedDuplicateArray.push(duplicateArrays[i]);
    }
}

console.log("Unique Set Value", uniqueSet);
// for(i in uniqueObj) {
//     uniqueArray.push(uniqueObj[i])
// }

//Unique array
console.log("Unique Array", uniqueArray);
console.log("Removed Duplicate Array", removedDuplicateArray);