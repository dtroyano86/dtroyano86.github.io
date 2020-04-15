/*
* CONTROL FLOW
*
* 0. Conditional statements are the way we are able to take control of the way our control
* flows. By posing questions that return a boolean response we can direct the way our program
* runs. These questions are run an if statement or a switch statement to determine what to do
* next.
*
* 1. if statements can be read as if this is true, than do everything inside the {}. An if 
* statement is the first check in a conditional chain. Every statement chained after has to
* be an else if statement or the final one can be an else statement. 
*
* 2. else if is a continuation of an if statement. If the previous condition is false than
* check this new condition and if it is true than do everthing inside this {}. Any number of
* if else statements can be chained together, however only the first one that is true will 
* execute. All the rest of them will be skipped.
*
* 3. else by itself is a final default statement for an if else statement. There can only be
* one else. And it will only execute if every condition before it is false.
*
* 4. Switch statements are very similar to an if else statement. At the start you provide an 
* expression and than you check that against the provided case statements. If they are true,
* than the code block will run until a break statement. Also they are always finished with a
* default condition that will only run if all the other conditions fail. 
*
* 5. Typically you want to use a switch statement when a variable can have different values 
* that you want to run different code blocks. Like in a state machine. However when to use
* a switch statement versus an if block really comes down to readability.
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
    // favoriteColor isn't yellow so this block doesn't run
    case 'yellow':
        console.log('Gross');
        break;
    // favoriteColor is blue so this case executes true and the block is run
    case 'blue':
        // prints => Good Choice
        console.log('Good choice');
        // Break stops us from continuing to run code
        break;
    // favoriteColor isn't red so this block doesn't run
    case 'red':
        console.log('Bad choice');
        break;
    // one of the case blocks was executed so the default statement doesn't run
    default:
        console.log('Indecisive huh?')
        break;
}

// 5. An example of when to use a switch statement is to check user permissions //
const currentUser = {
    permissions: 'notLoggedIn'
}

// Check the value stored to currentUser permissions
switch (currentUser.permissions) {
    case 'admin':
        //Give the user the ability to make changes to the data
        break;
    case 'loggedIn':
        //Give the user the ability to see the data
        break;
    case 'notLoggedIn':
        //Only display a log in page
        break;
    default:
        //Only display a log in page like the notLoggedIn value
        break;
}