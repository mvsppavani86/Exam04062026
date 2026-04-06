/*16.  Longest Word in a Sentence  [5 Marks] 

Write a function longestWord(sentence: string): string that returns the longest word in the given sentence. 

Example:  longestWord("I love TypeScript")  →  "TypeScript" */

function longestWords(sentence: string): string[] {
    if (sentence.length === 0) 
        return ["String is empty and no words to compare"];
    

    let words = sentence.split(" ");
    let maxLength = 0;
    let result: string[] = [];/*this array will store the longest words found in the sentence, 
    if there are multiple words with the same maximum length, they will all be added to this array and returned as the result.*/

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = [word];

        } else if (word.length === maxLength) {
            result.push(word);
        }
    }

    return result;
}
//test cases
console.log(longestWords("I love TypeScript"));
console.log(longestWords("Hello World!"));
//negative test cases
console.log(longestWords(""));
console.log(longestWords("a"));
console.log(longestWords("bb cc"));
