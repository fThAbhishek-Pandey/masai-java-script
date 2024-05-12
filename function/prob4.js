/*Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average */
function findSum (arr){
    let sum =0;
    for (let i=0;i<arr.length;i++){
         sum += arr[i];
    }
    return sum;
}
let arr = [4,5,6,7,8];
let sum = findSum(arr);
console.log(sum/arr.length);