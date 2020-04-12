//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an object as the input and return an
//array of it's values.
function objectValues(object) {
    var arr = []; //Container to hold the objects values.
    
    //Using a for-in loop, iterate through the object's keys and push
    //the corresponding values into arr.
    for(var key in object) {
        arr.push(object[key])
    }
    
    //Return the populated array, arr.
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes in an object as the input and return it's
//keys as a string, each seperated by a space.
function keysToString(object) {
    
    var arr = []; //Container to house object's keys.
     
     //Use a for-in loop to iterate through the objects keys and
     //push each into the arr array.
    for(var key in object) {
        
        arr.push(key);
        
    }
    
    //Turn arr into a string w/ each element seperated by a space.
    //Return the newly formed string.
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes in an object as it's input and return
//all of it's string values as a string, each seperated by a space.
function valuesToString(object) {
    
    var arr = []; //Container to house the object's string values.
    
    //Use a for-in loop to iterate through object's values.
    for(var key in object) {
        //Use a conditional to check which values are typeof === 'string'.
        if(typeof object[key] === 'string') {
            //Push those string values into the arr array.
            arr.push(object[key]);
        }
    }
    
    //Turn arr into a string of it's elements each seperated by a space.
    //Return the newly formed string.
    return arr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes in a collection as it's input and return
//'array' or 'object' signifying which datatype it is.
function arrayOrObject(collection) {
    
    //Create a conditional.
    //Utilize the Array.isArray() method to test for array and return 'array' if truthy.
    //Test against all other cases.
    //Else return 'object'.
    if(Array.isArray(collection) === true) {
        return 'array';
    } else if(collection === null || collection === undefined || typeof collection === 'string' || 
             typeof collection === 'number' || typeof collection === 'boolean' || 
             typeof collection === undefined || typeof collection === 'function') {
        return 'Neither an array or object.'
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a string of one word as it's input and
//return it with its first letter capitalized.
function capitalizeWord(string) {
    //Split the string into an array with each of it's letters
    //at a seperate index.
    var arr = string.split(''); 
    
    //Remove the zeroeth element and replace it with the capitalized
    //version of itself.
    arr.splice(0, 1, arr[0].toUpperCase());
    
    //Join the array, arr, back into a string.
    //Return the string.
    return arr.join('');
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a string of multiple words as it's input
//and return the string with all the first letters for each word capitalized.
function capitalizeAllWords(string) {
    //Split the string into an array with each of it's words seperated
    //into individual indexes.
    let arr = string.split(' '); //['string', 'string', 'string']
    
    //Iterate through arr to access each element.
    for (let i = 0; i < arr.length; i++) {
         //Apply toUpperCase() to every element's first letter and concat it 
         //with the element sliced from it's first index. Reassign this value
         //to the element's index.
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        
    }
    //Turn arr into a string seperated by a space after each index.
    //Return the string.
    return arr.join(' ')
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an object with a name property as it's 
//input and returns a string of `Welcome ${object.name}`. 
function welcomeMessage(object) {
    //Create an array and assign it to the string at object.name split
    //into an array seperated at each letter.
    var arr = object.name.split('');
    //Splice the zeroeth index and replace it with the capitalized
    //version of itself. This is incase the name is not yet capitalized.
    arr.splice(0, 1, arr[0].toUpperCase());
    //Turn arr back into a string and assign it to a new variable.
    var string = arr.join('');
    //Return the string `Welcome ${string}!`
    return 'Welcome ' + string + '!';
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an object with a name and species property
//and return the string `${object.name} is ${object.species}`
function profileInfo(object) {

        //Split the name into an array seperated at each letter.
        var arr = object.name.split('');
        //Splice arr and replace the element at it's zeroeth index
        //with it's capitalized version.
        arr.splice(0, 1, arr[0].toUpperCase());
        //Turn arr back into a string and assign it to a new variable.
        var string = arr.join('');
        //Split the species into an array seperated at each letter.
        var arr1 = object.species.split('');
        //Splice arr1 and replace the element at it's zeroeth index
        //with it's capitalized version.
        arr1.splice(0, 1, arr1[0].toUpperCase());
        //Turn arr1 back into a string and assign it to a new variable.
        var string1 = arr1.join('');
        //Return a string of `${string} is a ${string1}`
        return string + ' is a ' + string1;
        

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an object as it's input. If the object
//has a noises array, return the array's elements as a string seperated
//by a space after each element. If the object does not have a noises 
//property or does but with a length of 0, return 'there are no noises'
function maybeNoises(object) {
        //Create a conditional that tests the above conditions and 
        //return the appropriate string.
        if(object.noises === undefined){
            return 'there are no noises'
        } else if(object.noises.length === 0) {
            return 'there are no noises'
        } else if(object.noises !== undefined) {
            return object.noises.join(' ');
        } 
        
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a string of words and a word as it's
//inputs and checks whether or not the string contains the word.
function hasWord(string, word) {
    //Split the string into an array of substrings split at every
    //space.
    var arr = string.split(' '); 
    //Iterate through arr to check if word === arr[i].
    //At the first instance word === arr[i], return true.
    for(let i = 0; i < arr.length; i++) {
        if(word === arr[i]) {
            return true;
        } 
    }
    //If word is not contained in the string of words, return false.
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a name and an object with a key/value pair
//of friends: [], and add the name to the array.
function addFriend (name, object) {
    //Push the name into the object.friends array.
    object.friends.push(name);
    //Return the object.
    return object   
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a name and an object as it's input and
//returns true if name is a friend of object, return false otherwise.
function isFriend(name, object) {
        //1.Create a conditional that checks if the object has
        //a friends property. If not, return false.
        //2.If object does have a friends property, which is an array,
        //iterate and check for name within the array. If so, return
        //true, otherwise, return false.
        if(object.friends === undefined) {
          return false;
        } else if (object.friends !== undefined) {
        

            for(let i = 0; i < object.friends.length; i++) {
            
            if(name.toLowerCase() === object.friends[i].toLowerCase()) {
                return true;
            }
        }
        
        return false;
        }

}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes a name and an array as it's inputs and 
//returns an array of all the names name is not friends with.
function nonFriends(name, array) {
  
  var compare = []; //Container for name's friends, including name.
  var nameArray = []; //Container for all names to compare against.
  
    //Iterate through the array of objects to access and push all
    //names into nameArray.
    for(let i = 0; i < array.length; i++){
        nameArray.push(array[i].name);
    }
    
    //Iterate through array to access and push all of the given name's
    //friends into compare.
    for(let i = 0; i < array.length; i++){
        //When we reach the given name's index, we should iterate through
        //it's friends property, which is an array, and push all elements
        //into compare, including the given name.
        if(name === array[i].name){
            
          for(let j = 0; j < array[i].friends.length; j++){
           compare.push(array[i].friends[j]);}
           compare.push(name);
           
        }
        
        
    }
    
    //At this point we have two arrays, the first with all names and the
    //second with the given name's friends, including itself.
    
    
    //Using a nested for loop, iterate through both arrays to compare if
    //any elements in the compare array match any elements in the nameArray
    //array. If so, this means the given name is friends with that person
    //so it should be removed from the nameArray. By the end of the iterations,
    //all friends will be removed, leaving only the non-friends.
    for(let i = 0; i < compare.length; i++){
        
      for(let j = 0; j < nameArray.length; j++){
          
        if(compare[i] === nameArray[j]){
           nameArray.splice(j, 1)
           
        }
      }
    }
    
    return nameArray
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an object, key, and value as it's inputs
//and updates the given key with the given value. If the object does
//not already contain the key, create a property with the given
//key/value pair.
function updateObject(object, key, value) {
        
        object[key] = value;
        return object
        
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Creates a function that takes an object and an array of strings as 
//it's inputs. If the object has keys matching the stringg in the
//array, the property should be removed.
function removeProperties(object, array) {
        //Iterate through the array, and by using every iterations
        //string and bracket notation, delete object[string] if it
        //exists. If it doesn't, nothing happens.
        for(let i = 0; i < array.length; i++) {
            delete object[array[i]];
        }
    //Return the object with its remaining properties.
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function that takes an array as it's input and returns an
//array with all duplicate entries removed.
function dedup(array){
        //Container for final array w/o duplicates.
        var uniqueArray = [];
        
        //Iterate through array and push every first instance of an
        //element into uniqueArray. This can be accomplished using
        //indexOf(), which will check uniqueArray for an instance of
        //the current iterations element, if it doesn't already contain
        //it, the element will be pushed into uniqueArray.
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        //Return uniqueArray which now contains no duplicates.
        return uniqueArray;
    }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}