//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

function isPalindrome(str) {
  //base case

  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  // compare string element of 0 with str.slice(-1)
  // recursion to return isPalindrome
  return false;
}

console.log(isPalindrome("awesome")); //false, isPalindrome('awesome')
console.log(isPalindrome("tacocat")); // true
