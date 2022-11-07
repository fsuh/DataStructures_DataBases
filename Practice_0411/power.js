//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.


function power(base, exponent) {
    if(exponent === 0) return base;
    return base * power(base, (exponent -1))

}



//function power(base, exponent){
//    let result = 1;
//    for(i=0; i < exponent; i++){
//        result = result*base
//    }
//    return result
//}

console.log (power(2, 0))
// power(2,0) // 1// power(2,2) // 4
