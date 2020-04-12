//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    
    for(var key in object) {
        arr.push(object[key])
    }
    
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    var arr = [];
     
    for(var key in object) {
        
        arr.push(key);
        
    }
    
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    var arr = [];
    
    for(var key in object) {
        if(typeof object[key] === 'string') {
            arr.push(object[key]);
        }
    }
    
    return arr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if(Array.isArray(collection) === true) {
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split(''); //holds string as array
    
    // arr[0] = arr[0].toUpperCase();
    arr.splice(0, 1, arr[0].toUpperCase());
    
    return arr.join('');
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
 let arr = string.split(' '); //['string', 'string', 'string']
 
 //Iterate through arr to access each element
 for (let i = 0; i < arr.length; i++) {
     //Access each zeroeth index of each element
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
     
    //  let tring = arr[i].slice(2) // tring;
 }
//  console.log(arr)
return arr.join(' ')
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    var arr = object.name.split('');
    arr.splice(0, 1, arr[0].toUpperCase());
    
    var string = arr.join('');
    
    return 'Welcome ' + string + '!';
    // console.log('Welcome ' + object.name + '!');
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

        //return 'Name is a Species'
        var arr = object.name.split(''); //
        arr.splice(0, 1, arr[0].toUpperCase());
        
        var string = arr.join('');
        
        var arr1 = object.species.split('');
        arr1.splice(0, 1, arr1[0].toUpperCase());
    
        var string1 = arr1.join('');
        
        return string + ' is a ' + string1;
        

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        
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

function hasWord(string, word) {
    
    var arr = string.split(' '); 
    
    for(let i = 0; i < arr.length; i++) {
        if(word === arr[i]) {
            return true;
        } 
    }
    
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object   
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function isFriend(name, object) {
    
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

// isFriend('Teamer', {name: 'John'})

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var compare = []
  var newArray = []
  var nameArray = []; //Container for all names
  
    for(let i = 0; i < array.length; i++){
        nameArray.push(array[i].name);
        console.log(nameArray)
    }
    
    
    for(let i = 0; i < array.length; i++){
        
        if(name === array[i].name){
            
          for(let j = 0; j < array[i].friends.length; j++){
           compare.push(array[i].friends[j]);}
           compare.push(name);
           
        }
        
        
    } // console.log(compare)
    
    
    for(let i = 0; i < compare.length; i++){
        
      for(let j = 0; j < nameArray.length; j++){
          
        if(compare[i] === nameArray[j]){
           nameArray.splice(j, 1)
           
        }
      }
    }return nameArray
}
// var data = [
//         {name: "Jimmy", friends:["Sara", "Liza"]},
//         {name: "Bob", friends:[]},
//         {name: "Liza", friends: ["Jimmy"]},
//         {name: "Sara", friends: ["Jimmy"]}
//       ];
// nonFriends('Jimmy', data)
        
        



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
        
        object[key] = value;
        return object
        
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

        for(let i = 0; i < array.length; i++) {
            delete object[array[i]];
        }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
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