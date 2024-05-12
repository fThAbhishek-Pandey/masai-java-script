/*Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included) */
function isodd (num){
     return num%2==1;
}
let num = 7;
let num1 = 8;
if (isodd(num)) console.log(`${num} is odd`);
else console.log(`${num} is even`);
if (isodd(num1)) console.log(`${num1} is odd`);
else console.log(`${num1} is even`);