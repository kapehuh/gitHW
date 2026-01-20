let a = 16;
let b = 10;
console.log(`sum = ${a+b} / mult = ${a*b}`);

let c = "qwe";
let d = "asdf";
console.log(`len = ${c.length+d.length}`);

let e = prompt("Insert a three-digit number:");
let ostOtDelNaSto = Number(e) % 100;
let ostOtDelNaDesiat = Number(e) % 10;
let pervoe4islo = (e-ostOtDelNaSto) / 100;
let vtoroe4islo = (e - ostOtDelNaDesiat) % 100 / 10; 
console.log( `sum of these numbers = ${ pervoe4islo + vtoroe4islo + ostOtDelNaDesiat }` );asdasd