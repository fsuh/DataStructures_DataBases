//Given an array of integers, find the maximum sum of
//consecutive elements (subarray).

// const maxSubArray = (arrs) =>{
//     let maxSum = arrs[0], val = 0
//     arrs.forEach(arr=>{
//         maxSum = Math.max(maxSum, val += arr)
//         val = Math.max(val, 0)

//     })
//     console.log(maxSum)

// }


const maxSubArray = (arr) =>{
    let totalSum = arr[0];
    let sumMax = arr[0]

    for (let i = 1; i < arr.length; i++){
        totalSum = Math.max(totalSum + arr[i], arr[i]);
        sumMax = Math.max(totalSum, sumMax)
    }
    console.log(sumMax);
}




maxSubArray([1, -3, 10, -5]); // 10 (taking only 10)
maxSubArray([-3, 4,-1, 2, 1, -5]); // 6 (sum [4,-1, 2, 1])
maxSubArray([-2, 1, -3, 4, -1, 3, 1]); // 7 (sum [4,-1, 3, 1]) 
