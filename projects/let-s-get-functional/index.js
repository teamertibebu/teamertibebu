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
    //Since this function is meant to return a number, create a count variable
    //to hold that numerical value.
    var count = 0;
    //Use filter to increase <count> by a value of 1 at every instance of a
    //male customer.
    _.filter(array, customerObjs => {
        //If the customer is male...
        if(customerObjs.gender === 'male') {
            //Increase count by 1.
            return count++;
        }
        
    });
    //Return the final count.
    return count;

};

var femaleCount = function(array) {
    
    //Since this function is meant to return a number, create a count variable
    //to hold the numerical value.
    var count = 0;
    
    //Use reduce to increase <count> by 1 at every instance of a female customer.
    _.reduce(array, (a, b) => {
        //If the current customer is a female, increase <count> by 1.
        if(b.gender === 'female') {
            count++
        };
        //After every iteration, whether or not gender is female, reassign <a>
        //to <b>. This will allow us to iterate through all the customers.
        a = b;
        
    }, '')
    
    //Return the final <count>
    return count;
    
}

var oldestCustomer = function(array) {
    //Find oldest customer's name
    //Create variable to house the current eldest customer. This variable will
    //constantly be updated with the eldest customer as filter does it's work.
    var oldestCustomer = 0;
    //Create a variable to house the oldest customer's name.
    var oldestCustomersName;
    //Use filter to find customer with highest age
    _.filter(array, customerObjs => {
        if(customerObjs.age > oldestCustomer) {
            //If the current iterations customer's age is greater than the last,
            //reassign <oldestCustomer> to the current customer's age.
            oldestCustomer = customerObjs.age;
            //Then reassign <oldestCustomersName> to the current customer's name.
            oldestCustomersName = customerObjs.name;
        }
    });
    
    //Return the oldest customer's name.
     return oldestCustomersName;
    
}

var youngestCustomer = function(array) {
    //Find the youngest customer's name.
    //Create a variable to hold the age of the current youngest customer.
    var youngestCustomer = array[0].age;
    //Create a variable to hold the name of the current youngest customer.
    var youngestCustomersName;
    //Use filter to filter through <array>
    _.filter(array, customerObjs => {
        if(customerObjs.age < youngestCustomer) {
            //If the current customer's age is less than <youngestCustomer>, 
            //reassing <youngestCustomer> to the current customer's age.
            youngestCustomer = customerObjs.age;
            //Also reassign <youngestCustomersName> to the current youngest
            //customer's name.
            youngestCustomersName = customerObjs.name;
        }
    });
    
    //Return <youngestCustomersName>
    return youngestCustomersName;

}

var averageBalance = function(array) {
 
    //Create a variable to hold the sum of all customer balanaces
    //Use reduce to sum all customer balances and assign the total to <totalBalance>
    var totalBalance = _.reduce(array, (a, b) => {
            //Turn balance amount from a string to a number.
            var number = Number(b.balance.replace(/[^0-9\.-]+/g,""));
            //Return the sum of all values.
            return a + number;
    }, 0 /*Set seed to 0*/);
    
    //Create variable to hold the average of <totalBalance>
    var averageBalance = totalBalance/array.length;
    
     return averageBalance;
 
};

var firstLetterCount = function(array, letter) {
    let count = 0;
    
    _.filter(array, function(customerObj) {
        
        if(customerObj.name[0].toUpperCase() == letter.toUpperCase()) {
            count++;
        }
    })
   return count; 
};

var friendFirstLetterCount = function(array, customer, letter) {
    // input: array, customer, letter
    // output: number
    let count = 0;
    _.filter(array, function(customerObj) {
        if (customerObj.name == customer){
            let friendsList = customerObj.friends;
            for(let i = 0; i < friendsList.length; i++) {
                if (friendsList[i].name[0].toUpperCase() === letter.toUpperCase()) {
                    count ++;
                }
            }
        }
    });
    return count;
};

var friendsCount = function(array, name) {
    //Find the customers' name that have <name> in their friends list.
    //Creat an array to hold all customers that have <name> in their friends list.
    var friendsOfName = [];
    //Use filter to iterate through all the friends lists of each customer to search
    //for the existence of <name>.
    _.filter(array, customerObjs => {
        //Use for loop to iterate through every <customerObjs> <friends> array.
        for(let i = 0; i < customerObjs.friends.length; i++) {
            if(customerObjs.friends[i].name === name) {
                friendsOfName.push(customerObjs.name)
            }
        }
    });

    return friendsOfName;
    
}

var topThreeTags = function(array) {

    //Find the three most common tags among all customers' associated tags.
    //Join all tag arrays into one array using reduce.
    let allTags = _.reduce(array, (acc, val) => {
         let allTags;
        //Reassign <allTags> to the concatenation of all customer <tags>
        allTags = acc.concat(val['tags'])
        return allTags;
    }, [])
    //Use the unique function to create another array w/ all unique tags, no duplicates.
    let uniqueTags = _.unique(allTags);
    //Use a nested for loop to compare both arrays and create a new array of subarrays
    //each containing a tag and its count.
    let tagsAndCounts = [];
    
    for(let i = 0; i < uniqueTags.length; i++) {
        //Create a count variable within the first for loop that holds the count
        //of the current tag but gets reset to zero after the the second for loop
        //complets and pushes the count to <tagsAndcounts>.
        let count = 0;
        for(let j = 0; j < allTags.length; j++) {
            //Use a conditional to increase count for every instance of a tag in
            //<allTags>.
            if(uniqueTags[i] === allTags[j]) {
                count++
            }
        }
        //Push a subarray of the tag and its count into <tagsAndCount>.
        tagsAndCounts.push([uniqueTags[i], count])
    }
    //Sort <tagsAndCounts>.
    tagsAndCounts.sort(function(a,b){return a[1] - b[1]});
    //Slice off the last three elements and assign them to a new array.
    let topThreeTagsWithCount = tagsAndCounts.slice((tagsAndCounts.length - 3));
    //Using _.map(), create a final array to house only the top three tags w/only their name, not count. 
    let topThreeTags = _.map(topThreeTagsWithCount, tags => tags[0]);
  
    //Finally, return <topThreeTags>
    return topThreeTags;
     
    
}

var genderCount = function(array) {
    //Create a summary of genders. Three properties of male: <number>, female: <number>, non-binary: <number>;
    //Create three variables: maleCount, femaleCount, nonBinaryCount to house their corresponding counts.
    var maleCount = 0;
    var femaleCount = 0;
    var nonBinaryCount = 0;
    //Use a for loop to iterate through <array> and, at every instance of a male, female, or non-binary,
    //add 1 to the corresponding count variable.
    _.filter(array, customerObjs => {
        if(customerObjs.gender === 'male') {
            maleCount++;
        } else if(customerObjs.gender === 'female') {
            femaleCount++;
        } else if(customerObjs.gender === 'non-binary') {
            nonBinaryCount++;
        }
    });
    
    //Create an object, in proper form, with individual properties for each gender, with their corresponding
    //counts as values.
    var genderCount = {
        male: maleCount,
        female: femaleCount,
        "non-binary": nonBinaryCount
    };
    
    return genderCount;
    
    
}

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
