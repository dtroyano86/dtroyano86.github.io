////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  //Create and empty array to hold the result
  let arr = [];
  // Check if the given arguments will produce results
  if ((step > 0 && start < end) || (step < 0 && start > end)) {
    // Start a counter
    let curr = start;
    // Add the counter to the results array
    arr.push(curr);
    // As long as the counter doesn't equal the end argument continue
    while (curr != end) {
      // Increment the counter by the given step
      curr += step;
      // Add the counter to the array
      arr.push(curr);
    }
  }
  // Return the array
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  // Start the results at 0
  let result = 0;
  // For each number in the array
  for (let num of arr) {
    // Add it to the current result
    result += num;
  }
  // Return the result
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  // Define a new empty array
  let result = [];
  // Run a for loop backwards over the given array
  for (let i = arr.length - 1; i >= 0; i--) {
    // Push the current element onto the new array
    result.push(arr[i]);
  }
  // Return the new array
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  // Run a for loop over the length of half the array
  for (let i = 0; i < arr.length / 2; i++) {
    // Save the current spot as first
    let first = arr[i];
    // Work from the end of the array the same number and save as last
    let last = arr[arr.length - i - 1];
    // Swap those two's locations
    arr[i] = last;
    arr[arr.length - 1 - i] = first;
  }
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  // Define an empty list to hold the array
  let list = {};
  // Run a For loop over the array starting at the end
  for (let i = arr.length - 1; i >= 0; i--) {
    // If it's the last element make rest null
    if (i === arr.length - 1) {
      list = { value: arr[i], rest: null };
    } else {
      // Otherwise set the value and rest to the previous list
      list = { value: arr[i], rest: list };
    }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // Define an empty array to hold the list
  let arr = [];
  // Make a recursive function to read the list
  function recurse(list) {
    // Push the current value to the array
    arr.push(list.value);
    // If its the final node, stop checking
    if (list.rest === null) {
      return;
    } else {
      // Otherwise run it again with the rest
      recurse(list.rest)
    }
  }
  recurse(list);
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(elem, list) {
  // Return a list with the new element on the front as the value
  return { value: elem, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, id) {
  // Define a variable to hold the final value
  let final;
  // Define a recursive function to run over the list counting to find the id
  function recurse(list, counter) {
    // if the counter equals the id save the current value
    if (counter === id) {
      final = list.value;
      // if it's the final node return undefined
    } else if (list.rest === null) {
      final = undefined;
    } else {
      // Otherwise run it again with the rest and increment the counter
      recurse(list.rest, counter + 1);
    }
  }
  recurse(list, 0);
  return final;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(objA, objB) {
  // Check if the type of objA is an object and it isn't null
  if (typeof objA === 'object' && objA != null) {
    // Check if the type of objB is an object and it isn't null
    if (typeof objB === 'object' && objB != null) {
      // If they are strictly equal return true
      if (objA == objB) return true;
      // Check if they have the same number of keys
      if (Object.keys(objA).length === Object.keys(objB).length) {
        // Define a variable to check if the objects are empty, set it to true
        let checkForEmptyObjects = true;
        // Run For Loops over the two objects
        for (let key in objA) {
          for (let key2 in objB) {
            // If the current keys are equal
            if (key === key2) {
              // Run the function again with the values inside those keys
              return deepEqual(objA[key], objB[key2]);
              // If there were any keys set the empty check to false
            } else { checkForEmptyObjects = false; }
          }
        }
        // If the empty check is still true return true
        if (checkForEmptyObjects) return true;
      }
    }
  }
  // Otherwise check the two objects against each other
  return objA === objB;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
