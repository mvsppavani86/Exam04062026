import { error } from "node:console";

function factor(num:number):number[]
{
   let factors:number[]=[];
    if(num===0)
    throw new Error("Input should be non-zero")

   for(let i=1;i<=num;i++)
   {

    if(num%i===0)
        factors.push(i)
   }

   return factors

}
//test case
console.log(factor(5));
console.log(factor(10));
//console.log(factor(0));
