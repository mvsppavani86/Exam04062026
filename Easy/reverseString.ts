/*Reverse a String  [5 Marks] 

Write a function reverseString(str: string): string that reverses the given string. 

Example:  reverseString("playwright")  →  "thgirwyalp" */

function reverseString(str: string): string 
{
    if (str.length === 0) 
        return "string is empty";
        
       let reversedStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;

}

// Test cases
console.log(reverseString("playwright")); 
console.log(reverseString("hello world"))
console.log(reverseString("")) 
console.log(reverseString("123 123 123")) 
console.log(reverseString("a")) 