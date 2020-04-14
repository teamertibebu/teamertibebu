// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


//Create a function that takes an array with subarrays as it's input and return
//a 'flat' array (all the subarrays as one array).
function flatten(array) {
    
    //Using the reduce and concat methods, join all the subarrays into on array.
    let flattenedArray = array.reduce((a, b) => {
      return a.concat(b); //Reduce takes the first subarray element and concats
      //it to the second subarray element. Then it takes the resulting array and
      //continues to concat with the remaining subarrays.
    })
    
    return flattenedArray;

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


//Create a function that takes a value, test function, update function, and body
//function as it's inputs to imitate the functionality of a for loop.
function loop(value, test, update, body) {
  
    //The initilization is set to value, the test function serves as the stop
    //condition, the update function serves as the incrementor, and the body
    //function serves as the function to act on the value.
    for(let i = value; test(i); i = update(i)) {
      body(i);
    };

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


//Create a function that takes an array and a test function as it's parameters 
//and return true if EVERY element returns true when passed into the test function.
function every(array, test) {
  
  //Iterate through the array input and input every element into the test function
  //to check if every element returns true. At the first instance of a failed
  //test, return false. Else, return true.
  for(let i = 0; i < array.length; i++) {
    
    if(test(array[i]) === false) {
      return false;
    } 
    
  }
  
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


//Using the characterScript function with a code input that takes a character
//code as an argument, we can find it's corresponding script, if any.
function characterScript(code) {
        for (let script of SCRIPTS) {
          if (script.ranges.some(([from, to]) => {
            return code >= from && code < to; //The .some() function iterates over the 
              //ranges property, which is an array, of the object script of the SCRIPTS
              //array. If the character code is >= from && <= to, it exists and returns
              //the script object.
      })) {
            return script;
      }
      }
            return null; 
    };
    

//We can use the countBy function to count the characters that belong to each script.
function countBy(items, groupName) {
        let counts = [];
        for (let item of items) {
          let name = groupName(item);
          let known = counts.findIndex(c => c.name == name);
          if (known == -1) {
            counts.push({name, count: 1});
          } else {
            counts[known].count++;
          }
        }
        return counts;
      }
      

//
function dominantDirection(text) {
  
  

  //Using the characterScript and countBy functions, find the scripts being used 
  //and count the characters that belong to each script.

  
          let scripts = countBy(text, char => {
              let script = characterScript(char.codePointAt(0));
              
              //If script exists, return the script direction, else, return 'none'.
              if(script) {
                return script.direction
              } else {
                return 'none';
              }
          });
          
          //Filter the scripts and assign to a new variable all the elements that
          //are != 'none'.
          let newScripts = scripts.filter(element => element != 'none');
  
          //Use a conditional to check if scripts has 0 elements, if so, return
          //'no dominant direction found', else if scripts has 1 element, return
          //that element. 
          if(scripts.length === 0) {
              return 'no dominant direction found'
          } else if(scripts.length === 1) {
            return scripts[0].name;
          } else{
            //If the scripts array has more than one element, and the count of
            //the script types are equal to eachother, return 'no dominant direction
            //found', else reduce scripts and return the name of the script that 
            //is dominant.
            if(scripts.reduce((acc, cur) => acc.count === cur.count)) {
              return 'no dominant direction found';
              } else {
                return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name)
              }
            
          }

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
