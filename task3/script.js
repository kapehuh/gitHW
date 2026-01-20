// for (let index = 50; index <= 100; index++) {
//     console.log(index);
// }

// for (let index = 1; index <= 10; index++) {
//     console.log(`7 x ${index} = ${7*index+}`);  
// }

let e = +prompt("Enter a number: ");
let result = 0;
let count = 0;
for (let index = 1; index <= e; index+=2) {
    result += index;
    count++;
}
console.log(result/count);