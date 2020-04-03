/*
* LOOPS:
*
* 0. Loops are a built in feature of JavaScript that allow us to run a block of code as many
* times as we need. They are normally used to iterate over a collection of data, potentially
* pulling it out one at time to work on each piece. There are three different kinds of loops.
* for loops, for in loops, and while loops. Typically you don't want to use while loops.
*
* 1. There are several elements to a for loop. There is an expression that runs once before 
* the loop begins, typically a variable declaration. There is a condition that runs before
* the loop begins each time, if it is true than the code block will run. There is also a final
* statement to be performed at the end of each loop, typically to increment the variable.
* Finally, there is also a code block that runs as long as the stated condition is true.
*
* 2. A for in loop is started by declaring a variable, typically a key, for each element in
* a collection. Because of this, a for in loop must be iterating over a collection of data.
* If you use an object it will be the key, if you use an array it will be the index. This kind
* of loop will run a block of code once for each item in the collection than end.
*
* 3. A while loop is like a for loop that only has a condition and a code block. As long as
* that condition is true the code block will continue to execute, so you must remember to 
* have a way for the loop to end while inside the loop. Otherwise you program will break.
*/

let arr = [1, 2, 3, 4, 5];
let dog = {
    name: 'Washburne',
    color: 'Tan',
    age: 7
};

// 1. for loops can increment up from the start of an array //
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}   // prints => 1 2 3 4 5
// or backwards counting down from the length to the beginning //
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}   // prints => 5 4 3 2 1

// 2. for in loops are typically use for objects to interact with all their elements //
for (let key in dog) {
    console.log(dog[key]);
}   // prints => Washburne Tan 7

// If you were to just print the key variable you would get all the keys in the object //
for (let key in dog) {
    console.log(key);
}   // prints => name color age

// They can also be used on arrays, the key variable will just be the index //
// It is important to note in this circumstance that the key variable will be a string //
for (let key in arr) {
    console.log(key);
}   // prints => 0 1 2 3 4

// 3. A while loop only has an ending condition and needs to have a counter and an //
// incrementer manually declared //
let counter = 0;
while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
} // prints => 1 2 3 4 5