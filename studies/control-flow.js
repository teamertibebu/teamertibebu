/*
* CONTROL-FLOW:
*
* 0: Control flow is the order in which the computer executes code. Code is run
* from top to bottom, from the first line of code to the last, unless it comes
* across a conditional statement or loop.
*
* 1: Conditinal statements allow us to perform certain actions based on
* certain conditions.
*
* 2: In javascript we have these conditionals...if, else-if, else, and switch. If is
* used to test the truthyness of a condition, and if true, a specified action will
* be taken. Else-if allows us to test the truthyness of another condition if the first
* condition was false, and if it evaluates to true, a specified action will be taken.
* Else does not require a condition to be met. It serves as a default and takes a 
* specified action if all other if and else-if conditions are not met.
*
* 3: If, else-if, and else can be chained together. If is required but else-if and
* else are not, they are chained to an if statement if we want to test multiple conditions
* or set a default if the initial if condition is not met.
*
* 4: We can use switch statements, similarly, to control flow. Although both switch and
* if statements accomplish the same goal, switch statements can sometimes provide for
* cleaner code. The switch evaluates an expression once and compares the result to 
* different cases and executes a code block when a case is matched.
*/

// If Statement w/ else-if and else chain //

let age = 29;

if (age < 21) {
    console.log('Too young to drink alcohol. Do not sell.')
} else if (age > 21) {
    console.log('Old enough to drink. Enjoy.')
} else if (age === 21) {
    console.log('Just made the cut buddy!')
} else {
    console.log('Input is not recognized.')
};

/*The above if statement starts w/ the first condition, which is false, so the code block
does not run and moves on to the next condition. The if-else condition runs next, which is
true, so the code block DOES run and logs 'Old enough to drink. Enjoy.' If that condition
was not met, the program would have tested for the remaining else-if condition. If all
else-if conditions are false, the program would run the block of code associated with
the remaining else statement.*/



// Switch Statements //

/*
* 0: The expression within the paranthesis is executed and used to match to a case.
* If a case is matched, the accompanied block of code will be executed. If no cases
* match, the default case will be executed.
*
* 1: The break keyword is required after every case in order to break out of the 
* switch block once a case is matched. If the break keyword is omitted, the next
* case's block of code will execute whether or not it matches the expression.
*
* 2: The break keyword is not necessary after the default case.
*
* 3: The default case does not need to be last, but if it is not, a break keyword
* is necessary after it.
*
* 4: We can use the same code block for multiple cases.
*/

let weather = 'sunny';

switch(weather) {
        case 'rainy':
        console.log("It's rainy outside!");
        break;
        
        case 'cloudy':
        console.log("It's cloudy outside!");
        break;
        
        case 'sunny':
        case 'sunnyish':
        console.log("It's sunny outside.");
        break;
        
        default:
        console.log('No match.');
            
};

/*
* Switch statements use STRICT EQUALITY at all times. The below switch statement
* will log Invalid Input to the console because myAge is a STRING of 29 and there
* is NO TYPE CONVERSION w/ switch statements.
*/

let myAge = '29';

switch (myAge) {
    case 21:
    console.log('My age is: ' + myAge);
    break;
    
    case 29:
    console.log('My age is: ' + myAge)
    break;
    
    default:
    console.log('Invalid Input.')
}


