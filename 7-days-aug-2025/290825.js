// Fibonacci sequence
// 0,1,1,2,3,5
//0,1,1,2,3,5,8,13
function fibo(n) {
    let val = 0, num1 = 0, num2 = 1, temp = 0;
    for (let a = 1; a < n; a++) {
        val = num1 + num2;
        temp = num2;
        num2 = val;
        num1 = temp;
    }
    return val;
}

console.log(fibo(5)); //5
console.log(fibo(7)); //13
console.log(fibo(10)); //55
console.log(fibo(9)); //34

