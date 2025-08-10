//Array kinds:

 // 1.Mutator Methods: 
// 1.push()
// 2.pop()
// 3.shift()
// 4.unshift()
// 5.splice()
// 6.sort()
// 7.reverse()
// 8.fill()
include('array-methods/mutator-array.js');

 //2. Accessor Methods
// 1. concat()
// 2. join()
// 3. slice()
// 4. indexOf()
// 5. lastIndexOf()
// 6. includes()
// 7. find()
// 8. findIndex()
// 9. keys()
// 10. values()
include('array-methods/accessor-method.js');

 //3. Iteration Methods
// 1. forEach()
// 2. map()
// 3. filter()
// 4. reduce()
// 5. reduceRight()
// 6. some()
// 7. every()
include('array-methods/iteration-method.js');

// 4. Search Methods
// 1. findLast()
// 2. findLastIndex()

 // 5. Other Methods
// 1. flat()
// 2. flatMap()
// 3. Array.isArray()
// 4. from()
// 5. of()
// 6. copyWithin()
// 7. entries()
// 8. slice()

// 1. Array.isArray():
// The Array.isArray() static method determines whether the passed value is an Array or Not.
// Return Boolean value - True / False

//Example:
console.log(Array.isArray([]));
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray({}));
console.log(Array.isArray(''));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

// 2. Array.from(arrayLike)

// 