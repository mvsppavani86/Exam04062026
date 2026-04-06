/*7.  Remove Duplicates  [7 Marks] 

Write a function removeDuplicates(arr: number[]): number[] that returns the array without duplicate values. 

Example:  removeDuplicates([1, 2, 2, 3, 3])  →  [1, 2, 3] */

function removeDuplicates1(arr:number[]):number[]
{
    if(arr.length===0) 
        throw new Error("Array should have an element");//edge case for empty array

    let result:number[] = []

    for(let num of arr)
    {
        if(!result.includes(num)) /*checking if the number is already present in the result array or not,
        if not then only we will push it to the result array*/
        {
            result.push(num)
        }
    }

    return result
}

console.log(removeDuplicates1([1,2,2,3,4,4,5]))
console.log(removeDuplicates1([0,0,0,1]))
console.log(removeDuplicates1([1,1,1,1])) //array with all duplicate values
//negative test cases
//console.log(removeDuplicates1([])) //empty array


