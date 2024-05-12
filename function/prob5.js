/*Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"] */
//  this method has bug
let str=["MA", "SA", "I", "SCH", "OOL"];
function toSmall( chari){
     return chari &= ' ';
}
function tosmallStr (str){
    let str1 ='';
    for (let i=0;i<str.length;i++){
        str1 += toSmall(str[i]);
    }
    return str1;
}
 for (let i=0;i<str.length;i++){
        str[i] = tosmallStr(str[i]);
 }
 console.log(str);
//   method two simple
 let arr2 =["MA", "SA", "I", "SCH", "OOL"];
 for (let i=0;i<arr2.length;i++){
    arr2[i] = arr2[i].toLowerCase();
 }
 console.log(arr2);
