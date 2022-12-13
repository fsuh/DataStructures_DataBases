//Write a function called averagePair.
//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the average target.

//Your solution MUST have the following complexities:
//Time: O(n), Space O(1)

const averagePair = (arr, target) =>{
    let left = 1;
    let right = arr.length -1

    while(left <= right){
        let average = (arr[left]+ arr[right]) / 2
        if(average === target) {
            return true
        }
        else if (average > target){
            right--
        }
        else{
            left++
        }
    }
    return false
}

console.log(averagePair([1, 2, 3], 2.5) )//true
console.log(averagePair(34, 14) )//false
