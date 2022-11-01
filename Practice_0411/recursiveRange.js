//Write a func,on called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the func,on

function recursiveRange(x){
    if(x===0)return x;
    return x + recursiveRange(x-1);

  
}
recursiveRange (6)

// recursiveRange(6) // 21
// recursiveRange(10) // 55
