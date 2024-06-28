let size;
// Make line function
function makeLine(size, symbol) {
    let line = '';
    for(let i=0; i<size;i++){
       line += String(symbol);
    }  
    return line;
}
//make square function
function makeSquare(size){
    let lines ='';
    for(let j= 0; j < size; j++){
       lines += makeLine(size, '#')+ '\n';
    }
    return lines;
}

//make Rectangle Function
function makeRectange(width, height){
    let grid ='';
    for(let w =0; w< height; w++){
        grid += makeLine(width, '#') + '\n';    
    }
    return grid;
}

// Make Downward Stairs Function
function makeDownwardStairsHeight(height){
    let stairs ='';
    for (i=1; i<= height; i++){
        stairs += makeLine(i, '#') + '\n';
    }
    return stairs;
}

//Make Space Line 
function makeSpaceLine(numSpaces, numChars, symbol){
    let spaceLine ='';
    let spaces = '';
    let chars = '';
    for(i=0;i<numSpaces;i++){
        spaces += " ";
    }
    for(j=0;j<numChars;j++){
        chars += String(symbol);
    }
    spaceLine = spaces + chars + spaces;
    return spaceLine;
}

//Make Isosceles Triangle
function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
      isoscelesTriangle += (makeSpaceLine(height - i - 1, 2*i + 1, '#') + '\n');
    }
    return isoscelesTriangle.slice(0, -1);
  }

//Make Reverse Isosceles Triangle
function makeRevIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = height-1; i >= 0; i--) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1, '#') + '\n');
    }
    return triangle.slice(0, -1);
  }

//Make diamond Function
function makeDiamond(height){  
let diamond ='';
makeIsoscelesTriangle(5);
makeRevIsoscelesTriangle(5);
diamond = makeIsoscelesTriangle(5) + "\n" + makeRevIsoscelesTriangle(5);
return diamond;

}

//code to call the Line function 
console.log('Make lines output: ')
console.log(makeLine(5, '#'));

//code to call the Square function
console.log("Make square output : ");
console.log(makeSquare(5));

//code to call the Rectangle function
console.log("Make rectangle output: ");
console.log(makeRectange(5,3));

//code to call the Downward Stairs
console.log("Downward Stairs output : ");
console.log(makeDownwardStairsHeight(5));

//code to call Space Line
console.log("Making space and hashes : ")
console.log(makeSpaceLine(3, 5, '#'));

//code to call the Isosceles Triangle function
console.log("Isosceles Triangle Output : ")
console.log(makeIsoscelesTriangle(5));

//code to call Reverse Isosceles Triangle Function
console.log("Reverse Isosceles Triangle Output : ")
console.log(makeRevIsoscelesTriangle(5));

//code to call the diamond function
console.log(`The final Diamond output : `);
console.log(makeDiamond(5));
     
