/*function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));*/

let rev = function(str){
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};
console.log(rev("LaunchCode"));

let f1 = function(str) {
  return str + str;
};

let f2 = f1;
console.log(f2("abcd"));
