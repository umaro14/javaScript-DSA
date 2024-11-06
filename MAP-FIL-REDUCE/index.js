
/*
 In JavaScript, map, filter, reduce, and forEach are array methods that make it
easier to work with arrays. Let's break down each one:
 */

/*
 1. map()
The map method creates a new array by applying a given function to each element of an array. 
It does not alter the original array but instead returns a new one.
 */

let numbers1 = [1, 2, 3, 4];
let squaredNumbers = numbers1.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]


/*
 2. filter()
The filter method creates a new array with all elements that pass a test implemented
by the provided function. If the function returns true,
the element is included in the new array; if it returns false, the element is excluded.
 */

let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


/*
 3. reduce()
The reduce method executes a reducer function on each element of the array,
resulting in a single output value. 
This method is great for combining values, such as summing an array of numbers.

accumulator: accumulates the return values of each function call.
currentValue: the current element being processed.
initialValue: optional, used to specify the initial value for the accumulator.
 */

let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // Output: 10


/*
4. forEach()
The forEach method executes a provided function once for each array element. Unlike map, filter, and reduce,
it does not return a new array and cannot be chained as part of a functional pipeline.
 */

let numbers4 = [1, 2, 3, 4];
numbers4.forEach(num => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8
