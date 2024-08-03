// ***** Strnig Reverse *****

// STEPS:
// 1. Loop the String in Reverse Order
// 2. Concat the characters

let txt = "JOHN Monkey Path";
let revesedString = "";

for (let i = txt.length; i >= 1; i--) {
    revesedString += txt[i - 1];
}
// console.log("RevesedString :", revesedString); -- Enable it when ever you needs this

txt = "";
for (let i = revesedString.length - 1; i >= 0; i--) {
    txt += revesedString[i];
}
// console.log("Text :", txt); -- Enable it when ever you needs this

//////////////////////////////////////////////////////////////////

// Array Reverse
// String Array
// let strArray = ['a', 'b', 'c', 'd', 'e'], reverseString = [], reversedString = [];

//Array-of-objects
let strArray = [{
    a: 1
}, {
    b: 2
}, {
    c: 3
}, {
    d: 4
}], reversedString = [], reverseString = [];

strArray.reverse(); // Pre-defined JS method
console.log(strArray);

// Method 1 - Just reverse the whole array values
for (let i = strArray.length - 1; i >= 0; i--) {
    reversedString.push(strArray[i]);
}
console.log("reversedString", reversedString);


// Method 2 - Swap the array values
reverseString.push(...reversedString);
for (let i = 0; i < Math.floor(reverseString.length / 2); i++) {
    let temp = reverseString[i];
    reverseString[i] = reverseString[reverseString.length - (1 + i)]
    reverseString[reverseString.length - (1 + i)] = temp;
}
console.log("reverseString 2", reverseString);
