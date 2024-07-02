function removeI(arr) {
    if (!arr || arr.length === 0 ){
      return arr;
    } else if (arr.indexOf('i') != -1){
      arr.splice(arr.indexOf('i'),1);
    }
      return removeI(arr);
    
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));
