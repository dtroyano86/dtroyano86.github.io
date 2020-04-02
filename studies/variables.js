/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
* 
* 3. Variable can also be re-assigned to a different value.
*
* 4. There are three different ways to declare variables. You can use var, let, and const. Each one
* has distinct advantages and disadvantages and specific situations where they should be used.
* const and let are new to ES6 and it is helpful to compare them to the older declaration, var, which
* can be both redeclared and updated
* 
* 5. let variables can be updated but NOT redeclared.
*
* 6. const variables can only be declared but NOT updated.
*
* 7. var variables are Function scoped, meaning they are accessible in the function they are declared
* in, even if they are declared inside a block scope, such as an If block or a For loop.
*
* 8. let and const variables are Block scoped, meaning they are only accessible in the block they are 
* declared in. Unlike var they don't bubble up to the function scope.
*
* 9. Variables defined with var are hoisted by JavaScript when compiled. This means that when your script is
* compiling JavaScript runs all your variable declarations so that you can call a variable before it is 
* initialized. However it only pulls the declaration so if you attempt to read it before initializing it 
* will return undefined.
*
* 10. Variables defined with let and const are also hoisted, but they exist in a Temporal Dead Zone, and because
* they aren't initialized they will throw errors.
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
// It doesn't matter if we change the type of thing stored in the variable //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. All of the below examples are valid and the variable name changes value with each one //
var name = 'foo';
console.log(name); // prints => foo
var name = 'bar';
console.log(name); // prints => bar
name = 'danny';
console.log(name); // prints => danny

// 5. lName can be declared and updated but not re-declared //
let lName = 'foo';
console.log(lName); // prints => foo
// let lName = 'bar'; // This will throw an error because lName is already declared
lName = 'troyano';
console.log(lName); // prints => troyano

// 6. fName can be declared, but because it is a constant it cannot be updated in any way //
const fName = 'danny';
console.log(fName); // prints => danny
// const fName = 'foo'; // This will throw an error because fName is already declared
// fName = 'bar'        // this will throw an error because consts can't be updated

// const Objects are a little special becacuse you can change what they contain //
// The attributes of a const Object can be updated, even though the Object itself can not //
const dog = {
    name: 'Washburne',
    color: 'Tan'
};
dog.name = 'Furiosa';   // Update the dog name
dog.color = 'Brown';    // Update the dog color
console.log(dog);   // prints => { name: 'Furiosa', color: 'Brown' }

// 7. The variable i is accessible outside the For loop but inside the function it was made in. //
// And the variable arr is only available inside the function it was made in, not in the global scope. //
function splitString(string) {
    var arr = [];                               // Declare a new empty Array with var to put the letters in
    for (var i = 0; i < string.length; i++) {   // Run a for loop over the given string
        arr.push(string[i]);                    // Add each sequential letter to the array
    }
    console.log(i);     // prints the last i value used in the for loop
    console.log(arr);   // prints the whole array
}
splitString('Hello');
// console.log(arr);    // This will throw an error because arr is only defined inside splitString

// 8. The let variable i is not available outside the For loop because it is block scoped //
function joinString(arr) {
    let newString = '';                     // Declare a new empty String with let to put the string in
    for (let i = 0; i < arr.length; i++) {  // Run a for loop over the given Array
        newString += arr[i];                // Concate the current letter with the newString
    }
    // console.log(i);      // This will throw an error because i is only defined inside the for loop
    console.log(newString); // prints the concated Array
}
joinString(['h', 'e', 'l', 'l', 'o']);
//console.log(newString);   // This will throw an error because newString is only defined inside the for loop

// 9. Calling hoistTest before it is initilized with print undefined because only the declaration is hoisted //

console.log(hoistTest);         // prints => undefined
var hoistTest = 'Hello World';
console.log(hoistTest);         // prints => 'Hello World'

// 10. None of the below console.logs() will work because they are running before the variable is initialized //

// console.log(letTest);    // This will throw an error
let letTest = 'Let Testing';
// console.log(constTest);     // This will also throw an error
const constTest = 'Const Testing';