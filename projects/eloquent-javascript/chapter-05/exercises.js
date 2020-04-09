// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  // Concats the current item with the previous one
  return arrays.reduce((a, b) => a.concat(b));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, condition, update, body) {
  // If the condition is currently true
  if (condition(value)) {
    // Do the body
    body(value);
    // Run the loop again with the updated value
    loop(update(value), condition, update, body);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // Run a for loop over the array
  for (let i = 0; i < array.length; i++) {
    // If a single one returns false, return false
    if (!test(array[i])) return false;
  }
  // Otherwise return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // Get the counts of each script type in the string.
  let scripts = countBy(text, char => {
    // Set the code into script
    let script = characterScript(char.codePointAt(0));
    // If there is a code return the direction otherwise none
    return script ? script.direction : 'none';
    // filter out the none values
  }).filter(({ name }) => name != 'none');
  // If there is more than one type of script compare them
  if (scripts.length > 1) {
    // Set the biggest to the first one
    let dominant = 0;
    // Run a for loop to compare the count on all scripts
    for (let i = 1; i < scripts.length; i++) {
      if (scripts[i].count > scripts[dominant].count) {
        dominant = i;
      }
    }
    // Return the biggest one's direction
    return scripts[dominant].name;
    // If there is only one type of script just return its direction
  } else {
    return scripts[0].name;
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
