//1
let arr = [ 69, 34, 74, 28, 34, 5, 98, 2, 37, 1 ]
let resmax = 0;
let resmin = arr[0];
// arr.forEach(element => {
//     result += element;
// });
// console.log(result);

//2
// let nums = arr.map(el => {
//     return el*2;
// });
// console.log(nums);

//3
arr.forEach(element => {
    resmax = element > resmax ? element: resmax;
    resmin = element < resmin ? element: resmin;
});
console.log(resmax);
console.log(resmin);