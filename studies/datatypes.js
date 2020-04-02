/*
* DATATYPES:
*
* 0. Javascript is a dynamically typed language, which means that variables are not locked to any 
* specific datatype. The datatype of a variable is the kind of information that the variable is 
* currently pointing at. There are several different primitive datatypes (Boolean, String, Number,
* and a few special ones) and there are also Objects, Arrays and Functions, which are complex 
* datatypes.
*
* 1. Primitive datatypes are defined by a few facts. Firstly, the variable itself holds the data 
* stored and it is never altered. Also, if you want to update a primitive you copy your new data over
* the old. 
*
* 2. Numeric data is a primitive. This is any number.
*
* 3. Strings, which are character data, are primitives. Indiviual characters can be accessed through
* bracket notation. Also strings have built in methods you can call to manipulate them.
*
* 4. Booleans are a primitive. These are either true or false. 
*
* 5. Undefined is a primitive. It only exists when a variable is declared but not initialized.
*
* 6. Null is a primitive. It only exists when a programmer explicity sets a variable to it. This
* is typically done when you want to remove any value from the variable.
*
* 7. NaN is a primitve. It stands for Not a Number and is typically the result of a coding error.
* This will normally be the result of attempting to do a mathmatical expression on a variable that
* isn't a number. Also NaN is not equal to itself, so a handy way to check for is to see if a
* variable is equal to itself, and if it isn't than it is probably NaN.
*
* 8. Infinity and -Infinity are also possible special primitive values for a variable.
*
* 9. Complex datatypes don't have a fixed size so the variables we declare only point to where the
* complex datatype is actually stored. This means if you copy a complex datatype you are only copying
* the reference and editing one will edit the other. If you want to duplicate an object you can use
* the spread operator to create a new identical object
*
* 10. Arrays are zero indexed lists of items and the elements can be accesed with bracket notation.
* They can hold any datatype in any combination, even other nested arrays.
*
* 11. Objects are unordered lists that are made up of key/value pairs. They can be accesed with
* bracket or dot notation. Dot notation can be use when you know the name of the key, but when you
* are using a variable to access the object you have to use bracket notation. Like Arrays, Objects
* can also hold any datatype in any combination.
*
* 12. Functions are the building blocks of a program. They are a collection of statements that
* perform a task. They can take an input, or not. They can return some data, or not. Like var variables,
* Function definitions are hoisted at compile time, so they can be called before they are defined.
*
* 13. Primitive and Complex datatypes are passed to functions differently as well. Primitives are passed
* as a copy, which means you aren't editing the original variable inside the function. Whereas Complex
* datatypes are passed in as a reference, so if you edit them in a function the original variable is also
* updated.
*/

// 1. a must manually copied to update it, merely performing the expression doesn't change it //
let a = 5;      // Declare a primitve variable
a + 5;          // 5 is added to a but the a isn't changed so it remains 5
console.log(a); // prints => 5
a = a + 5;      // You must update the variable manually to see a change
console.log(a); // prints => 10

// 2. All these numbers are valid examples of numeric data //
var b = 5;
let example = 12;
const foo = 21832.242;

// 3. Strings can be defined with single or double quotes. And you use brackets to access individual //
// characters. Also .length gets the length of the string, and there are other methods that will //
// manipulate the string but be sure to save it if you want the changes to stay. //
let fName = 'Danny';        // You can enclose a string in single quotes
let lName = "Troyano";      // Or double quotes
console.log(fName[0]);      // prints => D
console.log(fName.length);  // prints => 5
console.log(lName.toUpperCase()) // prints => TROYANO 
// The above example doesn't actually change the string lName //

// 4. Booleans can be declared explicity or the result of expressions //
let bool = true;
let boolTwo = fName === lName;  // fName does not strictly equal lName so boolTwo is false
console.log(boolTwo);   // prints => false

// 5. fullName exists but isn't initialized so it will be undefined //
let fullName;
console.log(fullName); // prints => undefined

// 6. fullName is now null because it is set as null //
fullName = null;
console.log(fullName); // prints => null

// 7. A string times 3 is Not a Number //
fullName = fullName * 3;
console.log(fullName); // prints => NaN

// fullName is now NaN so it will not be equal to anything, even itself //
if (fullName === fullName) {
    console.log('Not NaN');
} else {
    console.log('Value is NaN')
}
// prints => Value is NaN

// 8. If you divide by 0 you get infinity //
let isInfinite = 4 / 0;
console.log(isInfinite) // prints => Infinity

// 9. cat2 merely references the same variable as cat so changing one changes both. Whereas cat3 //
// is a whole new copy so it is unaffected by changes to the first two //
let cat = {             // Declare a new object
    name: 'Nymeria',
    breed: 'Tortie'
};
let cat2 = cat;         // Save the reference to the cat object to cat2
cat2.name = 'Zoey';     // Alter the name, remember it edits the reference so both will change
console.log(cat);       // prints => { name: 'Zoey', breed: 'Tortie' }

let cat3 = { ...cat };  // The spread operator pulls out the values in the object to declare a copy
cat3.name = 'Spooky';   // Update the name of cat3
console.log(cat3);      // prints => { name: 'Spooky', breed: 'Tortie' }
console.log(cat);       // prints => { name: 'Zoey', breed: 'Tortie' }

// 10. arr holds an ordered list and arr2 holds another ordered list with arr inside it //
const arr = ['Bob', 'John', 1, 5];  // Declare a new Array
const arr2 = ['Danny', arr, true];  // Declare an array with another Array inside it
console.log(arr2[1]);               // prints => ['Bob', 'John', 1, 5]

// 11. obj contains several different datatypes even an array //
const obj = {       // Declare a new Object with a variety of datatypes
    oldArr: arr,
    name: 'Danny',
    age: 33,
    pet: cat
};
console.log(obj.name);      // prints => Danny
let accesor = 'pet';
console.log(obj[accesor]);  // prints => { name: 'Zoey', breed: 'Tortie' }

// 11. addTwoStrings can be called even before it is defined thanks to hoisting //
addTwoStrings('Hello ', 'World!');      // prints => Hello World
function addTwoStrings(str1, str2) {    // Define a named function called addTwoStrings
    console.log(str1 + str2);           // Add the two given strings and log them to the console
}

// You can also have anonymous functions //
const sum = (num1, num2) => { return num1 + num2 };    // Define sum as a const that adds two numbers
console.log(sum(1, 5)); // prints => 6

// 12. addTwoNumbers won't alter the original variables with saving result //
// changeBreed will alter the original because you are passing in a reference to the original object //
function addTwoNumbers(num1, num2) {    // Define a function that adds two numbers
    return num1 + num2;                 // Return the two numbers added together
}
var c = 1;
var d = 2;
addTwoNumbers(c, d);    // Add the two numbers c and d but don't save the results
console.log(c, d);      // prints => 1 2    (They are still unchanged)
c = addTwoNumbers(c, d);// Add the two numbers but save the result to c
console.log(c);         // prints => 3

function changeBreed(catToChange, newBreed) {    // Define a function that changes a cat Object's breed
    catToChange.breed = newBreed;               // Change the breed to the newBreed
}

changeBreed(cat, 'Calico'); // Change the cat Object's breed to 'Calico'
console.log(cat);           // prints => { name: 'Zoey', breed: 'Calico' }