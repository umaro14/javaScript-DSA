
/*In JavaScript, scope determines the accessibility or visibility of variables, functions, 
 and objects in various parts of the code. Variables in JavaScript can have different scopes
 depending on how they are declared—using var, let, or const.

Let's break down each of these keywords and the types of scope:

1. Types of Scope in JavaScript
Global Scope ==> Variables declared outside of any function or block have global scope,
which means they are accessible anywhere in the code.

Function Scope==> Variables declared inside a function are only accessible within that function.

Block Scope ==> Variables declared inside a block (anything inside {}) are only accessible within
that block. This scope applies only to let and const.

2. var: Function Scoped
var ==> is function-scoped, meaning that if you declare a variable with var inside a function,
it is accessible throughout the entire function.
var is not block-scoped. If you declare it within a block (like an if or for loop),
it is still accessible outside the block.

Hoisting ==> Variables declared with var are "hoisted" to the top of their function scope,
meaning they are accessible even before the line where they are declared (though they will be undefined until the line where they're assigned).

javascript code*/
function example() {
   
    if (true) {
        var x = 10;
    }
    console.log(x); // Accessible, outputs 10
}
example();

console.log(x); // ReferenceError: x is not defined (because x is function-scoped, not global)


/*
 3. let: Block Scoped
let ==> is block-scoped, which means that it is only accessible within the {} block in which
it is defined (e.g., inside an if statement, loop, or function).
No Hoisting: While let is technically hoisted, it is not initialized, so you cannot access it before the declaration line (Temporal Dead Zone).
*/

function example() {
    if (true) {
        let y = 20;
        console.log(y); // Accessible here, outputs 20
    }
    console.log(y); // ReferenceError: y is not defined (y is block-scoped)
}
example();


/*
4. const: Block Scoped and Immutable
const is similar to let in terms of block scope.
Constant Value: Variables declared with const are read-only after they’re assigned,
meaning their value cannot be changed.
However, if you use const with an object or array, the reference is constant,
but the properties or elements can be modified.
 */

function example() {
    if (true) {
        const z = 30;
        console.log(z); // Accessible here, outputs 30
    }
    console.log(z); // ReferenceError: z is not defined (z is block-scoped)
}
example();

const person = { name: "Alice" };
person.name = "Bob"; // This is allowed (mutating object properties)
console.log(person); // Outputs { name: "Bob" }
