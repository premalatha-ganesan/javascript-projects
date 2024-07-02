//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let anonFunction = function(myVar){
    if(typeof myVar === "number") {
        return 3* myVar;
    }
    else if( typeof myVar === "string"){
        return "ARRR!";
    }
    else{
        return myVar;
    }
};

console.log(anonFunction(3));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let mapExercise = arr.map(anonFunction);

console.log(mapExercise);


