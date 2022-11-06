//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

/*function isPalindrome(str){
  return str.split('').every((char, i) => char === str[str.length -1 -i]);

}
console.log(isPalindrome('madam'))*/

const isPalindrome = (str) => {
    if (str.length === 0 || str.length ===1){
        return true
    } else if(str[0]===str.at(-1)){
        return isPalindrome(str.slice(1, (str.length -1)))
    }
    return false;
}

console.log(isPalindrome('Boudouin'));