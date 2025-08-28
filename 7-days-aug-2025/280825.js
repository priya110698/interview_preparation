function FizzBuzz(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// FizzBuzz(1, 100);

function factorial(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}

console.log("Fac", factorial(5));