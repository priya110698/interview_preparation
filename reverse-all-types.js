// ***** Strnig Reverse *****

// STEPS:
// 1. Loop the String in Reverse Order
// 2. Concat the characters

let txt = "JOHN Monkey Path";
let revesedString = "";

for (let i = txt.length; i >= 1; i--) {
    revesedString += txt[i - 1];
}
console.log("RevesedString :", revesedString);

txt = "";
for (let i = revesedString.length - 1; i >= 0; i--) {
    txt += revesedString[i];
}
console.log("Text :", txt);

//////////////////////////////////////////////////////////////////

// Array Reverse
// Object Reverse
// Primitive & Non-primitive check