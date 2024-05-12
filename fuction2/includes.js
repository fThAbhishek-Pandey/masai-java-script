/*Write a custom function that has the same behavior of inbuilt Array Includes Function
link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes 
The includes() method of Array instances determines whether an array includes a certain value among its 
entries, returning true or false as appropriate.
*/
function myinclude(arr, tar){
    for( let i=0;i<arr.length;i++){
        if(arr[i]=== tar) return true;
    }
    return false;
}
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true

