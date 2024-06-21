const input = require('readline-sync');
let str = "LaunchCode";
let slicedStr;
let remStr;
let modifiedStr;


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

firstThreeChar = str.slice(0,3);
console.log(firstThreeChar);
remainingChar = str.slice(3);
console.log(remainingChar);
modifiedStr = remainingChar + firstThreeChar;
console.log(modifiedStr);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string ${str} is modified into ${modifiedStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numToMove = input.question("Enter the number of letters that will be relocated :");
console.log("Letter to move : " + numToMove);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if ( numToMove < str.length){
    slicedStr = str.slice(0,numToMove);
    console.log(slicedStr);
    remStr = str.slice(numToMove);
    console.log(remStr);
    modifiedStr = remStr + slicedStr;
    console.log(modifiedStr);
    console.log(`The original string ${str} is modified into ${modifiedStr}`);
}else{
    console.log(`The entered number ${numToMove} is greater than the length of the given string ${str.length}. 
Defaulting to move 3 character`);
console.log(`The original string ${str} is modified into ${modifiedStr}`);
}

    




