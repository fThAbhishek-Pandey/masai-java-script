/*Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block */
 let str="Test";
 let ans ='';
 for (let i=0;i<str.length;i++){
    let psed= str[i].toLowerCase();
    if (str[i]=== psed)  ans += str[i].toUpperCase ();
    else  ans += psed;
 }
 console.log(ans);