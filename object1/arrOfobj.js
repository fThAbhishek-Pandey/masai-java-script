/*
### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```
- Create an object with the key `data` which is an array of objects with the format
 `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`
*/
function func(names , qty, price){
       let ans=[];
       for (let i=0;i<names.length;i++){
           let obj ={
             name: names[i],
             quantity : qty[i],
             price : price[i],
           }
           ans.push(obj);
       }
       return ans;
}
let name= ["Rice", "Dal", "Salt"];
let qty =[2, 3, 1];
let price =[60, 50, 20];
 let ans = func( name,qty, price);
 console.log(ans);

