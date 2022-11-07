
//function factorial(num) {
   // if(num === 0) return 1;
   // return num * factorial(num-1);
//}

function factorial(num){
    let total = 1; 
    for(let i=1; i<=num; i++){
       total = total * i;
    }
    return total
    
}
console.log(factorial(1))