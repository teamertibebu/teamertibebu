/*
* OPERATORS:
*
* 0: Operators take actions on values. They can either assign values, compare values, include 
* values in arithmetic operations, or resolve values to booleans.
*
* 1: Operators are classified by what they do and how many operands they require. Operands are
* the values that operators act on. The 'what they do' classifications are assignment, comparison,
* logical, and arithmetic operators. The 'how many operands they require' classifications are
* unary and ternary.
*
*/


// Assignment Operators //


let age = 9; //Assignment operator (=)

/*
* All examples below take the age value (9), act on it with the arithmetic operator and number supplied,
* and ASSIGN the new value to the age variable.
*/

age += 2; //Addition assignment (+=). Shorthand for age = age + 2. 

age -= 2; //Subtraction assignment (-=). Shorthand for age = age - 2.

age *= 2; //Multiplication assignment (*=). Shorthand for age = age * 2.

age /= 2; //Division assignment (/=). Shorthand for age = age / 2. 


// Arithmetic Operators //

/*
* Arithmetic operators take numerical values as their operands and return a value.
* The arithmetic operators are +, -, *, /, and %.
*/

let num = 1 + 1;  //Adds both operands to each other.
let num1 = 1 - 1; //Subtracts the right operand from the left.
let num2 = 1 * 1; //Multiplies both operands together.
let num3 = 1 / 1; //Divides the left operand by the right.
let num4 = 1 % 1; //Returns the remainder of left operand divided by the right.



// Comparison Operators //

/*
* Comparison operators compare two operands and evaluate to a boolean value, true or false.
* The comparison operators are >, <, >=, <=, ==, ===, !=, and !==.
*/

let a = 5 > 6; //False
let b = 5 < 6; //True
let c = 5 >= 5; //True
let d = 5 <= 9; //True
let e = 5 === '5'; //False. Strick equality tests for value and type.
let f = 5 == '5'; //True. Converts both operands to the same type then applies strict equality.
let g = 5 != '5'; //False. Similar to ==, type conversion is attempted first before testing for inequality.
let h = 5 !== '5'; //True. Type conversion is NOT done. Tests for value and type equality.



// Logical Operators //

/*
* Logical operators take two operands and converts them to a boolean value depending on their truthyness.
* The logical operators are &&, ||, !, !!.
*/

let aa = 5;
let bb = 9;
let cc;

console.log(aa > 9 && aa > 2 ); //Logs false because && requires BOTH comparisons to equate to true.
console.log(aa > 9 || aa > 2);  //Logs true because || requires only ONE comparisons to equate to true.
console.log(!aa); //Logs false because aa is initialized, therefore truthy.
console.log(!!cc); //!! coerces a value to a boolean. Logs false because cc is undefined, which is alwasy coerced to false.



// Unary, Binary, & Ternary Operators //

/*
* Unary operators work with only one operand, binary two, and ternary three.
*/

let aaa = 50;
let bbb = 55;

console.log(!aaa); //Unary operand (!). Logs false, the opposite of the values truthiness.
console.log(aaa < bbb); //Binary operand (<). Logs true because aaa is less than bbb.
console.log((aaa < bbb) ? console.log('true') : console.log('false'))
/*Ternary operator (?). The above works with three operands...the condition (aaa < bbb), 
what will execute if the condition is truthy (console.log('true'), and what will execute
if the condition is falsey (console.log('false').*/