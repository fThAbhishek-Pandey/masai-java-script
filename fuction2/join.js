/* Write a custom function that has the same behavior of inbuilt Array Join Function - 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/
join */
function joiny (arr, sep= ','){
       let str = '';
       for (let i=0;i<arr.length;i++){
            str+= arr[i].toString() +sep;
       } 
       str.substring(0, str.length-1);
       return str;
}
let arr =[1,2,3,4,5,6];
let ans = joiny(arr, '-');
console.log(ans);
let ans2 = joiny(arr, '');
console.log(ans2);