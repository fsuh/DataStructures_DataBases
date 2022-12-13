//Given a sorted array of integers, write a function called search,
//that accepts a value and returns the index where the value passed
//to the function is located. If the value is not found, return -1

// time complexity - log(n)

// pass two arguments in our function, one is the array and next the value
function search(array, val) {
// initialize min, max
let min = 0;
let max = array.length - 1;
// iterate while min <= max
while (min <=max) {
  // divide the current element into two halves
  let middle = Math.floor((min + max)/ 2);
  //et currentElement = array[middle]
  // if middle array element is less the value, we increment the min
  if (array[middle] < val) {
    min = middle + 1;
  }
  // if the middle array element is greater than the value, we decrease the middle
  else if (array[middle] > val) {
    max = middle - 1;
  }
  else {
    return middle;
  }
}
return -1; // or else return -1
}

console.log(search([1,2,3,4,5,6],4)) // 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1
