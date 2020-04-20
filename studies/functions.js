/*
* FUNCTIONS:
*
* 0: Functions are a set of procedures which perform a specified task. 
*
* 1: There are two phases to a function, First: function declaration and 
* Second: the function call. The declaration phase is the creation phase. The
* call phase is the use phase. Both phases are essential, the declaring a function
* does NOT execute it.
*
* 2: To call a function is to execute the function.
*
* 3: Function declaration is interchangable w/ function definition and function statement.
*
* 4: A named function's syntax consists of the function keyword, function name, paranthesis 
* containing the paramaters (placeholders for arguments) seperated by commas, 
* the code block to be executed, and a return statement. 
* 
* RETURN STATEMENTS ARE REQUIRED IN ORDER TO GET A VALUE BACK FROM THE FUNCTION.
* Otherwise, undefined will be returned.
*
* 5: A functions parameters and arguments are NOT THE SAME THING. Simply put, a
* parameter is a placeholder for an argument, which is a real value to be put
* in place of the parameter at time of execution (call). Parameters are NOT
* REQUIRED in function declaration. If no parameter is supplied, paranthesis
* are still required.
*
* 6: Functions can be assigned to variables. This is especially convenient when
* we want to pass a function as an argument in another function. Example below.
*
* 7: Through CLOSURES, functions have access to variables from its parent and
* global scopes. If a function is nested in another function, the parent function's
* arguments and variables are inherited by the nested function. Similarly, the inner
* and outer functions both have access to variables declared in the global scope.
*
* 8: All variables declared inside of a function through the use of the var, let,
* and const keywords, are NOT accessible outside of the function. Each variable
* declaration is function scoped.
*
*/

// Function Declaration //

function greeting(name) {
    return 'Hello, ' + name;
} /*The function keyword declares the function, greeting is the function name, the parenthesis
holds the parameters (name), if any, and the curly braces houses the task to be performed
and the return keyword which will return a specified value.*/

// Function Call/Execution //

greeting('Teamer Tibebu.'); 
//Function call: executes the function. The ARGUMENT provided will go in place of the parameter, name.
//Returns the string 'Hello, Teamer Tibebu.'

// Function Expressions //

let newGreeting = function(name) {
    return 'Hello, ' + name;
}

newGreeting('Teamer Tibebu!');

//This anonymous function is assigned to the variable newGreeting.
//In order to call the function, you use the variable name with paranthesis housing the arguments.

//Scope//
/*
* Scope deteremines what variables are accessible, where. Global scope is anything
* outside of a function that is not contained within another function and local
* scopes are within a function body.
*/

let count = 0; //count is declared in the global scope. <func> has access to this variable.

function func() {
    let number = 9; //number is declared within the local scope of <func>. This
    //variable is only accessible within <func>.
    return count++; //Because <count> is accessible to <func>, it will increment by one at function call.
};

func();
console.log(count); //Will log 1 to the console.
console.log(number); //Will log a reference error because number is only accessible within <func>. It
//does not exist in the global scope.


// Closures //
/* 
* Below, through closures, the nested function <add> has access to the variable
* <count>, which was declared in the local scope of the function <counter>.
*/

function counter() {
    var count = 0; 
    
    function add() {
        return count++;
    };
    
    add()
    
    return count;
}
    
counter(); //Will return 1
