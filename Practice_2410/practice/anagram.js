//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)


const validAnagram = (stringA, stringB) =>{
    return stringA.split('').sort().join('')===stringB.split('').sort().join('');
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram'))// true
console.log(validAnagram("rat","car")) // false) // false
