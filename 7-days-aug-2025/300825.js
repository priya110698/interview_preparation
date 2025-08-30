// Remove duplicates from array
function removeDuplicatesFrmArrayM1(arrInp) {
    return [...new Set(arrInp)];
}

// console.log(removeDuplicatesFrmArray([1, 1, 2, 3, 3, 3, 4, 5, 5, 6]));

function removeDuplicatesFrmArrayM2(arrInp) {
    let newArr = [];
    for (let i = 0; i < arrInp.length; i++) {
        if (newArr?.indexOf(arrInp[i]) === -1) {
            newArr.push(arrInp[i]);
        }
    }
    return newArr;
}

// console.log(removeDuplicatesFrmArrayM2([1, 1, 2, 3, 3, 3, 4, 5, 5, 6]));


function removeDuplicatesFrmArrayM3(arrInp) {
    for (let i = 0; i < arrInp.length; i++) {
        for (let j = i + 1; j < arrInp.length; j++) {
            if (arrInp[i] == arrInp[j]) {
                arrInp.splice(i, 1);
                i--;
            }
        }
    }
    return arrInp;
}

console.log(removeDuplicatesFrmArrayM3([2, 2, 1, 2]));

console.log(removeDuplicatesFrmArrayM3([3, 1, 3, 3]));

console.log(removeDuplicatesFrmArrayM3([1, 2, 1, 2]));
console.log(removeDuplicatesFrmArrayM3([4, 5, 5, 5]));
console.log(removeDuplicatesFrmArrayM3([1, 2, 3, 2, 4, 3, 5]));


// // console.log(removeDuplicatesFrmArrayM3([1, 1, 2, 3, 3, 3, 4, 5, 5, 6]));
// // console.log(removeDuplicatesFrmArrayM3([1, 1, 2, 3, 3, 3, 4, 5, 5, 6]));
// // console.log(removeDuplicatesFrmArrayM3([1, 2, 2, 3, 4]));

// const input = [1, 2, 2, 3, 4, 2];
// // console.log(removeDuplicatesFrmArrayM3([1, 2, 2, 2, 3]));
// // console.log(removeDuplicatesFrmArrayM3([1, 1, 2, 3, 3, 3, 4, 5, 5, 6])); 
// console.log(removeDuplicatesFrmArrayM3([2, 2, 1, 2]));

// // console.log(removeDuplicatesFrmArrayM3(input));


