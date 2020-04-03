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
 
 //INPUT: 

// YOUR CODE GOES BELOW HERE //

/*Factory function that takes in 3 params and returns an object w/ same params
as keys and the arguments as values. */
function makeContact(id, nameFirst, nameLast) {

        return {
            id: id,
            nameFirst: nameFirst,
            nameLast: nameLast
            
        };
} 


function makeContactList(contact) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //Stores contacts.
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        /*Function takes in a contact object and pushes it into the
        contacts array.*/
        addContact: function(contact) {
            contacts.push(contact);
        },
        
        /*Function takes in a full name as string then loops through the contacts 
        array to compare the concatenated first and last name from current iteration
        to the full name string and if both are the same, returns the contact object,
        or undefined otherwise.*/
        
        findContact: function(fullName) {
            for(let i = 0; i < contacts.length; i++) {
                if(fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        
        /*Function takes in contact object, and by looping through the contacts
        array to compare both .nameFirst properties in each to see if they are
        similar, deletes that index if both properties are similar. */
        
        removeContact: function(contact) {
            for (let i = 0; i < contacts.length; i++) {
                if(contacts[i].nameFirst === contact.nameFirst) {
                    contacts.splice(i, 1);
                }
            }
        }, //Ends removeContact function
        
        printAllContactNames: function() {
            
            let fullNames = []; //Container for created full names.
            
            /*iterate through contacts array to access and concat nameFirst/nameLast
            to create a fullName.*/
            for (let i = 0; i < contacts.length; i++) {
                fullNames.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast) 
            };
            
            
            let string = ''; //Container for fullNames as a string w/ line breaks.
            
            for (let i = 0; i < fullNames.length; i++) {
                //Iterate through fullNames array 
                if(i !== fullNames.length - 1) {
                    string += `${fullNames[i]}\n`;
                } else if (i === fullNames.length - 1) {
                    string += fullNames[i];
                }
            }
            
            return string;
            
        }
        
    } //Ends return statement
    
    
} //Ends makeContactList function




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
