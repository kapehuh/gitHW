// 1
const userInput = prompt("Введите текстовую строку:");
const dateRegex = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}$/;

function isDate(str) {
    return dateRegex.test(str);
}

if (isDate(userInput)) {
    console.log("Это дата");
} else {
    console.log("Это не дата");
}

// 2
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isEmail(str) {
    return emailRegex.test(str);
}

if (isEmail(userInput)) {
    console.log("Это адрес электронной почты");
} else {
    console.log("Это не адрес электронной почты");
}