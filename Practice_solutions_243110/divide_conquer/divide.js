//Given a sorted array of integers, write a function called search,
//that accepts a value and returns the index where the value passed
//to the function is located. If the value is not found, return -1
// time complexity - O(n)

// pass two arguments in our function, one is the array and next the value
function search(arr, val) {
// iterate over all the array elemntns
for(let i = 0; i< arr.length; i++) {
  // compare if value is inside the array elements
 if (arr[i] === val) {
   return i; // return index
 }
}
return -1; // or else return -1
}

console.log(search([1,2,3,4,5,6],4)) // 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1
