// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-teamertibebu");

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

};

var femaleCount;

var oldestCustomer = function(array) {
    //Create oldest variable.
    let oldest = 0;
    let name = '';
    _.filter(array, function(customerObj) {
        
        //Loop through list of customer objects
        if(customerObj.age > oldest) {
            oldest = customerObj.age
            name = customerObj.name
        }
           
    })
 return name;   
}

var youngestCustomer = function(array) {
    // input: array
    // output: string
    //Create youngest variable.
    let youngest = array[0].age;
    let name = '';
        //Loop through list of customer objects   
        _.filter(array, function(customerObj) {
            if(customerObj.age < youngest) {
                youngest = customerObj.age;
                name = customerObj.name;
        }
            //Compare current age to highest age
    });
 return name;   
};

var averageBalance = function(array) {
    let average = 0;
    
    _.filter(array, function(customerObj) {
        
        average += Number(customerObj.balance)
        
    })
    
    return average/array.length
    
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
