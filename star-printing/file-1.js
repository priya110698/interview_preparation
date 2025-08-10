//Print this
//     *
//    * *
//   * * * 
//  * * * *
// * * * * *

let a = 5;

//Method-2:
for (let i = 1; i <= a; i++) {
    let v = "", p = "";

    for (let k = 1; k <= a - i; k++) {
        p += " ";
    }

    for (let j = 1; j <= i; j++) {
        v += " * ";
    }
    console.log(p + v);
    console.log("\n");
}

//Method-1:
// for (let i = 1; i <= a; i++) {
//     console.log(" ".repeat(a - i) + " * ".repeat(i));
//     console.log("\n");
// }