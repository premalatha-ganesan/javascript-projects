function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here..

function newSortedArray(arr) {
  let newArray = [];

  for (let i = arr.length; i > 0; i--) {

    let temp = findMinValue(arr);
    newArray.push(temp);

    for (let j = 0; j < arr.length; j++) {
      if(temp === arr[j]) {
        arr.splice(j, 1);
        break;
      }
    }
  }

  return newArray;
}



/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

function recursiveSortedArray(arr) {
  let newArray = [];
  if(arr.length === 0) {
    return newArray;
  } 
  else {
    
    for (let j = 0; j < arr.length; j++) {
      let minValue = findMinValue(arr);
      newArray.push(minValue);
      if(minValue === arr[j]) {
        arr.splice(j, 1);
        break;
      }  
    }
    return newArray + recursiveSortedArray(arr);
  }

}


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(newSortedArray(nums1));
console.log(newSortedArray(nums2));
console.log(newSortedArray(nums3));

//console.log(recursiveSortedArray(nums1));