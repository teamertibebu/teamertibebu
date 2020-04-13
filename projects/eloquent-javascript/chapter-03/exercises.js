////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes two parameters of numbers and returns the minimum.
function min(num1, num2) {
  //Use Math.min() to return the minimum of the two input values.
  return Math.min(num1, num2)

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that uses recursion to return true if the input number is
//even and false otherwise.
function isEven(num) {
  //Use Math.abs() to find the absolute value of num if it is negative.
  num = Math.abs(num);
  //Use a conditional to check if num === 0, if so, return true, if num === 1,
  //return false, else, for any other number, use recursion.
   if(num === 0) {
    return true;
  } else if(num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }

}

console.log(isEven(50));

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a string and a character value and count how many
//times the character input occurs in the string.
function countChars(string, char) {
  //Create a count variable to hold the count of the number of times the character
  //appears in the string input.
  let count = 0;
  //Use a for loop to iterate through the string input to find all occurances of
  //the character input in the string input and increment the count variable at
  //every occurence.
  for(let i = 0; i < string.length; i++) {
    if(char === string[i]) {
      count += 1;
    }
  }
  //Return the final count
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes a string as it's input and return a numeric value
//representing how many times the character B occurs in the string.
function countBs(string) {
  //Create a count variable to hold the count of the number of times the character
  //B occurs in the string input.
  let count = 0;
  //Use a for loop to iterate through the input string and increment the count
  //variable at every occurence of the character B.
  for(let i = 0; i < string.length; i++) {
    if(string[i] === 'B') {
      count += 1;
    }
  }
  //Return the final count.
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
