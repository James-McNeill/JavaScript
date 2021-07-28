/* 
Homework Assignment #2: Variables and Constants

Explanation:
The three keyword assignments of; let, const and var, can be viewed as a story to develop wider functionality within a JavaScript program. Within any JavaScript program we first must be aware of the global and local scope. A global scope relates to a variable being defined in the main body of the program and the variable value being accessible to any element of the program. Many globally scoped variables will be defined at the beginning of a program for this reason. Whereas a local scope variable is defined within the body of a function and therefore can only be accessed within the function. Another concept in JavaScript is called Hoisting, which relates to the default behaviour of moving declarations to the top of their containing scope. This means that let, var and const variable declarations are interpreted as if they are at the top of their scope (global or local).

After understanding the power of scoping in JavaScript we can then review the three definitions for variable assignment that we are reviewing. With the variable declaration var, the variable can be global or local (function) scoped, value can be updated, value can be re-declared, and it can be hoisted, that is registered in the scope and initialized with undefined. However, with the variable declaration let, the variable will be block scoped, a value can be updated, the value cannot be re-declared, and it can be hoisted but not initialized. Lastly, with the variable declaration const, the variable will be block scoped, the value is immutable, a value cannot be re-declared, and it can be hoisted but not initialized. With three declarations available it can be a challenge to understand which to use. A few simple rules exist, the usage of var is discouraged to avoid the confusion with scope, accidental re-declarations, and hoisting undefined values, we should aim to use let. If a value requires no alterations during the entire program, then const should be used at it can hold values that are facts. As no set rule exists the use of let appears to be most appropriate with the value declarations being altered to const if required.
*/

// Code review to provide examples

// Const keyword

// Assign value
const pi=3.14;
console.log(pi);
// Try to re-assign - throws an error as we cannot re-assign after we initially declared
// pi=3;

// Re-declared
const num=1;
// const num=2; // Throws an error as we cannot re-declare

// Var keyword
function foo() {
  var n=2; // Local scope
  console.log(n);
}

var n=1; // Global scope
console.log(n);
foo(); // Calling local scope

// Re-declaring value
var n=3;
console.log(n);

// Let keyword
let a=2;
// let a=3; // Re-declaring will throw back an error

//code will throw an error
function foo1(n) {
    if (n == 6) {
        let bb = 2;
    }
    console.log(bb); // Cannot access variable outside of block scope
}

let b = 6;
console.log(b);
foo1(b);