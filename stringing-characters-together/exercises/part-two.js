//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log("DNA without trimming : " + dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
//let trimmedDna = dna.trim();
console.log("Trimmed DNA :  " + dna.trim());

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
//dnaUpperCase = dna.toUpperCase;

console.log("DNA after changing to all Upper Case : " + dna.trim().toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log("Replacing the gene GCT with AGG : " + dnaTwo.replace("GCT","AGG"));

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

let catGene = dnaTwo.indexOf('CAT');
if (catGene != -1){
    console.log("CAT gene found");
}else {
    console.log("CAT gene not found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log("Sliced DNA : " + dnaTwo.slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."

console.log(`The DNA strand is  ${dnaTwo.length} characters long`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

let sliceCATdna = dnaTwo.indexOf('CAT');
console.log(sliceCATdna);
console.log("Sliced DNA : " + dnaTwo.slice(40,43));
console.log(`taco ${dnaTwo.slice(40,43).toLowerCase()}`);
