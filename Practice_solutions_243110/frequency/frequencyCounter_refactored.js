//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has
//it's corresponding value squared in the second array.
//The frequency of values must be the same.
// get rid of time complexity - O(n^2)
// time complexity - O(n)
function same(arr1, arr2) {
 //compare length arr1 and arr2
 if (arr1.length !== arr2.length) {
   return false;
 }

// let initialize two frequencyCounters - frequencyCounter1 and frequencyCounter2
let frequencyCounter1 = {}
let frequencyCounter2 = {}
// iterate over the values of array element 1
// iterate using key in frequencyCounter1
for (let val of arr1) {
  frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
}
// iterate over the values of array element 2
for (let val of arr2) {
  frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
}
// if not key squared in frequencyCounter2 then return false
for (let key in frequencyCounter1) {
  if (!(key **2 in frequencyCounter2)) {
    return false;
  }
  // if key squared in frequency counter two not equals to frequencyCounter1 key, return false
  // or inside the for iteration return true
  if (frequencyCounter2[key ** 2]!==frequencyCounter1[key]) {
    return false;
  }
}
 return true;
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)
