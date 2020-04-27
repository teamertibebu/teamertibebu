// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //Base cases:
  if(n < 0) {
    //If negative, return null.
    return null;
  } else if(n === 1 || n === 0) {
    //Base Case:
    return 1
  } else {
  //Recursive case. Will multiply base by the recursive call until base case is reached.
  return n * factorial(n - 1);
  }
    
  };

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //Base Case: return zero once array is sliced to 0.
  if(array.length === 0) {
    return 0;
  };
  //Recursive Case: Add every element by adding the zeroeth element with the 
  //recursive call sliced until base case is reached.
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

};

// 4. Check if a number is even.
var isEven = function(n) {
  //Reassign n to its absolute.
  n = Math.abs(n);
  //Base Cases: if Odd
  if(n === 1) {
    return false;
    //Base Case: if Even
  } else if(n === 0) {
    return true;
  };
  //Recursive Case: subtract 2 from <n> until a base case is reached.
  return isEven(n -= 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //Base Case:
  if(n === 0) {
    return 0;
  } else if(n < 0) {
    //Recursive Case: if negative. Add all the integers above the number, excluding
    //the number.
    return (n + 1) + sumBelow(++n);
    } else {
    //Recursive Case: if positive. Add all the integers below the number, excluding
    //the number.
    return (n - 1) + sumBelow(--n)
  }
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
//Base Case: if there is no number between <x> and <y>, return an empty array literal.
  if(x === y - 1){
    return [];
  }
  //Base Case: if there is no number between <x> and <y>, return an empty array literal.
  if(x === y + 1){
    return [];
  } //If the <x> and <y> are the same value, no range exists...return an empty array literal.
  if (x === y){
    return [];
  }
  //Recursive Case: when x > y, call the recursive call with <y> incremented until
  //base case is reached.
  if(x > y){
    return range(x, y + 1).concat(y + 1);
  }
  //Recursive Case: when x < y, call the recursive call with <y> decremented until
  //base case is reached.
  return range(x, y - 1).concat(y - 1);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //Base Case: when exp === 0, return 1 because the total will remain the same.
  if(exp === 0) {
    return 1;
  } 
  
  //Recursive Case: if exp > 0, return the multiplication of the base * the 
  //recursive call until the base case is reached.
  if(exp > 0){
    return base * exponent(base, exp - 1);
  }else{
    //Recursive Case: Else if exp is negative, do the inverse of above.
    return 1 / (base * exponent(base, -1 * exp - 1));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
function powerOfTwo(n) {
  //Base Case: if n === 1 or 2, return true.
  if(n === 1 || n === 2) {
    return true;
  }
  //Recursive Case: if n > 2, it will constantly be divided by two and supplanted
  //in the recursive call until the base case is reach, where 'true' will be
  //returned, or the following else statement, where 'false' will be returned.
  if(n > 2) {
    n = n/2;
    return powerOfTwo(n)
  } else {
    return false;
  }
}

// 9. Write a function that accepts a string and reverses it.
var reverse = function(string) {
      //Base Case: if string is empty, return an empty literal. When we're done 
      //slicing, we will reach this case.
      if(string === '') {
        return ''
      } else {
        //Recursive Case: once we get to the base case, '' will be added to the
        //current zeroeth index, which will be the last character in string. Then
        //as we go back up the call stack, the zeroeth element will constantly
        //change, going backwards.
        return reverse(string.slice(1)) + string[0]
      }
 
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //BaseCase: when string.length === 0, return true.
  if(string.length === 0){
    return true;
  }
  //Checks if the last charcter in string is === to an empty string with a space, 
  if(string[string.length -1] === " "){
    //then checks if the 2nd to last character is === to the first character in the string.
    if(string[string.length - 2].toLowerCase() === string[0].toLowerCase()){
      //and if that is true we are going to return a recurive call passing in the string without 
      //the first charcter in the stirng and without the last two charcters in the string  
      return palindrome(string.slice(1, string.length -2));
    }
  }
  //Checks to see if the first charchter in string is === to an empty string literal with a space, 
  if(string[0] === " "){
    //then checks if the 2nd charachter is === to the last character in the string,
    if(string[string.length - 1].toUpperCase() === string[1].toUpperCase()){
      //If true, return a recurive call passing in the string without the first two charcters in the stirng 
      //and without the last character in the string  
      return palindrome(string.slice(2, string.length -1));
    }
  }
  //If the first charachter !== to the last character, return false.
  if(string[0].toUpperCase() !== string[string.length -1].toUpperCase()){
    return false;
  }
  //Recursive Call: return a recursive call passing in the string without the first element and the last element.
  return palindrome(string.slice(1, string.length -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
  //Base Case: if y === 0, return 0.
  //If y < 0, check to see if x < 0, then make a recursive call passing in x and y incremented by 1 
  //and subtract by x but if x is not < 0 then we will make a recursive call passing in x and y 
  //incremented by 1 and add by x
    //Check to see if x < 0
      //Make a recursive call with <y + 1> and subtract by x.
    //But if x is not < 0, make a recursive call with <y + 1> and added by x.
  //Recursive Case: make recursive call with <y - 1> and add that to x. 
 
var multiply = function(x, y) {
  if(y ===  0){
    return 0;
  }
  if(y < 0){
    if(x < 0){
      return multiply(x, y + 1) - x;
    }
    return x + multiply(x, y + 1);
  }
  return x + multiply(x, y -1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //Base Case:
  if(str1 === '' && str2 === '') {
    return true;
  } 
  //Recursive Case: if both zeroeth indexes === eachother, call the recursive
  //function until we either reach the base case, where 'true' will be returned,
  //or the following else if statment, at which time 'false' is returned.
  if(str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1))
  } else if(str1[0] !== str2[0]) {
    return false;
  }
}

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //Base Case:
  if(str.length === 0) {
    return []
  } else {
    //Recursive Case: repeatedly concatenate the zeroeth element of <str> to the
    //new array.
    return [str[0]].concat(createArray(str.slice(1)))
  }
 
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //Base Case:
  if(array.length === 0) {
    return [];
  } else {
    //Recursive Case: repeatedly concatenate the last element of <array> to a new array.
    //Slice off of the back of <array> to constantly get a new 'last element'.
    return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //Create an empty array literal to house the elements.
  let array = []
  //Base Case:
  if(array.length === length) {
    return array;
  } else {
    //Recursive Case: concatenate value repeatedly until array.length reaches <length>.
    return [value].concat(buildList(value, length - 1));
  }
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //Create a count variable.
  let count = 0;
  //Base Case:
  if(array.length === 0) {
    return count;
  } else {
    //If array[0] === value, increment <count>.
    if(array[0] === value){
      count++;
    }
    //Recursive Case: count += recursive call.
    return count += countOccurrence(array.slice(1), value)
    
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //Base Case:
  if(array.length === 0) {
    return [];
  } else {
    //Recursive Case: return the return values of calling the callback function
    //on every element, concatenated.
    return [callback(array[0])].concat(rMap(array.slice(1), callback))
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //If n is a negative value, return null.
  if(n < 0) {
    return null;
  }
  //If n < 2, return n.
  if(n < 2) {
    return n;
  } else {
  //Recursive Case: return two seperate recursive calls. The first, w/ n-1 as the
  //param and the second w/ n-2. This will get you to the desired index.
  return nthFibo(n-1) + nthFibo(n-2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //Base Case:
  if(input.length === 0) {
    return [];
  } else {
    //Recursive Case: concatenate the recursive function to an array of the 
    //zeroeth element of <input>, uppercased.
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //Base Case:
  if(array.length === 0) {
    return [];
  } else {
    //Recursive Case: concat the the zeroeth elements first letter, uppercased,
    //to the rest of the element, to the recursive call.
    return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)))
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //Base Case:
  if(str.length === 0) {
    return obj;
  } 
  //Recursive Case: 
  //If <obj> has a property of the current letter, increment the value by 1.
  if(obj.hasOwnProperty(str[0])){
    obj[str[0]] += 1;
  } else {
    //Else, create the prop and assign it a value of 1.
    obj[str[0]] = 1;
  }
  //Call the recursive function.
  return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //Create a variable to house the non-duplicates.
  let vals = [list[0]]
  
  //Base Case:
  if(list.length === 1) {
    return vals;
  } 
  //Recursive Case: if the last element in <vals> === <list[1]>, call the 
  //recursive function w/o concatenating.
  if(vals[vals.length - 1] === list[1]) {
      return compress(list.slice(1))
  } else {
    //Else, concat the recursive function to <vals>
    return vals.concat(compress(list.slice(1)))
  }
};


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let vals = [array[0]]
  //Base Case:
  if(array.length === 1) {
    return vals;
  }

  //If the last element of <vals> !== to the first element of <array>, return vals.concat(minimizeZeroes(array.slice(1)))
  if(vals[vals.length-1] !== array[1]) {
    return vals.concat(minimizeZeroes(array.slice(1)))
  }

  //Else if they are equal...
  if(vals[vals.length-1] === array[1]) {
      //Are they both zeroes? If so, return minimizeZeroes(array.slice(1)) w/o concating.
      if(vals[vals.length-1] === 0 && array[1] === 0) {
        return minimizeZeroes(array.slice(1))
      } else {
      //If not, return vals.concat(minimizeZeroes(array.slice(1)))
        return vals.concat(minimizeZeroes(array.slice(1)))
      }
  } 
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //Base Case:
  if(array.length === 0) {
    return []
  }

  //If <array[0]> is negative, reassign it to positive.
  if(array[0] < 0) {
    array[0] = -array[0]
  }
  //If <array[1]> is positive, reassign it to negative.
  if(array[1] > 0) {
    array[1] = -array[1]
  }
  //Recursive Case: concatenate <array[0]>, <array[1]>, and the recursive function .slice(2)
  return [array[0], array[1]].concat(alternateSign(array.slice(2)))
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    //Create an object with num:value pair.
    var myObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };

    //Create variable <result> = ''.
    var result = "";
    
  //Base Case:
    if (str.length === 0) {
        return result;
    } else {
        //Create var to hold current character of str[0].
        var currentChar = str.charAt(0);
        //If the <currentChar> exists as a key in <myObj>,
        //concatenate the corresponding value to result.
        if(myObj[currentChar]) {
            result += myObj[currentChar]
        } else {
            //Else, concatenate <currentChar> to result.
            result += currentChar;
        }
        
    //Recursive Case: 
        return result + numToText(str.slice(1));
        }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
