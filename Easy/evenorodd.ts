/*Section B: *Check Even or Odd  [5 Marks] 

Write a function isEvenOrOdd(n: number): string that returns "Even" or "Odd". 

Example:  isEvenOrOdd(4)  →  "Even"   |   isEvenOrOdd(7)  →  "Odd" */

console.log("**********Section B: Check Even or Odd**********");
//type checking
function isEvenOrOdd(n: number): string
 {
	if (typeof n !== 'number' || isNaN(n)) 
		{
			throw new Error("Input must be a valid number");
		}
	
	return n % 2 === 0 ? "Even" : "Odd";

}
 
// Test cases
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7)); 
console.log(isEvenOrOdd(0)); 
console.log(isEvenOrOdd(-3)); 
console.log(isEvenOrOdd(-8)); 
console.log(isEvenOrOdd(1));
console.log(isEvenOrOdd(2.5));
console.log(isEvenOrOdd(NaN));
