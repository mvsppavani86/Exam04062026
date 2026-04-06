/*
14.  Flatten a Nested Array  [5 Marks] 

Write a function flattenArray(arr: any[]): number[] that flattens a one-level nested array. 

Example:  flattenArray([1, [2, 3], 4])  →  [1, 2, 3, 4] 
*/

/*check the item is an array or not using Array.isArray() method where Array is a global object 
        in JavaScript that provides methods for working with arrays, and isArray() is a method that checks 
        if a given value is an array. It returns true if the value is an array, and false otherwise.*/

        
function flattenArray(arr: any[]): number[] 
{
    let result: number[] = [];
    for (let item of arr) {
        if (Array.isArray(item)) 
            {
            result.push(...item); // Spread operator is used tp expands an array into individual elements
        } else {
            result.push(item);
        }
    }
    return result;
}
