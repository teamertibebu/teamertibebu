////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a start and end value and returns an array of
//the range of numbers between the two, including both start and end. Add a step
//value as an additional input to serve as the incrementer for the range. If the
//step input is not given, it should equal 1.
function range(start, end, step = 1) {
  
  //Create a variable to house the range of numbers.
  let rangeOfNums = [];
  //Use a conditional to check if the start and end inputs are the same value, if
  //so, return an empty array literal. Use Math.sign() to check if the step input is 
  //negative, if so, also return an empty array literal.
  if(start === end || Math.sign(step) === -1) {
      
      return [];
      
  } else if (start < end) {
    //If the start value is less than the end value, us a for loop to push all
    //values between the two inputs, including start and end, into the 
    //rangeOfNums array.
      for(let i = start; i <= end; i += step) {
        rangeOfNums.push(i);
      }
    
  } else if (start > end) {
    //If start is greater than end, use a for loop w/ a decrementer to push the
    //values between the two, including start & end, into the rangeOfNums array.
    //If start is greater than end and step is a negative value, since we're 
    //already using a decrementer, use Math.abs() to us the absolute value of step.
      for(let i = start; i >= end; i -= Math.abs(step)) {
        rangeOfNums.push(i);
      }
    
  }
  //Return the final rangeOfNums array.
  return rangeOfNums;

} //Ends range()


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes an array of numbers as it's input and returns
//the sum of those numbers.
function sum(arr) {
  //Create a variable to hold the sum of the numbers.
  let sum = 0;
  //Use a conditional to check if the input array is an empty array literal, if
  //so, return 0. Else, iterate through the array and sum all numbers.
  if(arr === []) {
    return 0;
  } else {
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  //Return the final sum value.
  return sum;
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes an array as it's input and returns a new array
//with it's elements reversed.
function reverseArray(array) {
    //Use a conditional to check if the input array is an empty array literal,
    //if so, return an empty array literal.
    if(array === []) {
      
        return [];
      
    } else {
        //Else, create a new variable that holds a copy of the input array reversed.
        let arr = array.slice().reverse();
        //Return the final array once reversed.
        return arr;
      
    }
    

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes an array of numbers as it's input and returns the
//modified array, in place.
function reverseArrayInPlace(array) {
    //Use a conditional to check if array is an empty array literal, if so, return
    //an empty array literal.
    if(array === []) {
      
        return [];
      
    } else {
        //Else, use a for loop, shift, and splice. In the first iteration, i = the last element.
        //When we shift the array, it shortens the length by one, then we splice the shifted
        //element at the i index, which at this point is the last index. The second value of
        //splice tells the program not to alter any value, but instead, add val to that position.
        //On the second iteration, the new first element will be shifted and spliced into the
        //second to last index, the third iteration at the third to last index, and so on and so forth.
        for(let i = array.length - 1; i > -1; i--) {
          //Create a variable to temporarily hold the value of the first element of the array.
          let val = array.shift();
          array.splice(i, 0, val)
          
        }
        //Return the final, modified array.
        return array;
      
    }

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes an array as it's input and return a list (A nested
//set of object with each object holding a reference to the next).
function arrayToList(array) {
  //Set the base case.
  if(array.length === 0) {

      return null;

  } else {
  //Else, use recursion to return the list.
      return {
        //The first value key should be set to the zeroeth index of array.
        //The rest key should be set to the recursive function call. Use slice 
        //to pass to the function a copy of array w/ the elements from the 1st index
        //on. Doing this will constantly pass in a new array with one lest element
        //in the front until the base case is reached, passing null and resolving
        //all the function calls.
        value: array[0],
        rest: arrayToList(array.slice(1))
      }

  }

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a list object as it's input and returns an array
//with all the value properties set as seperate elements.
  function listToArray(object) {
//Set the base case.
  if(object.rest === null) {
    return object.value
  } else {
    //Use .concat() to concat all object.value properties into an array. Set the
    //initial array to the first object value property, then concat it to the 
    //recursive function which sets object.rest as its input. The function will
    //continue to be called until the base case is reached, which is object.rest
    //=== null. At this point all the function calls will be resolved and values
    //returned.
    return [object.value].concat(listToArray(object.rest));
  }
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a value and a list as it's inputs and adds
//the value to the front of the list.
function prepend(value, list) {
    
  //Call the listToArray function with list as it's input in order to return
  //an array and assign it to a variable.
  let newList = listToArray(list);
  //Unshift value into the newList array.
  newList.unshift(value);
  //Return the new list by calling the arrayToList function with the newList
  //array as it's input. The list returned will now have value prepended to it.
  return arrayToList(newList);

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a number and a list as it's inputs and returns the
//element at that position in the list.
function nth(list, num) {
    //Use num as an index, but in order to do so, call the listToArray function
    //with list as it's input. This will assign an array of the values in list
    //to a new array.
    let arrayOfValues = listToArray(list);
    
    //Use a conditional to check if the num index in the arrayOfValues array is
    //undefined, if so, return undefined.
    if(arrayOfValues[num] === undefined) {
      return undefined
    } else {
    //Else use bracket notation to find the element at index num of the newly 
    //created arrayOfValues array.
    return arrayOfValues[num];
    }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes two values as it's inputs and returns true only
//if they are the same values or, if they are objects, have the same properties.
function deepEqual(a,b) {


  if(a === b) {
    return true;
  };
  
  //If either a or b are either null or not an object, return false.
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  
  //Create two variables that houses how man keys belong to the properties.
  let aKeys = 0;
  let bKeys = 0;

  //Iterate through the a array and increment aKeys by 1 at every iteration.
  for (var prop in a) {
    aKeys += 1;
  }
  
  //Iterate through the b array and increment bKeys by 1 at every iteration.
  for (var prop in b) {
    bKeys += 1;
    //At every iteration of object b, 
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      if (!(prop in a));
      if (!deepEqual(a[prop], b[prop]));
      return false;
    }
  }
  return aKeys == bKeys;
}

      
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
