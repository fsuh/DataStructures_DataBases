/*Given an array of integers from 30 to 100 (daily temperatures) return another array that, for each day in the input, tells you how many days you would have to wait until warmer weather. If no warmer climate is possible, then return 0 for that element*/

/*
For each element, we have to find the next greater element.

We will use a stack to implement this. Stack will contain elements waiting to find
their next greater element.

At each element, we check if stack has a smaller element. If so, current element is
the Next Greater Element for that number in stack. 

Hence, we record to result array the distance between current index and popped element's index.

We keep popping from stack until we encounter a number equal to greater than current number.

We will push index of elements into stack instead of elements themselves so that we can fill result array.
*/

var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 
               && temperatures[stack[stack.length-1]] < temperatures[i]) {
            let popped = stack.pop();
            res[popped] = i-popped;
        }
        stack.push(i);
    }
    return res;
};





console.log(dailyTemperatures([30, 28, 50, 40, 30])); // [2 (to 50), 1 (to 28), 0, 0, 0]
console.log(dailyTemperatures([73, 69, 72, 76, 73, 100])); // [3, 1, 1, 0, 1, 100]