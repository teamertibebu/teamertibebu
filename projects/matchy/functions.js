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
    /*Iterate through the animals input array to check the existence of an animal with the 
    name input. If animal w/ that name exists, replace its entire object w/
    the replacement object input.*/
    
    //Step 1: Check existence of animal by the name.
    for(let i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            //Step 2: If true, replace entire object w/ the replacement object input.
            return animals[i] = replacement;
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

function add(animals, animal) {
    /*Check if the animal input object has, both, a name and species property 
    with length > 0.*/
    
        if(animal.name.length > 0 && animal.species.length > 0) {
            
            /*If true, check to see if the animal has a unique name by iterating
            through the animals array and checking animal.name against 
            the current iterations name property.*/
            
            let unique; //Hold current truthyness of name uniqueness.
            
            for(let i = 0; i < animals.length; i++) {
                
                
                if(animal.name.toLowerCase() === animals[i].name.toLowerCase()) {
                    /*If true, unique gets set to false and automatically ends 
                    the program by returning null, because we must have NO
                    MATCHES in order to add the animal.*/
                    unique = false;
                    return null;
                } else {
                    //Esle we continue to set unique to true until the loop finishes.
                    unique = true;
                }
                
            } //Ends for loop
            
            /*If no name matches were found, we return the animal object 
            pushed into the animals array.*/
            if(unique === true) {
                    return animals.push(animal)
                }
                
        } //Ends outermost if statement.
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
