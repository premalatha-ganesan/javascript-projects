// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(num,den){
    let answer;
    if(den !=0){
        return num/den;
    } else {
        throw Error("Attempted to divide by zero");
    }   
}

console.log(divide(4,2));
console.log(divide(4,0));
