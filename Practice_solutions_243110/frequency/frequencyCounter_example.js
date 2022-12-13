//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has
//it's corresponding value squared in the second array.
//The frequency of values must be the same.
function same(arr1, arr2) {
 //compare length arr1 and arr2
 if (arr1.length !== arr2.length) {
   return false;
 }
 // iterate over array elements and
 // check the index of array element squared in second array
 for (let i = 0; i < arr1.length; i++) {
 let correctIndex = arr2.indexOf(arr1[i]**2)
 // if correct index is -1, return false
  if (correctIndex === -1) {
    return false;
  }
 // maybe use splice to get the correct index by returning true
  arr2.splice(correctIndex, 1)
  }
  return true;
}

// time complexity - O(n^2)

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)
