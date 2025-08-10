console.log("******* Palindrome **********");

const word = "A man, a plan, agh canal: Panama", originalWord = [];
let wordArray = [];
let words = [], reversedWord = [];

const letterRegex = /^[A-Za-z]+$/;
wordArray = word.split('');
wordArray.forEach((nameValue, i) => {
    if (letterRegex.test(nameValue)) {
        originalWord.push(nameValue.toLowerCase());
    }
});

words = originalWord;

for (let i = words.length - 1; i >= 0; i--) {
    reversedWord.push(words[i].toLowerCase());
}

console.log("originalWord = ", originalWord);

console.log("reversedWord = ", reversedWord.toString());

console.log("words = ", words.toString());

if (reversedWord.toString() === words.toString()) {
    console.log("Yep, It's Palindrome")
} else {
    console.log("It's Not a Palindrome")
}