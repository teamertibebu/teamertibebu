/*
* DATATYPES:
*
* 0: Datatypes are, simply, types of data/values. All datatypes are either 
* primitive or complex and have their own distinct qualities. 
*
* 1: Primitive data types hold only one value at a time and can never collect
* an aggregate of values. These datatypes are copy by value, which means that 
* a variable holds the actual value rather than a reference to the value. 
* Primitive data types are numbers, strings, booleans, null, undefined, and NaN.
*
* 2. Complex data types are complex because they can hold an aggregate of values,
* which make them indefinite in size. Because variables are limited in size, 8 bytes
* max, variables can only hold a reference to the values of complex data types, which
* makes them copy by reference. Complex data types are arrays, objects, and functions.
*/

// Numbers //

/*
* Numbers are numeric data w/o single/double quotes. Numbers are the largest primitive
* datatype at 8 bytes, which is the space alloted to variables.
*/

let num = 9; 

// Strings //

/*
* Strings are character data within single/double quotes. Numerical data surrounded
* by single/double quotes are considered strings. Strings can be accessed
* by index, similar to an array, and have specific methods that apply to them.
*/

let str = 'string'; 

let str1 = '9';

console.log(str[0]); //Logs the zeroth index of str, which is the letter 's'.

console.log(str.length) //The method .length counts the number of characters within a string. Logs 6.

// Booleans //

/*
* Booleans are true or false values w/o single/double quotes.
*/

let bool = true;

let notBool = 'true' //This is considered a string, not a boolean.

// Null //

/*
* Null is a datatype that signifies no value, which was intentionally 'nullified' 
* by the programmer.
*/

let val = null; 

// Undefined //

/*
* Undefined signifies a variable that holds no value, but unlike Null which was
* nullified by the programmer, Undefined has not been initialized.
*/

let und;

console.log(und) //Logs undefined to the console.

// NaN //

/*
* NaN stands for Not-A-Number and is returned when a math function fails or
* simply to signify that the value is not a number. 
*/

let numm = 'string';

console.log(numm * 2) //Logs NaN because num is not a number and therefore cannot be multiplied by 2.



// Arrays //

/*
* Arrays are complex datatypes that can hold an infinite amount of values. These values
* can be either complex or primitive in type and can be mixed within one array. Each value, whether 
* primitive or complex, is positioned at a unique index which is used to access, add, delete
* and/or mutate the value utilizing bracket notation. An array is represented with the use 
* of square brackets [ ]. Arrays have specific methods that can be used on them.
*/

let arr = [1, true, 'string', [1, 2, 3], {name: 'Teamer Tibebu', age: 29}]
//This array holds a number, boolean, string, array, and object at seperate indexes.

arr.push(8); 
/*.push() is an example of a method used on arrays. This will 'push' a specified 
* value, the number 8 in this case, to the end of the array.
*/



// Objects //

/*
* Objects are a complex data type that can hold an infinite amount of values as key/value pairs.
* The key/value pairs should be associative, meaning the key should relate to the value held. Similar
* to arrays, these values can be either primitive or complex datatypes. An objects properties are
* accessed, added, deleted, and/or mutated by it's keys by using bracket or dot notation. An objects
* keys are automatically strings but do not need single/double quotes to signify this, unless the key
* requires a space (i.e. 'in school' instead of inSchool). An object is represented by the use of 
* curly brackets { }.
*/

let obj = {
    fullName: 'Teamer Tibebu',
    age: 29,
    inSchool: true,
    'favorite color': 'black'
}

console.log(obj.inSchool) //Logs the value of the key inSchool, true, to the console.

console.log(obj['favorite color']) //Logs black but with the use of bracket notation.

//Objects have methods which are functions that perform actions.

let firstName = 'Teamer';
let lastName = 'Tibebu';

let object = {
    fullName: function() {
        return `${firstName} ${lastName}.`;
    }   
};

object.fullName() //Returns 'Teamer Tibebu' by performing the method's action.



// Functions //

/*
* Functions are a set of procedures in javascript which perform a specified task. Functions
* can take in any number of parameters (placeholders), and when called,
* are supplied arguments, which are real values to be placed at the respective parameter. In
* order for a function to return a value, you must use a return statement or it will return
* undefined.
*/

function greeting() {
    return 'Hello World'
} /*The function keyword defines a function. greeting is the name of the function. The parenthesis
holds the parameters, if any, and the curly braces holds the task to be performed.*/

greeting(); //Function call: calls the function to perform the specified procedure.




// Infinity and -Infinity //

/*
* 0: In javascript, numbers have an upper limit (1.797693134862315E+308.) and a 
* lower limit (-1.797693134862316E+308). 
*
* 1: Infinity is a numeric value that represents positive infinity and is displayed
* when a that number exceeds the upper limit. -Infinity is a numeric value that 
* represents negative infinity and is displayed when a number exceeds the lower limit.
*
*/

console.log(1.797693134862316E+309); //Logs Infinity to the console.
console.log(-1.797693134862316E+309); //Logs -Infinity to the console.