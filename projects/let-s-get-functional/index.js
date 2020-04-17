// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-dtroyano86');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//I: array of customer objects
//O: number of male customers
var maleCount = function (array) {
    let filterOutput = _.filter(array, (customerObj) => {
        // Filter out all of the male customers
        return customerObj.gender === "male";
    });
    return filterOutput.length;
};

//I: array of customer objs
//O: number of female customers
var femaleCount = array => {
    return _.reduce(array, (prev, curr) => {
        // When to increment our seed
        if (curr.gender === "female") prev++;
        // When to not increment our seed
        return prev;
    }, 0);
};

//I: array of customer objects
//O: string of oldest customer's name
var oldestCustomer = (customers) => {
    // Check the current cusomer's age against the oldest customer saving the older
    return (_.reduce(customers, (final, curr) => {
        // If the current one is older than store it and the name of the customer
        if (curr.age > final.age) {
            final.age = curr.age;
            final.name = curr.name;
        }
        return final;
    }, { name: "", age: -1 })).name;
};

//I: array of customer objects
//O: string of youngest customer's name
var youngestCustomer = (customers) => {
    // Check the current cusomer's age against the youngest customer saving the younger
    return (_.reduce(customers, (final, curr) => {
        // If the current one is younger than store it and the name of the customer
        if (curr.age < final.age) {
            final.age = curr.age;
            final.name = curr.name;
        }
        return final;
    }, { name: "", age: Infinity })).name;
};

//I: array of customer objects
//O: average of all customer's balance
var averageBalance = customers => {
    // Add up all the customer's balances and divide by the amount of customers
    return (_.reduce(customers, (prev, curr) => {
        // Turn the balance string into a floating point number
        return prev += parseFloat(curr.balance.slice(1).split(',').join(''));
    }, 0)) / customers.length;
};

//I: Array of customer objects, Letter to search for
//O: Number of names that begin with given letter
var firstLetterCount = (customers, letter) => {
    // Count the total number of customers that first names start with the given letter
    return _.reduce(customers, (prev, curr) => {
        // Check the letters as lowercase to guarantee case insensitivity and if they match increment total
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) prev++;
        return prev;
    }, 0);
};

//I: Array of customer objects, Customer to check, Letter that friends names start with
//O: Number of friends of given Customer that start with given letter
var friendFirstLetterCount = (customers, customer, letter) => {
    // Set the final count to 0
    let count = 0;
    // For each customer check if it's name matches the given name
    _.each(customers, (curr) => {
        if (curr.name === customer) {
            // Set count to the accumulated amount of friends that have a name that starts with the given letter
            count = _.reduce(curr.friends, (total, currFriend) => {
                // Increment total if the letters match, lowercased
                if (currFriend.name[0].toLowerCase() === letter.toLowerCase()) total++;
                return total;
            }, 0)
        }
    });
    return count;
};

//I: Array of Customer objects, friend's name to search for
//O: Array of customer names that are friends with the given friend
var friendsCount = (customers, friend) => {
    // Accumulate an array of customers who are friends with the given friend
    return _.reduce(customers, (list, curr) => {
        // Check if any of the friends for the current customer match the given friend
        if (_.some(curr.friends, (currFriend) => { return currFriend.name === friend })) {
            // If they do than add the current name to the list
            list.push(curr.name);
        }
        return list;
    }, []);
};

//I: Array of customer objects
//O: Array of 3 most common tags
var topThreeTags = (customers) => {
    // Pull all the tags out of the customers into a array
    let tagsArray = _.pluck(customers, "tags");
    // Flatten the array and make it unique
    const uniqueTags = _.unique(_.reduce(tagsArray, (list, tags) => {
        list.push(...tags);
        return list;
    }));
    // Initialize a blank array to hold all the counts
    let counts = [];
    // Loop through the unique tags 
    for (let i = 0; i < uniqueTags.length; i++) {
        // Initialize the current count
        let curr = 0;
        // Loop through the full tags array
        for (let ii = 0; ii < tagsArray.length; ii++) {
            // If the current entry contains any tags increment the count
            if (_.contains(tagsArray[ii], uniqueTags[i])) { curr++; }
        }
        // Add the current total to the counts array
        counts.push({ tag: uniqueTags[i], count: curr });
    }
    // Sort the counts array by the amount of occurences
    counts.sort(function (a, b) { return b.count - a.count });
    // Return the 3 highest
    return [counts[0].tag, counts[1].tag, counts[2].tag];
};

//I: Array of customer objects
//O: Object that is a summary of the number of genders {male:x, female:x, non-binary:x}
var genderCount = (customers) => {
    // Accumulate the total counts for the genders
    return _.reduce(customers, (final, curr) => {
        // set gender to the current gender
        let gender = curr.gender;
        // If this gender already exists increment it by one
        if (final.hasOwnProperty(gender)) {
            final[gender]++;
            // If it doesn't already exist add it to the object
        } else {
            final[gender] = 1;
        }
        return final;
    }, {})
};

//Just for fun a condensed version of genderCount
// var genderCount = (customer) => {
//     return _.reduce(customers, (final, curr) => {
//         final.hasOwnProperty(curr.gender) ? final[curr.gender]++ : final[curr.gender] = 1;
//         return final;
//     }, {});
// }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
