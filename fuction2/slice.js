/*Write a custom function that has the same behavior of inbuilt Array Slice Function
link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 
 note :The slice() method of Array instances returns a shallow copy of a portion of an array into
 a new array object selected from start to end (end not included) where start and end 
 represent the index of items in that array. The original array will not be modified.*/
function slice (arr, start, end){
      let ans = [];
      for (let i=0;i<arr.length;i++){
        if (i>=start && i<end) ans.append(arr[i]);
      }
      return ans;
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));