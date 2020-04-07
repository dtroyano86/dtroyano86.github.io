/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* declaring a function called search, which take two parameters, an array and a name
* and searches whether an object with the given name property exists in in animals array.
* We use a for loop to check all the names in the animals array and see if any match the given argument for name.
* If so we return the object, if none match we return null
*/

function search(animals, name){
    for(let animal in animals){
        if(animals[animal].name === name){
           return animals[animal]; 
        }
    }
   return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
* Declare a function called replace which takes three parameters, an array, a name, and an animal object.
* It uses a for loop to check each animals name in the given array against the given name, and if it finds
* a match replaces it with the given replacement object.
* If it doesn't find a match, do nothing.
*/
function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*we created a function that takes two parameters as input, an array of animal objects and
* name. We ran a for loop that searched through the animals array to see if the given
* name matched any name in the animals object. If the name matches the name in any animal object
* that object is removed.
*/
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(i, 1);
        }
    }
}




//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
*   Declare a function that adds an animal object into an array of animals
*       also checks to make sure the given animal is a valid animal
*/
function add(animals, animal){
    // Check if the animal's name has a length greater than 0
    // Check if the animal's species has a length greater than 0
    if(animal.name.length > 0 && animal.species.length > 0){
        // Run a for loop over the animals array to
        // Check if the animal's name is unique
        let isDuplicate = false;
        for(let i = 0; i < animals.length; i++){
            if(animals[i].name === animal.name){
                isDuplicate = true;
            }
        }
        // If no duplicate is found add animal to animals array
        if(!isDuplicate){
            animals.push(animal);
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
