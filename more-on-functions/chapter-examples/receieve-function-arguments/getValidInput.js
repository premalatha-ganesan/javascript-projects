const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }
    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
  let validateIfFirstLetterIsA = function(userInput) {
    if(userInput.substring(0,1).toLowerCase() == 'a') {
      return true;
    }
    return false;
  };

console.log(getValidInput('Enter a word that starts with a: ', validateIfFirstLetterIsA));

// TODO 2: write a validator 
// that ensures input is a vowel
let validateIfInputIsVowel = function(userInput) {
  let vowel = ["a", "e", "i", "o", "u"];
  let firstLetter = userInput.substring(0,1).toLowerCase();

  for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] == firstLetter) {
      return true;
    }
  }
  return false;
};

console.log(getValidInput("Enter a word that starts with a vowel : ", validateIfInputIsVowel));

// Be sure to test your code!
