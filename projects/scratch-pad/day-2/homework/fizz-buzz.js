// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    var num = []; //Contains numbers 1-100
    
    for (let i = 1; i <= 100; i++) {
        num.push(i);
    };
    
    for (let i = 0; i < num.length; i++) {
    
       if (num[i] >= 1 && num[i] <= 100 && num[i] % 3 !== 0 && num[i] % 5 !== 0) {
           console.log(num[i]);
       } else if (num[i] % 3 === 0 && num[i] % 5 === 0) {
           console.log('FizzBuzz')
       } else if (num[i] % 3 === 0) {
           console.log('Fizz');
       } else if (num[i] % 5 === 0) {
           console.log('Buzz');
       } 

    }

    // YOUR CODE GOES ABOVE HERE //
}

console.log(fizzBuzz())



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}