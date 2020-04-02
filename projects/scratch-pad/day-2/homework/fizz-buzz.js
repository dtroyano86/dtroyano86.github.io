// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // Start a for loop running from 1 to 100 inclusive
    for (let i = 1; i <= 100; i++) {
        // Set the current message to ''
        let message = '';
        // If the remainder of the current number divided by 3 is 0 set the message to Fizz
        if (i % 3 === 0) message = 'Fizz';
        // If the remainder of the current number diveded by 5 is 0 add Buzz to the message
        if (i % 5 === 0) message += 'Buzz';
        // if the message is still '', set the message to the current number
        if (message === '') message = i;
        // Console log the current message
        console.log(message);
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}