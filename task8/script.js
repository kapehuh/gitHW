//1
// const inp = prompt("Введите дату: ДД.мм.гггг");
// const [day, month, year] = inp.split('.'); 
// const mydate = new Date(`${year}-${month}-${day}`);
// const dd = mydate.getDay();
// switch (dd) {
//     case 0:
//         console.log("Воскресенье");
//         break;
//     case 1:
//         console.log("Понедельник");
//         break;
//     case 2:
//         console.log("Вторник");
//         break;
//     case 3:
//         console.log("Среда");
//         break;
//     case 4:
//         console.log("Четверг");
//         break;
//     case 5:
//         console.log("Пятница");
//         break;
//     case 6:
//         console.log("Суббота");
//         break;
//     default:
//         break;
// }

//2
// const mydate = new Date()
// const mnts = mydate.getMinutes();
// const hrs = mydate.getHours();
// console.log(hrs * 60 + mnts);

//3
const firstDate = "15.03.1985";
const [da, ma, ya] = firstDate.split('.');
const da1 = new Date(`${ya}-${ma}-${da}`);
const secondDate = "07.12.1989";
const [db, mb, yb] = secondDate.split('.');
const da2 = new Date(`${yb}-${mb}-${db}`);
if (Number(da1)>Number(da2)) {
    console.log("Старше secondDate");
}else{
    console.log("Старше firstDate");
}
