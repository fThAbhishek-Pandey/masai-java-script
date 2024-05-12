/*
Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
note : The lastIndexOf() method of Array instances returns the last index at which a given 
element can be found in the array, or -1 if it is not present. The array is searched 
backwards, starting at fromIndex. */
function lastidxof(arr,tar){
    let ans=-1;
    let i=0;
    arr.map (function(item){
        console.log(item,tar);

        if (item  === tar) ans =i;
        i++;
    });
    return ans;
}
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
 const lastidx = lastidxof(animals,'Dodo');
 console.log(lastidx);
 const lastidx1 = lastidxof(animals,'Tiger');
 console.log(lastidx1);