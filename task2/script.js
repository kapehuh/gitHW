// let a = 16;
// let b = 10;
// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// let e = prompt("Insert a number from 1 to 12:"); 
// switch(e){
//     case('1'):
//         console.log("january");
//         break;
//     case('2'):
//         console.log("febrary");
//         break;
//     case('3'):
//         console.log("march");
//         break;
//     case('4'):
//         console.log("april");
//         break;
//     case('5'):
//         console.log("may");
//         break;
//     case('6'):
//         console.log("june");
//         break;
//     case('7'):
//         console.log("juil");
//         break;
//     case('8'):
//         console.log("august");
//         break;
//     case('9'):
//         console.log("september");
//         break;
//     case('10'):
//         console.log("october");
//         break;
//     case('11'):
//         console.log("november");
//         break;
//     case('12'):
//         console.log("december");
//         break;
//     default:
//         console.log("Не верное число");
//         break;
// }

let circle = 12;
let square = 9;
let rad = Math.sqrt(circle/Math.PI)
let storona = Math.sqrt(square)
if(rad*2 <= square){
    console.log("Поместится");
} else {
    console.log("Не поместится");
}

