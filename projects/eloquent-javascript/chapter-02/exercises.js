
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  
  let result = ''; //Empty container to hold current value desired.
  
 //Log triangle structure starting from a row of 1 through a row of a set number 
 //provided to us by the number input.
 
  for(let i = 1; i <= number; i++) {
      
   //A nested for loop allows us to iterate multiple times for every iteration of
   //the outer loop. In this case, for every iteration of i, j will be iterated
   //THAT amount of times because the nested for loops stop condition is set to
   //i's current value. So on i's first iteration, the program will log # once, on it's 
   //second, log ##, on its thired, log ###, and so on and so forth until we
   //reach our number input.
   
     for(let j = 1; j <= i; j++) {
       result += '#';
     };
     
     //Once the current iteration of i is complete and all iterations of j are also,
     //we are kicked out of the nested for loop, the program logs the current status
     //of result, and finally resets the value of result BACK to an empty string
     //so that we can assign yet another value to it. (i.e. if we logged #, next
     //we will log ##, then ###, then ####)
     console.log(result);
     result = '';
 };
 
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //Using a for loop allows us to iterate from a start input to an end. In doing
  //so, we are able, by us of a conditional statement, to test which values are
  //both evenly divisible by 3 and 5, which values are evenly divisible by 3,
  //which are evely divisible by 5, and lastly, which don't meet any of the above
  //conditions (all other numbers). We then log fizzbuzz, fizz, buzz, or the number
  //respectively.
  for(let i = start; i <= end; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
          console.log('fizzbuzz');
      } else if (i % 3 === 0) {
          console.log('fizz');
  } else if (i % 5 === 0) {
      console.log('buzz')
  } else {
      console.log(i);
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
    let finalString = ''; //Container to hold final string.


    for (let i = 0; i < number; i++) {
        //Every iteration of i will be an individual row.
        for(let j = 0; j < number; j++) {
            //The nested for loop will add either ' ' or '#' to the current row
            //if conditions are met.
            if((j + i) % 2 === 0) {
                finalString += ' '
            } else {
                finalString += '#'
            }
            
        }
            
            finalString += '\n'; //Once all characters are added to the current
            //row, we will jump out of the nested loop, add '\n' to jump to a new
            //line, and then continue the next iteration of i.
        
    }
    
    console.log(finalString)//Once all iterations of i are complete, we will jump
    //out of the loop and log the final result, finalString.
    
    
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
