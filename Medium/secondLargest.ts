/*infinity is a special value in typescript that represents a value that is greater than any finite number.
 By initializing large and secondLarge to -Infinity, we ensure that any number in the array will be greater than 
  these initial values, allowing us to correctly identify the largest and second largest numbers 
s we iterate through the array. */

function secondLargest(arr: number[]): number {
    if (arr.length < 2) {
        throw new Error("Array must have at least 2 elements");
    }

    let large = -Infinity; // Initialize to the smallest possible number
    let secondLarge = -Infinity;

    for (const num of arr) {
        if (num > large) {
            secondLarge = large;
            large = num;
        } else if (num > secondLarge && num !== large) {
            secondLarge = num;
        }
    }

    if (secondLarge === -Infinity) {
        throw new Error("Array must have at least 2 distinct numbers");
    }

    return secondLarge;
}

// Test cases
console.log(secondLargest([1, 3, 8, 7, 123])); 
console.log(secondLargest([5, 5, 5, 10]));  
console.log(secondLargest([10, 9])); 
//console.log(secondLargest([1]));//error case - Array must have at least 2 elements
//console.log(secondLargest([2, 2, 2])); //error case - Array must have at least 2 distinct numbers
