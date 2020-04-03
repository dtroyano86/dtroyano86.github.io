/*
* FUNCTIONS:
*
* 0. Functions are the one of the fundamental elements of any application built in JavaScript.
* A function is a set of statements and expressions that perform a task or return a value. They
* can optionally take inputs as well. To use a function, first we must define it, and thanks to
* hoisting that doesn't have to be literally first. When you call the function it runs the code
* block and does something.
*
* 1. If a function is taking input, those potential values are called parameters. These are
* what the function is looking for when it is called. The actual values that are passed into the
* function are called arguments.
*
* 2. To define a functions parameters, name them and place them in the parentheses in the
* function definition. Than you can call them in the function with that name.
*
* 3. To get an output from a function, have it return what you want it to output.
*
* 4. Named functions are defined with the function keyword and than a name. Whereas, anonymous
* functions are defined, and typically assigned to a variable, without a name. If you wish to
* assign a function to a variable you just use the assignment operator as normal.
*
* 5. Functions are allowed to access variables that are defined in parent or global scopes, but
* variables that are defined inside functions are not accessible outside of that function.
*
* 6. Closures are created when a function references its surrounding state. If the function 
* returns a reference to a piece of data that is preserved even after the function stops running.
*/

// 1. Functions are defined by using the keyword function and then naming them //
// They do not need to have parameters //
function helloWorld() {  // This function prints Hello World! when called
    console.log('Hello World!');
}

// 2. Functions can take parameters like a str to print //
// str is the parameter, and whatever value is passed in is the argument //
function printString(str) { // This function prints a given str when called
    console.log(str);
}

// 3. Use the return keyword to tell the function what you would like to give back when called //
function doAddition(numOne, numTwo) {   // This function returns the sum of two given numbers //
    return numOne + numTwo;             // (or it could concate two given strings) //
}

// 4. Anonymous functions don't require a name and are typically saved to a variable //
const timesTwo = function (num) {   // This saves timesTwo as a function that mutiplies a //
    return num * 2;                 // given number times two //
}
console.log(timesTwo(4));   // prints => 8

// 5. addNumber can access the global number variable but the global scope can't see the //
// result variable which was created inside the function //
let number = 5;
function addNumber(num) {   // This function adds a given number to the global number
    let result = number + num;
    return result;
}
console.log(addNumber(5));
// console.log(result);
// This would be an error since you can't access result outside the function addNumber //

// 6. Declare a function named dog that has an object in it called dog //
function dog() {
    const dog = {};
    // Return two methods that allow you to interact with the dog object
    return {
        // makeDog names the dog and gives it an age
        makeDog: (name, age) => {
            dog.name = name;
            dog.age = age;
        },
        // seeDog returns the dog to make sure it exists
        seeDog: () => {
            return dog;
        }
    }
}
// Declare a const named washburne that is a dog function
const washburne = dog();
// Run the make dog command to generate a dog
washburne.makeDog('Washburne', 7);
// Return the dog and log it to show that closure exists because you can still access the dog //
// variable that is inside the function, even though we aren't inside the function. //
console.log(washburne.seeDog());    // prints => { name: 'Washburne', age: 7 }