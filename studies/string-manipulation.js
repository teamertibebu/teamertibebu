/*
* STRING MANIPULATION
*
* 0: Sometimes, when working with javascript, we'll want to manipulate strings. 
* In order to do so, we have two ways at our disposal, by the use of operators 
* and/or string methods.
*
* 1: In order to concatenate (join) two strings, we have at our disposal the 
* concatenation operator (+) and the addition assignment operator (+=)
*
* 2: Another method for string manipulation is by the use of STRING METHODS. This
* is allowed because Javascript treats strings as objects.
*/

//Concatenation with (+) and (+=) //

let firstName = 'Teamer';
let lastName = 'Tibebu';

let fullName = firstName + ' ' + lastName; //After concatenation, fullName becomes 'Teamer Tibebu'.

fullName += ' The Great';
//After the use of the addition assignment operator, fullName becomes 'Teamer Tibebu The Great'


//String manipulation through the use of STRING METHODS //

let school = 'Operation Spark';
let city = 'New Orleans';
let whiteSpace = '     Hello       ';

console.log(school.concat(city)); //Concatenates both strings. Logs Operation SparkNew Orleans

console.log(school.toUpperCase()); //Converts school into all uppercase letters. Log OPERATION SPARK

console.log(city.toLowerCase()); //Converts city into all lowercase letters. Logs new orleans

console.log(whiteSpace.trim()); //Removes all the white space from both sides of the string.

console.log(school.length); //Logs 15 because that is the 'length' of the string assigned to shcool.

console.log(school.split(' ')); //Will log an array w/ it's elements as every seperate word in school. [Operation, Spark]

console.log(school.replace('Spark', 'Scooby Doo')); //Will replace the first instance of 'Spark' with
//'Scooby Doo' and log 'Operation Scooby Doo' to the console.
