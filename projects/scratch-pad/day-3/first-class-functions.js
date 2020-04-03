// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Check if val is greater than base and return true/false, accordingly.
  let fn = function(val) {
         if(val > base){
             return true;
         } else if (val < base){
             return false;
         } else {
             return false;
         }
     }
     
     return fn;
    // YOUR CODE ABOVE HERE //
    
} //Curly brace to end createGreaterThanFilter()


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //Check to see if val is less than base and return true/false, accordingly.
    let fn = function (val) {
        if (val < base) {
            return true
        } else {
            return false
        }
    }
    
    return fn;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 //Input: single character string
 //Output: Function w/ returned boolean.
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //function should take in string and compare
    return function(string) {
        /*If/else checks if startsWith === the first letter of the input string
        and returns true/false, accordignly. Use .toLowerCase().*/
        if (startsWith.toLowerCase() === string.charAt(0).toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
 //Input: single character string
 //Output: Function w/ returned boolean.
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    /*Function should compare endsWith character with last letter in a given string
    by comparing both in lowercase form.*/
    
    return function(string) {
        if (endsWith.toLowerCase() === string.charAt(string.length - 1).toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 //Input: array of strings & function
 //Output: Array of strings modified
 
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    let modifiedStrings = []; //Modified array container.
    
    /*Iterate through the strings array and pass each into the 
    modify function then push modified strings into the empty array. */
    
    for (let i = 0; i < strings.length; i++) {
        // let newStr = modify(strings[i]);
        modifiedStrings.push(modify(strings[i]));
    }
    
    //Return array with the modified strings.
    return modifiedStrings;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    let bool; //Container for current status of bool.
    /*Iterate through strings array to plug each iteration into the test function.
    Loop will push current iteration's true/false value. If any entry is false, 
    loop will end and function will return false.*/
    for (let i = 0; i < strings.length; i++) {
        
        if(test(strings[i]) === true) {
            bool = true;
        } else {
            bool = false;
            return bool;
        }
        
    }
    
    return bool;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}