/*Write a custom function that has the same behavior of inbuilt String Substring Function
link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring 
The substring() method of String values returns the part of this string from the start index up 
to and excluding the end index, or to the end of the string if no end index is supplied.
*/
function mysubstring( str, start,end){
    let ans ='';
    for (let i=0;i<str.length;i++){
        if (i>=start && i<end)ans += str[i];
    }
    return ans;
}
const str = 'Mozilla';
console.log(mysubstring(str,1, 3));
// Expected output: "oz"