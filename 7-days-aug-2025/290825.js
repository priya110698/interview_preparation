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

// console.log(fibo(5)); //5
// console.log(fibo(7)); //13
// console.log(fibo(10)); //55
// console.log(fibo(9)); //34

// Largest & smallest in array

function smallLargeM1(arr) {
    return Math.min(...arr) + ' - ' + Math.max(...arr);
}

// console.log(smallLargeM1([9, 1, 2, 63, 5, 23, 7, 35, 4, 4])); 



function smallLargeM2(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr[0] + ' - ' + arr[arr.length - 1];
}

console.log(smallLargeM2([9, 1, 2, 63, 5, 23, 7, 35, 4, 4])); 
