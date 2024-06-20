//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let j = language.slice(0,1);
console.log(j);
let s = language.slice(4,5);
console.log(s);
let js = j + s;
console.log(js);
//2. Without using slice(), use method chaining to accomplish the same thing.

let result = String.fromCharCode(language.charCodeAt(0)) + String.fromCharCode(language.charCodeAt(4));

console.log(result); // Output: 'JS'


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for 'Javascript' is '${language.slice(0,1)+language.slice(4,5)}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log('Changing \'JS\' to lower case :' + language.slice(0,1).toLowerCase().concat(language.slice(4,5).toLowerCase()));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.replace('t','T');
notTitleCase = notTitleCase.replace('c','C');
console.log(notTitleCase);
