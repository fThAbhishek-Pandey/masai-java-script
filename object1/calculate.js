/*
Write a function called calculateSalesTotals()
which returns an array with new two new keys (sale and total). 
The key 'sale' equals the calculated sale price based on the original price and the 
discount. The key 'total' equals the computed total based on stock, the original price and
the discount. The default value would be 0.0.

SAMPLE INPUT :

var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
EXPECTED OUTPUT (array of objects):
[
  {
    item: "PS4 Pro",
    original: 399.99,
    sale: 399.99,
    stock: 3,
    total: 1199.97
  },
  {
    discount: 0.1,
    item: "Xbox One X",
    original: 499.99,
    sale: 449.991,
    stock: 1,
    total: 449.991
  },
  {
    item: "Nintendo Switch",
    original: 299.99,
    sale: 299.99,
    stock: 4,
    total: 1199.96
  },
  {
    discount: 0.8,
    item: "PS2 Console",
    original: 299.99,
    sale: 59.99799999999999,
    stock: 1,
    total: 59.99799999999999
  },
  {
    discount: 0.65,
    item: "Nintendo 64",
    original: 199.99,
    sale: 69.9965,
    stock: 2,
    total: 139.993
  }
] */
function culc(arr){
    for (let i=0;i<arr.length;i++){
        let diss=0;
        console.log(arr[i].discount);
        if ((arr[i].discount) != undefined){
             diss = arr[i].discount;
             arr[i].sale = arr[i].original*diss;
        }
        else   arr[i].sale = arr[i].original;
       
        arr[i].total = arr[i].sale* arr[i].stock;
    }
    return arr;
}
let arr = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  let ans = culc(arr);
  console.log(ans);