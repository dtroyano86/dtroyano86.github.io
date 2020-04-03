/*
* CONTROL FLOW
*
* 0. Conditional statements are the way we are able to take control of the way our control
* flows. By posing questions that return a boolean response we can direct the way our program
* runs. These questions are run an if statement or a switch statement to determine what to do
* next.
*
* 1. if statements can be read as if this is true, than do everything inside the {}.
*
* 2. else if is a continuation of an if statement. If the previous condition is false than
* check this new condition and if it is true than do everthing inside this {}. In a list of
* sequential if else statements, only the first one that is true will execute.
*
* 3. else by itself is a final default statement for an if else statement. If every condition
* before it is false, than do everything in the final {}.
*
* 4. Switch statements are very similar to an if else statement. At the start you provide an 
* expression and than you check that against the provided case statements. If they are true,
* than the code block will run until a break statement. Also they are always finished with a
* default condition that will only run if all the other conditions fail.
*/

// 1. favoriteColor is blue so the code block will run //
let favoriteColor = 'blue';
if (favoriteColor === 'blue') {
    console.log('Good choice'); // prints => Good choice
}

// 2. favoriteColor is blue so it will skip the first code block and check the second //
// which is true so it will run that //
if (favoriteColor === 'red') {
    console.log('Bad choice');
} else if (favoriteColor === 'blue') {
    console.log('Good choice'); // prints => Good choice
}

// 3. favoriteColor isn't yellow or green so it will skip those and run the final else //
// statement. //
if (favoriteColor === 'yellow') {
    console.log('Gross');
} else if (favoriteColor === 'green') {
    console.log('Ewwwwww');
} else {
    console.log('At least it isn\'t yellow or green');
    // prints => At least it isn't yellow or green
}

// 4. When favoriteColor is passed through the switch statement it will print Good choice //
switch (favoriteColor) {
    case 'yellow':
        console.log('Gross');
        break;
    case 'blue':
        console.log('Good choice');
        break;
    case 'red':
        console.log('Bad choice');
        break;
    default:
        console.log('Indecisive huh?')
        break;
}