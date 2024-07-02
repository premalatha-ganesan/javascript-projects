let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstLetter = function(str){
    return str.substring(0,1);

}
let firstInitials = names.map(firstLetter);

console.log(firstInitials);
