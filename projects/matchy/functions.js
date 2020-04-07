/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals /*array*/, name /*string*/) {
    /*Iterate through animals input array to search for the existence of
    the input name. If the name exists, return that animal's object.*/
    
    for(let i = 0; i < animals.length; i++) {
        if(name.toLowerCase() === animals[i].name.toLowerCase()) {
            return animals[i];
        }
    } //End of for loop.
    
    return null;
    
} //End of search()

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for(let i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    
    /*Iterate through the animals input array and check the name input against the 
    current iterations animal name, if it exists, remove it.*/
    for(let i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            return animals.splice(i, 1) //If true, removes at current index.;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add (animals, animal) {
    // let matchAny = false; ///Conatainer for truthyness of name === name.
    
    //Makes sure a name & species property exists, first.
    if(animal.name.length > 0 && animal.species.length > 0) {
        //If true, Loops through the the animals array to see if an animal w/
        //the input animal object's name already exists.
        for(let i = 0; i < animals.length; i++) {
            //Check existence.
            if(animal.name.toLowerCase() === animals[i].name.toLowerCase()) {
                //If we come across even one match in the name values, we should
                //automatically kick out of the loop by returning null.
            //   matchAny = true; 
               return null;
            } 
        }
        //If we dont come across any matches, we kick out the for loop and
        //and return the animal object input pushed into the animals array.
        return animals.push(animal);
        
    }
    
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
