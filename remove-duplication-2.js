//remove Array-of-objects duplication using Set

const numberOfRecords = 100000;
const records = [];

for (let i = 0; i < numberOfRecords; i++) {
    // Create your record here (e.g., an object with properties)
    const record = {
        id: 1,
        name: `Record ${i + 1}`,
        // Add other properties as needed
    };

    records.push(record);
}

console.log(records); // Display the generated 

//***************** */


let duplicateArrays = records;

//Declare new array & obj:
let uniqueArray = [];
// let uniqueObj = new Map();
let uniqueObj = new Set();


//Iterate the array
for (let i = 0; i < duplicateArrays.length; i++) {
    let key = duplicateArrays[i].id;
    if (!uniqueObj.has(key)) {
        uniqueObj.add(key);
        uniqueArray.push(duplicateArrays[i]);
    }
}

console.log("uniqueObj", uniqueObj);
// for(i in uniqueObj) {
//     uniqueArray.push(uniqueObj[i])
// }

//Unique array
console.log("uniqueArray", uniqueArray);