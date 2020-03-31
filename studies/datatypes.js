/*
* DATATYPES
*
* Javascript is a dynamically typed language, which means that variables are not locked to any specific datatype. 
* The datatype of a variable is kind of information that the variable is currently pointing at. There are several
* different primitive datatypes (Boolean, String, Number, and a few special ones) and there are also Objects, Arrays
* and Functions, which are complex datatypes.
*
*/

/*      Primitive Datatypes         */
// When you declare a primitive, the variable holds the data itself. And it is never altered, merely copied

let a = 5;      // Declare a primitve variable
a + 5;          // 5 is added to a but the a isn't changed so it remains 5
console.log(a); // prints => 5
a = a + 5;      // You must update the variable manually to see a change
console.log(a); // prints => 10

/*      Types of Primitives         */

// Numbers are numeric data
// These are all valid examples of numeric data
var b = 5;
let example = 12;
const foo = 21832.242;

// Strings are character data
// Individual characters in a string can be accessed using bracket notation
// They also have certain methods that you can call to manipulate them
let fName = 'Danny';        // You can enclose a string in single quotes
let lName = "Troyano";      // Or double quotes
console.log(fName[0]);      // prints => D
console.log(fName.length);  // prints => 5
console.log(lName.toUpperCase()) // prints => TROYANO

// Booleans are either true or false
// They can declared explicity or the result of expressions
let bool = true;
let boolTwo = fName === lName;
console.log(boolTwo);   // prints => false

// A variable is undefined only when it has been declared but not initialized
let fullName;
console.log(fullName); // prints => undefined

// A variable is null only when a programmer has purposely assigned it as null to remove any value
fullName = null;
console.log(fullName); // prints => null

// NaN stands for not a number and is typically the result of a coding error. If you try to do 
// mathmatical expressions on a variable that isn't a number this will be the result
fullName = 'Daniel Troyano';
fullName = fullName * 3;
console.log(fullName); // prints => NaN

// It's important to know for debugging that NaN is not even equal to itself, so a useful way to
// check to see if you are getting a NaN result is to check that.
if (fullName === fullName) {
    console.log('Not NaN');
} else {
    console.log('Value is NaN')
}
// prints => Value is NaN

// Infinity and -Infinity are also possible special values for your variable
let isInfinite = 4 / 0;
console.log(isInfinite) // prints => Infinity