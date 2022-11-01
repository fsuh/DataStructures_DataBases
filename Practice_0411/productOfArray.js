//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

function productOfArray(arr) {
    Number(arr)
    arr.reduce((total, newIndex) => total * newIndex, 1)

}


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
