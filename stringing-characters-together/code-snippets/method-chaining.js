//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
word = 'JavaScript';
console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
let language = "JavaScript";

console.log(language.replace('J', 'Q'));
console.log("After replacing J by Q " + language);
language.slice(0,5);
console.log(language);
language = language.slice(1,6);
console.log(language);

console.log('Launch\nCode');
let name = "Jack";
let currentAge = 9;

console.log(`Next year, ${name} will be ${currentAge + 1}.`);
