// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (value) {
    // Set the final variable to a string of the typeof the given value
    let final = typeof (value);
    // If final is object do more checks otherwise return final
    if (final === 'object') {
        // If the given value is an array change final to array
        if (Array.isArray(value)) {
            final = 'array';
            // If the given value is null change final to null
        } else if (value === null) {
            final = 'null';
            // If the given value is a Function change final to function
        } else if (value instanceof Function) {
            final = 'function';
        }
        // If it was none of those it can stay object
    }
    // Return final
    return final;
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (arr, num) {
    // Check arr is an array
    if (Array.isArray(arr)) {
        // Check num is a number
        if (typeof num === 'number') {
            // If num is 1 return the first entry in arr
            if (num === 1) {
                return arr[0];
            }
            // Otherwise make an empty array
            let final = [];
            // Loop over arr num times and push the current value into the new array
            for (let i = 0; i < num; i++) {
                if (arr[i] !== undefined) {
                    final.push(arr[i]);
                }
            }
            // Return the new array
            return final;
        }
        // If num isn't a number return 1st element of arr
        return arr[0];
    }
    // If arr isn't an array return an empty array
    return [];
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (arr, num) {
    // Check arr is an array
    if (Array.isArray(arr)) {
        // Check num is a number
        if (typeof num === 'number') {
            // If num is 1 return the last entry in arr
            if (num === 1) {
                return arr[arr.length - 1];
            }
            // Otherwise make an empty array
            let final = [];
            // Loop over arr num times and unshift the current value into the new array
            for (let i = 1; i <= num; i++) {
                if (arr[arr.length - i] !== undefined) {
                    final.unshift(arr[arr.length - i]);
                }
            }
            // Return the new array
            return final;
        }
        // If num isn't a number return last element of arr
        return arr[arr.length - 1];
    }
    // If arr isn't an array return an empty array
    return [];
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (arr, value) {
    // Loop over arr
    for (let i = 0; i < arr.length; i++) {
        // If the current value equals the given value return the current index
        if (arr[i] === value) {
            return i;
            // If we get to the last element without returning, return -1
            // Because it wasn't found
        } else if (i === arr.length - 1) {
            return -1;
        }
    }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (arr, value) {
    // If arr contains value return true, otherwise return false
    return (arr.indexOf(value) !== -1) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (obj, func) {
    // Check if obj is an array
    if (Array.isArray(obj)) {
        // Loop over the array feeding each element into given function
        for (let i = 0; i < obj.length; i++) {
            func(obj[i], i, obj);
        }
        // If obj is an object
    } else {
        // Loop over the object feeding each key into the given function
        for (let key in obj) {
            func(obj[key], key, obj);
        }
    }

}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// Takes in an array and filters out non unique values
_.unique = function (arr) {
    // Initialize result array
    let result = [];
    // Loop through array checking for uniqueness
    for (let i = 0; i < arr.length; i++) {
        // Only include value if it is the first instance 
        if (i === _.indexOf(arr, arr[i])) {
            result.push(arr[i]);
        }
    }
    // Return result
    return result;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// Filters an array by a boolean returning function
_.filter = function (arr, func) {
    // Initialize the result
    let result = [];
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Only include results that the functions return a true(not truthy) value
        if (func(arr[i], i, arr) === true) {
            result.push(arr[i]);
        }
    }
    return result;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (arr, func) {
    // Initialize the result
    let result = [];
    // Initialize an array containing the true cases
    let filterArray = _.filter(arr, func);
    // Loop through the given array
    for (let i = 0; i < arr.length; i++) {
        // Only include results that the functions return a false(not falsy) value
        if (!_.contains(filterArray, arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//splits an array into two arrays based on whether they pass a test
_.partition = function (arr, func) {
    // filter only returns elements that pass true for the test in the form of an array
    return [
        arr.filter(function (x, i) { return func(x, i, arr); }),
        //^top array returns array with values that DO pass test v bottom array returns array with values that DONT pass
        arr.filter((x, i) => !func(x, i, arr))
    ];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// runs a function on every element of a collection and returns an array of the results
_.map = function (coll, func) {
    //initialize result array
    let result = [];
    //check if input collection is an array
    if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
            result.push(func(coll[i], i, coll));
        }
        //if the input collection is an object, pass, key, property and object to the function    
    } else {
        for (let key in coll) {
            result.push(func(coll[key], key, coll));
        }
    }
    return result;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// returns an array filled with the values of each elements <property>, prop
_.pluck = function (arr, prop) {
    // returns the results of the function that plucks out the <property>, prop
    return _.map(arr, (elem, id, coll) => elem[prop]);
}
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// checks to make sure every element in a given collection passes a true false test
_.every = function (coll, func) {
    //checks if test function is provided
    if (func instanceof Function) {
        //run the test on every element in the collection and returns false if one exception is found
        for (let key in coll) {
            if (!func(coll[key], key, coll)) {
                return false;
            }
        }
        // if test function is not provided, checks if no values are falsey, returns true if so    
    } else {
        for (let key in coll) {
            if (!coll[key]) {
                return false;
            }
        }
    }
    return true;
}
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (coll, func) {
    //checks if test function is provided
    if (func instanceof Function) {
        //run the test on every element in the collection and returns true if any are true
        for (let key in coll) {
            if (func(coll[key], key, coll)) {
                return true;
            }
        }
        // if test function is not provided, checks if any values are truey and returns true on first instance    
    } else {
        for (let key in coll) {
            if (coll[key]) {
                return true;
            }
        }
    }
    return false;
}



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// Applies a transformation to each element in an arry using the results of the previous elements transformation as an input
_.reduce = function (arr, func, seed) {
    // Initialize the first seed based off of input or the first element if no seed is given
    let prevResult = seed === undefined ? arr[0] : seed;
    // Loops through array starting on the first element if there is a seed or 2nd element if there is not a seed
    for (let i = (seed === undefined ? 1 : 0); i < arr.length; i++) {
        prevResult = func(prevResult, arr[i], i);
        // Once the last element is reached, return the previous result
        if (i === arr.length - 1) {
            return prevResult;
        }
    }
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// _.extend = function (...objs){
//     if (objs.length === 1){
//         return objs[0];
//     } else {
//         for (let key in objs[1]){
//             objs[0][key] = objs[1][key];
//         }
//         objs.splice(1,1);

//         if(objs.length === 1){ 
//           return objs[0]; 
//         }
//         return _.extend(...objs);
//     }
// }

// Takes any number of objects and assigns all of the properties to the first object giving priority to the latest
_.extend = function (...objs) {
    // Loop through the array of objects starting on the second object
    for (let i = 1; i < objs.length; i++) {
        // Check all properties of each object
        for (let key in objs[i]) {
            // Overwrite or add the property to the first object
            objs[0][key] = objs[i][key];
        }
    }
    return objs[0];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
