/*
* LOOPS:
*
* 0: Loops are built-in features of Javascript used for iterating over data 
* and/or repeating an action a set number of times.
*
* 1: We have at our disposal a few different loop statements: for, for-in, and while,
* among a few others, that allow us to iterate over data or repeat an action a set
* number of times in different situations.
*
* 2: When iterating over a collection of data, arrays and objects, we use for and
* for-in loops, respectively.
*
*/



// For Loop //

/*
* 0: A for loop is a feature of Javascript that allows us to iterate over a collection
* of data, an array specifically, and/or repeat a specified action a set number
* of times by setting a beginning point (initialization), a stop condition, and 
* an incrementer/decrementer.
*
* 1: For every for loop, there is a block of code, in curly braces {}, that will
* be executed until it's stop condition is met. Once the stop condition is met,
* then, and only then, will the loop be broken.
*
* 2: The incrementer/decrementer allows us to continue the loop, either forward
* or backward, until we reach our stop condition. The incrementer/decrementer tells
* our loop to to increment/decrement by a set number, each iteration.
*
*/


let arr = ['black', 'red', 'yellow', 'white']; //The array to be iterated over.

// Iterating over an array forward //

/*
* This for loop initializes a variable, i, to 0, and logs all of arr's elements, 
* from the zeroeth index to the last index, at an increment of one, until the 
* stop condition, i < arr.length, is met.
*/

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

// Iterating over an array backward //

/*
* This for loop initializes a variable, i, to the last index of the array, arr, and
* logs all of its elements from end to beginning, at a decrement of one, until 
* the stop condition, i >= 0, is met.
*/

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
};

/*
* For loops can do more than iterate over arrays. Its main purpose is to allow
* us to repeat a specified action a set number of times.
*
* Below, we have assigned a value of 10 to the count variable. With our for loop,
* we are adding one to count until the stop condition, i < 20, is met. By the 
* for loops end, count will be equal to 30.
*/

let count = 10;

for (let i = 0; i < 20; i++) {
    count++;
}

console.log(count);



// For-In Loop //

/*
* 0: The for-in loop is given to us to iterate over objects and access their keys. By
* having access to an objects keys, we have the opportunity to list the objects
* properties, access/manipulate its values, and/or delete.
*
* 1: The structure of a for-in loop is different than that of a for loop. We have
* a variable declaration and object keyword that serves as a placeholder for the
* actual object we wish to access.
*
* 2: For-in syntax does not come with an incrementer/decrementer. The loop will 
* automatically loop through the object's keys one key at a time from first to last.
*/


// Iterating Through Objects //

let whoAmI = {
    firstName: 'Teamer',
    lastName: 'Tibebu',
    age: 29,
    favColor: 'Black',
    inSchool: true,
    respectingQuarantineRules: false
};

for (let key in whoAmI) {
    console.log(key) //Logs the object's, obj, keys one by one.
    
    console.log(whoAmI[key]); //Logs the object's, obj, values one by one.
    
    //The loop will log key then value with every iteration, in this case.
}


// While Loops //

/*
* 0: While loops differ syntactically from for loops but accomplish a similar
* goal, completing an action a set number of times.
*
* 1: The syntax of a while loop, similarly to a for loop, contains a stop condition which, 
* while true, continues iteration, an incrementer that continues the loop until
* the stop condition is met, and a code block to place the action to be repeated.
*
* 2: An incrementer is REQUIRED to avoid an INFINITE LOOP. If the incrementer is
* omitted, the variable will remain at its initialized value, never reaching the
* stop condition, and executing the block of code infinitly.
*/

let counter = 20;

while(counter <= 50) {
    counter += 5;
    console.log(counter);
}

/*
* The above while loop adds 5 to the counter variable then logs counter to the 
* console until the stop condition, counter <= 50, is met.
*/