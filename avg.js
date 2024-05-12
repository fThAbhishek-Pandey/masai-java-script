/*Problem 1: Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];*/

let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let ans = arr.filter(function(item ,index){
    if (index%2 === 0) return false;
    return true;
});
let sum1=0;
for(let i=0;i<ans.length;i++){
     sum1 += ans[i];
}
console.log(sum1);
//  methode two
let arr1 = arr;
 let sum2 = arr1.reduce(function(acc,item, i){
    if (i%2 !==0){
        acc += item;
        i++;
    }
       return acc;
},0)
console.log(sum2);