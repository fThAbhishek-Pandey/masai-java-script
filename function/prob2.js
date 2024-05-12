/*Write code to find the absolute difference of two numbers

Sample Input-1 12,4
Sample Output-1 8
Sample Input-2 4,18
Sample Output-2 14
NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value */
function absdiff (num1 ,num2){
    let ans= num1-num2;
    if (ans<0) return num2-num1;
    return ans;
}
let num1= 7;
let num2 = 8;
let ans = absdiff(num1,num2);
console.log(ans);
