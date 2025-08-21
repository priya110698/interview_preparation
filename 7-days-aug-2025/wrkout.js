function strReverse(stringVal) {
    let newStr = '';
    for (let i = stringVal.length - 1; i >= 0; i--) {
       newStr += stringVal[i];
    }
    return newStr;
}

// console.log(strReverse("Hello World"));

// Using split().reverse().join()

function strReverseT2(str) {
 return str.split('').reverse().join('');
}

console.log("Type 2 = ", strReverseT2("Hello World"));

//Remove duplication

function removeDuplication(arrInp) {
    let newUniqueArr = [];
    //use new-array & push values with checking already exist / not
    for (let i = 0; i < arrInp.length; i++) {
        if (newUniqueArr.indexOf(arrInp[i]) < 0) {
            newUniqueArr.push(arrInp[i]);
        }
    }
    return newUniqueArr;
}

console.log(removeDuplication([9, 8, 0, 7, 6, 1, 2, 0, 9, 8, 3, 4, 2]));

