


//In JavaScript, a Set is a built-in object that lets you store unique values
//of any type. It is part of ES6 and provides a simple and efficient way to handle collections of unique items.

/*

In JavaScript, a Set is a built-in object that lets you store unique values 
of any type. It is part of ES6 and provides a simple and efficient way to handle collections of unique items.

Key Features of a Set:
Uniqueness: A Set automatically removes duplicate values.
Any Type of Value: You can store primitive values (number, string, boolean) or object references.
Iterability: Sets are iterable, so you can loop through their values.
 */


// Create an empty Set
const mySet = new Set();

// Create a Set with initial values
const numbers = new Set([1, 2, 3, 4, 5]);


mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added
console.log(mySet); // Output: Set { 1, 2 }

console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

mySet.delete(1); 
console.log(mySet); // Output: Set { 2 }

mySet.clear(); 
console.log(mySet); // Output: Set {}


console.log(mySet.size); // Output: 0 (after clearing)



//Iterating Over a Set
//You can iterate through a Set using for...of or the forEach method:
 
const mySet2 = new Set([1, 2, 3]);

// Using for...of
for (const value of mySet2) {
    console.log(value); // Output: 1, 2, 3
}

// Using forEach
mySet.forEach(value => {
    console.log(value); // Output: 1, 2, 3
});


//Converting a Set to an Array
//You can use the spread operator (...) or Array.from() to convert a Set into an array:

const mySet1 = new Set([1, 2, 3]);
const myArray = [...mySet1];
console.log(myArray); // Output: [1, 2, 3]

const anotherArray = Array.from(mySet1);
console.log(anotherArray); // Output: [1, 2, 3]

//Use Cases for Set
//Useful in scenarios like checking visited elements in a graph traversal.
//Removing Duplicates from an Array:

const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4]

//. Union
//Combine two sets:

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Output: Set { 1, 2, 3, 4, 5 }


//2. Intersection
//Find common elements:

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Output: Set { 3 }


//3. Difference
//Find elements in one set but not the other:

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Output: Set { 1, 2 }


