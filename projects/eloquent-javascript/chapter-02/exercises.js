
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  // Run a for loop counting up the given number
  for (let i = 1; i <= number; i++) {
    // Define an empty string to hold the current level of the triangle
    let str = '';
    // Run a for loop counting up to the current number
    for (let ii = 1; ii <= i; ii++) {
      // Add a # to the current level string
      str += '#';
    }
    // Console log the current level
    console.log(str);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // Run a for loop counting from the given start to the given end
  for (let i = start; i <= end; i++) {
    // Define an empty string to hold our log statement
    let str = '';
    // If the current number is divisible by 3 add fizz to the string
    if (i % 3 === 0) str += 'fizz';
    // If the current number is divisible by 5 add buzz to the string
    if (i % 5 === 0) str += 'buzz';
    // If the string is still empty make it equal the current number
    if (str === '') str = i;
    // Log the string
    console.log(str);
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  // Define an empty string to hold the final output
  let final = '';
  // Run a for loop counting up for the rows
  for (let i = 1; i <= number; i++) {
    // Define an empty string for the current row
    let str = '';
    // Define an white space(ws) variable to hold wether we're logging a white space or a #
    let ws = true;
    // Alternate if we're starting with white space every row
    if (i % 2 === 0) ws = false;
    // Run a for loop counting up for each character in the row
    for (let ii = 1; ii <= number; ii++) {
      // If ws is true add a white space character to the current row
      if (ws) str += ' ';
      // If not add a #
      else str += '#';
      // Alternate the ws variable
      ws = !ws;
    }
    // Add a new line character to the end of the row
    str += '\n';
    // Add the finished row to the final string
    final += str;
  }
  // Log the final string
  console.log(final);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
