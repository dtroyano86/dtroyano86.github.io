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

/*      Complex Datatypes         */
// Complex datatypes don't have a fixed size so the variables we declare only point to where the complex
// datatype is actually stored. This means if you copy a complex datatype you are only copying the reference
// and editing one will edit the other.

let cat = {             // Declare a new object
    name: 'Nymeria',
    breed: 'Tortie'
};
let cat2 = cat;         // Save the reference to the cat object to cat2
cat2.name = 'Zoey';     // Alter the name, remember it edits the reference so both will change
console.log(cat);       // prints => { name: 'Zoey', breed: 'Tortie' }

// If you want to duplicate an object you can use the spread operator to create a new identical object
let cat3 = {...cat};    // The spread operator pulls out all the values in the object to declare an identical copy
cat3.name = 'Spooky';   // Update the name of cat3
console.log(cat3);      // prints => { name: 'Spooky', breed: 'Tortie' }
console.log(cat);       // prints => { name: 'Zoey', breed: 'Tortie' }

/*      Types of Complex Datatypes         */

// Arrays are zero indexed lists of items and the elements can be accesed with bracket notation
// They can hold any other datatype in any combination
const arr = ['Bob', 'John', 1, 5];  // Declare a new Array
const arr2 = ['Danny', arr, true];  // Declare an array with another Array inside it
console.log(arr2[1]);               // prints => ['Bob', 'John', 1, 5]

// Objects are unordered lists that are made up of key/value pairs. They can be accesed with bracket or dot 
// notation. Dot notation can be use when you know the name of the key, but when you are using a variable to
// access the object you have to use bracket notation.
// Like Arrays, Objects can also hold any other datatype in any combination
const obj = {       // Declare a new Object with a variety of datatypes
    oldArr: arr,
    name: 'Danny',
    age: 33,
    pet: cat
};
console.log(obj.name);      // prints => Danny
let accesor = 'pet';
console.log(obj[accesor]);  // prints => { name: 'Zoey', breed: 'Tortie' }

// Functions are the building blocks of a program. They are a collection of statements that perform a task.
// Functions can take an input, or not. Functions can return some data, or not.
// Functions definitions are hoisted at compile time, so they can be called before they are defined
addTwoStrings('Hello ', 'World!');      // prints => Hello World
function addTwoStrings(str1, str2) {    // Define a named function called addTwoStrings
    console.log(str1 + str2);           // Add the two given strings and log them to the console
}

// You can also have anonymous functions 
const sum = (num1, num2) => { return num1 + num2 };    // Define sum as a const that adds two numbers
console.log(sum(1, 5)); // prints => 6

// Primitive and Complex datatypes are passed to functions differently as well. Primitives are passed as a
// copy, which means you aren't editing the original variable inside the function. Whereas Complex datatypes
// are passed in as a reference, so if you edit them in a function the original variable is also updated.
function addTwoNumbers(num1, num2) {    // Define a function that adds two numbers
    return num1 + num2;                 // Return the two numbers added together
}
var c = 1;
var d = 2;
addTwoNumbers(c, d);    // Add the two numbers c and d but don't save the results
console.log(c, d);      // prints => 1 2    (They are still unchanged)
c = addTwoNumbers(c, d);// Add the two numbers but save the result to c
console.log(c);         // prints => 3

function changeBreed(catToChange, newBreed){    // Define a function that changes a cat Object's breed
    catToChange.breed = newBreed;               // Change the breed to the newBreed
}

changeBreed(cat, 'Calico'); // Change the cat Object's breed to 'Calico'
console.log(cat);           // prints => { name: 'Zoey', breed: 'Calico' }