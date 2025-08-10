// alert("hi");
//with using indexOf predefined js function
// function removeDuplicates(inputArr) {
//     let uniqueArr = [];
//     for (let i = 0; i < inputArr.length; i++) {
//         if (uniqueArr.indexOf(inputArr[i]) === -1) {
//             uniqueArr.push(inputArr[i]);
//         }
//     }
//     return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 5, 6, 1, 2]));

// without extra array
// function removeDuplicatesWithoutExtraArr(inputArr) {
//     let obj = {};
//     for (let i = 0; i < inputArr.length; i++) {
//         obj[inputArr[i]] = inputArr[i];

//     }
//     return Object.values(obj)
// }

// console.log(removeDuplicatesWithoutExtraArr([1, 2, 2, 2, 3, 4, 5, 6, 1, 2]));

// Another type
function removeDuplicatesT3(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {

            if (inputArr[i] === inputArr[j]) {
                inputArr.splice(j, 1);
                j--;
            }
        }
    }
    return inputArr;
}

console.log("Result", removeDuplicatesT3([1, 2, 2, 2, 2, 3, 3, 3, 2]));

