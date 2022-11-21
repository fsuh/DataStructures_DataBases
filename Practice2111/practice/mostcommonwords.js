/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

mostCommonWords("The map, maps keys to values; Keys can be anything.", 1); // ['keys']
mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago",2); // ['it', 'look']
mostCommonWords("a; a,b, a's c A!; b,B, c.", 4); // ['a', 'b', 'c', 's']


//PseudoCode
// 1. Split text into lowercased words and remove whitespace and punctuations
// 2. Count the frequency of words
// 3. Sort words by freqency and return top n words

//Hints: We can use regex and split on non-words \W+


function mostCommonWords(text, n=1){
    const words = text.toLowerCase().split(/\W+/);
    const entries = [] // array of [word, count]paris

    for (let i=0; i< words.length; i++){
        if(!words[i]) continue;
        let count = 1;
        for (let j =i + 1; j < words.lenght; j++){
            if(words[i]===words[j]){
                count++;
                words[j] = null; // removed letter once it is counted
            }
        }
        entries.push(words[i], count);
    }
    return entries
    .sort((a, b) => b[1] -a[1])
    .slice(0,n)
    .map(w) => w[0]
}