//Implement a function called countUniqueValues, 
//which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted.

// Time complexity - O(n)
// Space complexity - O (n)

const countUniqueValues = (arr) =>{
    //return new Set(arr).size

    if(arr.length === 0){
        return 0
    }

    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j]
        }
        
    }
    i++;
    return i

}

console.log(countUniqueValues([1,1,1,1,1,2]) )// 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))// 7
console.log(countUniqueValues([]) ) // 0
console.log(countUniqueValues([-2,-1,-1,0,1]) )// 4



const countUniqueValues2 = (arr2) =>{
    let uniqueArr = [];

    for (const val in arr2){
        let uniqueVal = arr2[val];
        !(uniqueArr.includes(uniqueVal))? uniqueArr.push(uniqueVal): '';
    }
    return uniqueArr.length

}

console.log(countUniqueValues2([1,1,1,1,1,2]) )// 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))// 7
console.log(countUniqueValues2([]) ) // 0
console.log(countUniqueValues2([-2,-1,-1,0,1]) )// 4