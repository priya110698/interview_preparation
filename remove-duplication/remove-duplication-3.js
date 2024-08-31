// Using looping

let
    // data = [1, 2, 3, 4, 1, 5, 2, 3, 61], 
    uniqueArray = [],
    data = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }, { a: 61 }];

  console.log(data);
  data.map((arrVal, i) => {
    if (!uniqueArray.includes(arrVal['a'])) {
        uniqueArray.push(arrVal['a']);
    }
});

console.log(uniqueArray);