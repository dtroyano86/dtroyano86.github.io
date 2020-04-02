// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Use the isArray method on Array to check if it is an array
    return Array.isArray(value);
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Use typeof to determine if it is an object
    if (typeof (value) === 'object') {
        // Use isArray to determine if it isn't an array
        if (!Array.isArray(value)) {
            // Check if it isn't null (just to be sure)
            if (value !== null) {
                // Check if it doesn't have a getMonth method to see if it isn't a date
                if (typeof (value.getMonth) !== 'function')
                    // Return true if all those conditions are passed
                    return true;
            }
        }
    }
    // otherwise return false
    return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // Use typeof to determine if it is an object
    if (typeof (value) === 'object') {
        // Chekc if it isn't null (just to be sure)
        if (value !== null) {
            // Check if it doesn't have a getMonth method to see if it isn't a date
            if (typeof (value.getMonth) !== 'function')
                // Return true if all those conditions are passed
                return true;
        }

    }
    // Check if it is an array and if it is also return true
    if (Array.isArray(value)) return true;
    // Otherwise return false
    return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // Set the result to the typeof result, this will handle most of the results
    let str = typeof (value);
    // Set the result to array if it is an array
    if (Array.isArray(value)) {
        str = 'array';
        // Set the result to null if it is null
    } else if (value === null) {
        str = 'null';
        // Set the result to date if it has a getMonth function
    } else if (typeof (value.getMonth) === 'function') {
        str = 'date';
    }
    // return the result
    return str;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
