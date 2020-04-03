/*
* STRING MANIPULATION
*
* 0. There are many different ways to manipulate strings. You can use operators to compare or
* concate strings. You can also call methods on the string to manipulate it, the most common
* probably being slice and split. But there are plenty more.
*
* 1. Comparison operators for strings compare their alphabetical order, the lower in alphabetical
* order will be smaller than the one later in the order.
*
* 2. The + operator will concate two strings together.
*
* 3. The slice method will return a section of a string given a starting index and continue until
* the end of the string or an optional end index.
*
* 4. The split method will return an array of strings from the given string cut up at instances
* of the provided string, up to an limited number of times optionally. The join method on an 
* array is reverse of this. Joining the elements of an array with a given string.
*
* 5. toLowerCase and toUpperCase return a string with the case of the entire string altered in
* the given way.
*
* 6. trim returns a string with all the whitespace at the beginning and end removed.
*/

// 1. Comparision Operators //
let a = 'aaa';
let b = 'aab';
// This will return false because a is lower(earlier) than b in alphabetical order
console.log(a > b); // prints => false

// 2. + operator returns a string that has concated the two strings //
let c = a + b;
console.log(c); //prints => aaaaab

// 3. slice will return a string starting at the given index and continuing to the end //
let str = 'Washburne';
console.log(str.slice(4));      // prints => burne
// or stopping at a given index //
console.log(str.slice(4, 6));   // prints => bu 

// 4. split will return an array cut up by the given string //
let sent = 'The quick brown fox jumps over the lazy dog';
console.log(sent.split(' '));
// prints => [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]
// You can also limit the number of times the cut will be made //
console.log(sent.split(' ', 3));
// prints => [ 'The', 'quick', 'brown' ]
// The join method on an array will reverse the split method on a string //
let arr = sent.split(' ');
console.log(arr.join(' ')); // prints => The quick brown fox jumps over the lazy dog

// 5. toLowerCase and toUpperCase return a string entirely in the given case //
console.log(str.toLowerCase);   // prints => washburne
console.log(str.toUpperCase);   // prints => WASHBURNE

// 6. trim returns a string with any whitespace removed from the beginning and end //
let test = '    Hello       ';
console.log(test.trim()); // prints => Hello