// loop and get single
// In obj with 1
// if already add / assign 1
function charCount(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        if (obj[word[i]]) {
            obj[word[i]] += 1;
        } else {
            obj[word[i]] = 1;
        }
    }
    return obj;
}

console.log(charCount("PRIYANKA"));
// {
//     "P": 1,
//     "R": 1,
//     "I": 1,
//     "Y": 1,
//     "A": 2,
//     "N": 1,
//     "K": 1
// }
// { P:1, R:1, I:1, Y:1, A:2, N:1, K:1 }


//Chcek the number gets divide into 2,3 until half the number if gets 0 not prime
//Else its prime
function isPrime(num) {

    if (num >= 1 && num <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(15)); // false