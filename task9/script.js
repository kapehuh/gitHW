// 1
const a = 3;
const b = 4;
const c = 5;
if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    //console.log("Да")
}else{
    //console.log("Нет")
}

// 2
const r = +prompt("Введите число:");
console.log(`Длина окружности: ${2 * Math.PI * r} / Площадь круга: ${Math.PI * Math.pow(r, 2)}`);

