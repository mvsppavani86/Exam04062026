/*
4.  Largest Number in Array  [5 Marks] 

Write a function findLargest(nums: number[]): number that returns the largest number. 

Example:  findLargest([10, 5, 25])  →  25 
*/
 //exception handling
function findLargest(nums: number[]): number 
{
    if(nums.length === 0)
    {
        throw new Error("Array is empty");
    }
    
    let largest = nums[0];
    for(let n of nums)
    {
        if(n > largest)       
       {
            largest = n;
        }
    }
    return largest;
}
//test cases
console.log(findLargest([10, 5, 25]));
console.log(findLargest([-1, -5, -3]));
console.log(findLargest([0, 0, 0]));
console.log(findLargest([1, 2, 3, 4, 5]));
console.log(findLargest([5, 4, 3, 2, 1]));
console.log(findLargest([])); 