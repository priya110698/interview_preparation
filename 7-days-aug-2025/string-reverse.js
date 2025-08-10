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

