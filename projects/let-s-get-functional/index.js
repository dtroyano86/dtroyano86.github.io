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

var maleCount = function(array) {
    let filterOutput = _.filter(array, (customerObj) => {
        // Filter out all of the male customers
        return customerObj.gender === "male";
    });
    return filterOutput.length;
};

var femaleCount = array =>{
    //I: array of customer objs
    //O: number of female customers
    return _.reduce(array, (prev, curr) => {
        // When to increment our seed
        if(curr.gender === "female") prev ++;
        // When to not increment our seed
        return prev;
    }, 0);
};

//I: array of customer objects
//O: string of oldest customer's name
var oldestCustomer = function(list){
    let values = [];
    for (let i = 0; i < list.length; i++){
        values.push(list[i].age);
    }
    let objectIndex = values.indexOf(Math.max(...values));
    
    return list[objectIndex].name;
};

//I: array of customer objects
//O: string of youngest customer's name
var youngestCustomer = list => {
    let values = [];
    for (let i = 0; i < list.length; i++){
        values.push(list[i].age);
    }
    let objectIndex = values.indexOf(Math.min(...values));
    
    return list[objectIndex].name;
};

//I: array of customer objects
//O: average of all customer's balance
var averageBalance = customers => {
    return (_.reduce(customers, (prev, curr) => {
        return prev += parseFloat(curr.balance.slice(1).split(',').join(''));
    }, 0))/customers.length;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
