//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

//function productOfArray(arr) {
//    Number(arr)
//    return arr.reduce((total, newIndex) => total * newIndex, 1)
//}

function productOfArray(arr) {
    if(arr.length ===0) return 1;
    return arr[0]*productOfArray(arr.slice(1));
}


console.log(productOfArray([1,2,3]))// 6
// productOfArray([1,2,3,10]) // 60
