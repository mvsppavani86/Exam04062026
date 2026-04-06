/*.  Sum Using Rest Parameters  [7 Marks] 

Write a function sumAll(...nums: number[]): number that accepts any number of arguments and returns their sum. 

Example:  sumAll(1, 2, 3, 4)  →  10   |   sumAll(5, 10)  →  15 
*/

function sumAll(...nums: number[]): number /* ... rest parameter to accept any number of arguments of same type 
number in this case)*/
 {
    if (nums.length === 0)
         throw new Error("At least one number must be provided");
         

    let sum: number = 0;
    for (let num of nums)
    {        sum += num;
    }
    return sum;
}
//test cases
console.log(sumAll(1, 2, 3, 4)); 
console.log(sumAll(5, 10));
console.log(sumAll(-1,-2,-3,-4,5,10));
//negative test case- no arguments

//console.log(sumAll()); 
