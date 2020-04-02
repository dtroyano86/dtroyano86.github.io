// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    /* Return an object that contains:  id set to the given id
                                        nameFirst set to given nameFirst
                                        nameLast set to given nameLast
    */
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
}


function makeContactList() {
    // Declare an empty array to hold the contacts
    var contacts = [];
    // Return an object full of methods
    return {
        // Set addContact to an anonymous function that pushs a given contact onto the contacts array
        addContact: (contact) => {
            contacts.push(contact);
        },
        // Set findContact to an anonymous function that takes a fullName
        findContact: (fullName) => {
            // Split the fullName at the ' ' and take the first half to make fName
            const fName = fullName.split(' ')[0];
            // Split the fullName at the ' ' and take the second half to make lName
            const lName = fullName.split(' ')[1];
            // Declare the found variable to be defined if a match is found but leave it uninitalized
            // So that it returns undefined if not found
            let found;
            // Run a for loop over the contacts array
            for (let key in contacts) {
                // If the current contact's first and last name match given ones
                if (contacts[key].nameFirst === fName &&
                    contacts[key].nameLast === lName) {
                    // Save the current contact to the found variable
                    found = contacts[key];
                }
            }
            // Return the matching contact or undefined if it wasn't found
            return found;
        },
        // Set removeContact to an anonymous function that takes a contact
        removeContact: (contact) => {
            // Run a for loop over the contacts array
            for (let key in contacts) {
                // If the current contact matches the given contact
                if (contacts[key] === contact) {
                    // Cut it out of the contacts array
                    contacts.splice(key, 1);
                }
            }
        },
        // Set printAllContactNames to an anonymous function that takes no parameters
        printAllContactNames: () => {
            // Declare an empty list to hold all the names
            let list = '';
            // Run a for loop over the contacts array
            for (let key in contacts) {
                // Concate each first and last name to the list with a newline break at the end
                list += `${contacts[key].nameFirst} ${contacts[key].nameLast}\n`;
            }
            // Return the list of names with the final newline break cut off the end
            return list.slice(0, list.length - 1);
        },
        // we implemented the length api for you //
        length: function () {
            return contacts.length;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
