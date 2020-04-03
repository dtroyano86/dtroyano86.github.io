/*
* OPERATORS:
*
* 0. Operators interact with our data, they compare it, or use it in expressions, or assign
* values to it. Operators are typically grouped by how many operands, pieces of data, they
* interact with and the way they are interacting with it.
*
* 1. Assignment Operators are a Binary operator. They take a value and save it to a variable.
* They can also act on the data, commonly by addition, subtraction, or multiplication first.
*
* 2. Arithmetic Operators are a Binary operator. They mostly take numeric values and return a
* numeric value as the result of an expression. The exception is strings can be concated with
* the + operator.
*
* 3. Comparison Operators are a Binary operator. They compare two values and return a boolean,
* depeding on the conditions set by the operator. There are strict and non strict comparisons.
* Strict compares type and non strict doesn't. You should almost alway use Strict, unless you
* have a very very good reason not to.
*
* 4. Logical Operators are a Binary operator. They are used with booleans, these can be
* comparisons that evaluate to booleans as well. They are they will check the logical operator
* provided and return a boolean based on that condition.
*
* 5. Unary Operators only interact with one piece of data. The three most commonly used are -,
* !, and typeof. - turns a value into a number and makes it negative. ! is the bang operator
* and it flips the boolean value of whatever it interacts with. typeof returns a string that
* indicates the type of the operand, although a lot of things are objects so a more rigorous
* test may be required to further narrow it down.
*
* 6. The Ternary Operator is the only operator that takes three operands. It takes a condition
* and two expressions. One to execute if the condition is true and one for if it is false. It
* is basically an abbreviated if statement.
*/

// 1. Assignment Operators //
let x = 15;
console.log(x); // prints => 15

// 2. Arithmetic Operators //
// Addition
console.log(x + 1);     // prints => 16
// Subtraction
console.log(x - 12);    // prints => 3
// Multiplication
console.log(x * 2);     // prints => 30
// Division
console.log(x / 3);     // prints => 5
// Find the remainder
console.log(x % 5);     // prints => 0
// Raise to the power
console.log(x ** 2);    // prints => 225
// Increment by one
console.log(x++);       // prints => 16
// Decrement by one
console.log(x--);       // prints => 14

// 3. Comparison Operators //
// Greater Than
console.log(x > 24);    // prints => false
// Less than or equal to
console.log(x <= 15);   // prints => true
// Strict Equality
console.log(x === 15);  // prints => true
// Non Strict Equality, note that it doesn't check type so it is still true
console.log(x == '15'); // prints => true

// 4. Logical Operators //
// Checks if either condition is true
console.log(x < 3 || x >= 15);  // prints => true
// Checks if both conditions are true
console.log(x > 5 && x < 10);   // prints => false

// 5. Unary Operators //
// Makes a number negative
console.log(-x);        // prints => -15
// Also it converts a value to a number if it can
console.log(-'3');      // prints => -3
// Flips the value of a boolean
console.log(!true);     // prints => false
// Returns the type of the data as a string
console.log(typeof x);  // prints => number
// It's important to remember it returns arrays as an object as well
console.log(typeof [2, 4, 5]);    //prints => object

// 6. Ternary Operator //
// Create a function that checks if it's too cold outside
const isItTooColdOutside = (temp) => {
    // If the temp is greater than 60 return Nope. It's warm, otherwise Brrrr. It's too cold
    return temp > 60 ? "Nope. It's warm" : "Brrrr. It's too cold";
}
isItTooColdOutside(69); // prints => Nope. It's warm
isItTooColdOutside(45); // prints => Brrrr. It's too cold