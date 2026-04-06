/*Section B: *Check Even or Odd  [5 Marks]

Write a function isEvenOrOdd(n: number): string that returns "Even" or "Odd".

Example:  isEvenOrOdd(4)  →  "Even"   |   isEvenOrOdd(7)  →  "Odd" */
console.log("**********Section B: Check Even or Odd**********");
//type checking
function isEvenOrOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}
// Test cases
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd(0));
console.log(isEvenOrOdd(-3));
console.log(isEvenOrOdd(-8));
console.log(isEvenOrOdd(1));
