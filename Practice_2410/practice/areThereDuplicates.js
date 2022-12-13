//Write a function called areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arugments passed in.
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//Restrictions: Time - O(n), Space - O(n)

const areThereDuplicates = (...args) =>{
//    const argFrequency = {};
//    for(let i = 0; i < args.length; i++){
//     argFrequency[args[i]] = (argFrequency[args[i]] || 0) + 1;
//    }
//    const argFrequencyVals = Object.values(argFrequency)
//    for (let i = 0; i<= argFrequencyVals.length; i++){
//     if(argFrequencyVals[i]>1){
//         return true;
//     }
//    }
//    return false;

return new Set(args).size !== args.length

}


console.log(areThereDuplicates(1, 2, 3) )// false
console.log(areThereDuplicates(1, 2, 2) )// true
