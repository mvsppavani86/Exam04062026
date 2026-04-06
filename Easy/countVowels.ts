/* Count Vowels  [5 Marks] 

Write a function countVowels(str: string): number that counts vowels (a, e, i, o, u) in a string. 

Example:  countVowels("automation")  →  6 */

function countVowels(str: string): number {
   if(str.length === 0)
   {
    throw new Error("String is empty");
   }
   
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str= str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countVowels("automation")); // Output: 6
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("aeiou")); // Output: 5
console.log(countVowels("bcdfg")); // Output: 0
