/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create an empty object literal assigned to a variable with the name animal.
var animal = {
    
};

//Use dot notation to create a property with key of species and a desired value.
animal.species = 'Lion';
//Use bracket notation to create a property with key name and a desired name.
animal['name'] = 'Joe';
//Using either notation create a noises property assigned to a value of an empty array literal.
animal.noises = [];
//Log animal object to console.
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a noises variable assigned to an empty array literal.
var noises = [];
//Using bracket notation to give the noises array it's first element.
noises[0] = 'rawr';
//Use push to add another element to the end of the noises array.
noises.push('meow');
//Use unshift to add another element to the beginning of the noises array.
noises.unshift('heya');
//Add another element to the end of the noises array using bracket notation.
noises[noises.length] = 'simba';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Assign the noises array to the animal key, noises, using bracket notation.
animal['noises'] = noises;
//Add another element to the noises array assigned to the noises property of animal.
noises.push('hello');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * - To access properties on objects, you can use either dot
 *   or bracket notation. The proper syntax is object.keyName and object['keyName']
 *   for dot and bracket notation, respectively. You can also utilize the
 *   for-in loop to iterate through and get access to an object's properties
 *
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * - You can access elements on arrays by utilizing bracket notation
 *   with an elements index (location). Proper syntax would be array[index].
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Declare variable animals and set it equal to an empty array literal.
var animals = [];
//Push the animal we created to the animals array.
animals.push(animal);
console.log(animals);
//Create a duck object with specified properties.
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//Push the duck object into the animals array.
animals.push(duck);
console.log(animals);

//Create two more animal objects and add both to the animals array.
var tiger = {
    species: 'tiger',
    name: 'Truman', 
    noises: ['rawr', 'meow'],
};

var cow = {
    species: 'cow',
    name: 'Jesse',
    noises: ['moo', 'mooo']
};

animals.push(tiger, cow);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create an empty array literal to house each animal's friends.
var friends = []; //Arrays allow us to aggregate values as lists.

//Create a function that returns a random index. Use this random index to
//get a random animal from the input array and push it's name on to our
//friends array.
function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
    
    //Push a random animal's name, from our input array, into the friends array.
    friends.push(array[randomIndex].name);
};

//Using bracket notation, add the friends array to a friends property on
//one of the animals in the animals array.
animals[0].friends = friends;
console.log(friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}