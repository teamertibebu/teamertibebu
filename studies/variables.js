/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. Declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. Initialization or Assignment //
myName = 'john';

/*
*At the initialization/assignment phase, the previously declared variable 
*is given a value of some type. In this case, a type of string ('john').
*/
console.log(myName); // prints => john

// 3. Re-assignment //
myName = 'bob'; //myName is being reassigned to a string of bob where it was previously john.

/*
*A variable that has previously been declared & initialized can later be reassigned.
*Through reassignement, a variables value can be changed to a value of any type.
*/
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. Hoisting //

console.log(age); //Logs undefined to the console.

var age = 29;

/*Although age isn't declared & assigned until after we've logged it, through hoisting, a 
* variable's name declaration (not it's value) is hoisted, or lifted, to the top of the program by the 
interpreter. Becuase of hoisting, the console will log undefined for age rather than a reference error.
*/

//5. Scope //

var hair = 'black'; //Declared in the global scope.

function hairColor () {
    console.log(hair); //Logs black because hair is globally scoped and accessible within the function.
    var eyes = 'red'; //Declared locally. Exists only within this function.
    console.log(eyes); //Logs red
}

hairColor(); 
console.log(hair); //Logs black because hair was declared in the global scope.
console.log(eyes) //Logs 'reference error' because eyes does not exist outside of the local scope of the function. 

/*Variables are function scoped. This means that variables will be stuck in the scope
*of a function if declared within. The same is NOT TRUE with if/else & for loop blocks.
*/


/***********************************************/


/*
* Let
*
* 0. Variables declared with the let keyword are block-scoped variables.
*
* 1. Prior to the creation of the let keyword, block scoping did not exist. Let
* allows for block scoping. This means that a variable declared with let inside of
* a block (i.e. if/else statement and/or for loop including functions), 
* will not exist outside of the block.
*
* 2. Variables declared with let will be stuck in ALL BLOCKS.
*
* 3. Declaration, assignment, and reassingment rules for var apply here.
*/

// Scope //

let nameFirst = 'Teamer'; 

function name() {
    console.log(nameFirst); //Logs Teamer because nameFirst is globally accessible.
    let age = 29; //This declaration only exists only within the local scope of this function.
    console.log(age); //Logs 29 within the local scope of the function.
}

name();
console.log(nameFirst); //Logs Teamer because let nameFirst = 'Teamer' is globally scoped.
console.log(age); //Logs a reference error because age only exists within the local scope of the function.


// Hoisting //

//Variables declared with let are not hoisted.

console.log(myAge) //Logs a reference error becuase, unlike var, let is not hoisted.

let myAge = 29;


/***********************************************/


/*
* Const (Constants)
*
* 0. Variables declared with the const keyword are block-scoped and will be
* stuck in all blocks, similarly to variables declared with the let keyword.
*
* 1. What makes constants special is that they are NOT reassignable or redeclarable.
* Their values remain CONSTANT once declared.
*
* 2. Also, unlike variables declared with either the var or let keywords, variables
* declared with const MUST BE simultaneously initialized.
*/

// Scope //

const firstName = 'Teamer'; 

function name() {
    console.log(firstName); //Logs Teamer because nameFirst is globally accessible.
    const age = 29; //This declaration only exists only within the local scope of this function.
    console.log(age); //Logs 29 within the local scope of the function.
}

name();
console.log(age); //Logs a reference error because age only exists within the local scope of the function.


// Hoisting //

//Variables declared with const are not hoisted.

console.log(eyeColor) //Logs a reference error becuase, unlike var, const is not hoisted.

const eyeColor = 'red';


// Reassignment/Redeclaration //
const greeting = 'Hello';
greeting = 'Bye'; //Logs a type error because constants cannot be reassigned.
const greeting = 'Bye' //Logs a syntax error becuase constants cannot be redeclared.
