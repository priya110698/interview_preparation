let b = 4, c = 13, count = 0;

for (let i = b; i <= c; i++) {
    if ((i >= 2) && (i % 2 !== 0) && (i % 3 !== 0) || ((i == 2) || (i == 3))) {
        console.log(i);
        count += i;
    }
}

console.log("Sum of Prime: ",count);