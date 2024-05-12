/*Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.
Input = [2, 3, 4, 6, 7]
Output = [32, 243, 1024, 7776, 16807] */
let arr = [2, 3, 4, 6, 7];
for(let i=0;i<arr.length;i++){
    arr[i] = arr[i]*arr[i]*arr[i]*arr[i]*arr[i];
}
console.log(arr);
//  method two 
let arr1 = [2, 3, 4, 6, 7];
 arr1 =arr1.map(function(item){
      return  item = item**5;
 });
 console.log(arr1);