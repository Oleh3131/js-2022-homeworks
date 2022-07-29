//
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при х, що дорівнює 1, 0, -3


// let x = 31;
//
// if (x !== 0) {
//
//     console.log('True');
//
// } else {
//
//     console.log('False')
//
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число......................................................................................................
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('Enter your time');
//
// if (time > 0 && time <= 15) {
//
//     console.log("It's the first quarter");
//
// } else if (time >= 16 && time <= 30) {
//
//     console.log("It's the second quarter")
//
// }else if (time>=31 && time <=45) {
//
//     console.log("It's the third quarter")
//
// }else if (time >=46 && time<=59) {
//
//     console.log("It's the fourth quarter")
//
// } else {
//
//     console.log("Your number is out of range")
//
// }


// --------------------АБО--------------------------------------


// let time =  Math.round(Math.random() * 60);
//
// if (time > 0 && time <= 15) {
//
//     console.log("It's the first quarter");
//     console.log(time);
//
// } else if (time >= 16 && time <= 30) {
//
//     console.log("It's the second quarter");
//     console.log(time);
//
// }else if (time>=31 && time <=45) {
//
//     console.log("It's the third quarter");
//     console.log(time);
//
// }else if (time >=46 && time<=59) {
//
//     console.log("It's the fourth quarter");
//     console.log(time);
//
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).....................................................................


// let day = Math.round(Math.random()*( 31- 1) + 1);
//
// if (day >= 1 && day <= 10) {
//
//     console.log("The first decade of the month");
//     console.log(day);
//
// } else if (day >= 11 && day <= 20) {
//
//     console.log("The second decade of the month");
//     console.log(day);
//
// } else if (day >= 21 && day <= 31) {
//
//     console.log("The third decade of the month");
//     console.log(day);
//
// }


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).............................................................................................................................................................................................


// let day = +prompt('Please enter the day of the week')
//
// switch (day) {
//
//     case 1:
//
//         console.log("Read a book");
//         console.log("Go to work");
//         console.log("Send a parcel");
//         document.write("<h2>This is Monday</h2>")
//         break;
//
//     case 2:
//         console.log("Read a book");
//         console.log("Go to work");
//         console.log("Watch programming lessons");
//         console.log("Visit relatives");
//         document.write("<h2>This is Tuesday</h2>")
//         break;
//
//     case 3:
//         console.log("Go to work");
//         console.log("Do physical exercises");
//         console.log("Buy some products");
//         document.write("<h2>This is Wednesday</h2>")
//         break;
//
//     case 4:
//         console.log("Go to work")
//         console.log("View an English lesson")
//         document.write("<h2>This is Thursday</h2>")
//         break;
//
//     case 5:
//         console.log("Go to work")
//         console.log("Read a book")
//         console.log("Do physical exercises")
//         document.write("<h2>This is Friday</h2>")
//         break;
//
//     case 6:
//         console.log("Go fishing")
//         console.log("Meet friends")
//         document.write("<h2>This is Saturday</h2>")
//         break;
//
//     case 7:
//         console.log("Visit family")
//         console.log("Do housework")
//         document.write("<h2>This is Sunday</h2>")
//         break;
//
//     default:
//         document.write("<h2>Your data is incorrect</h2>")
// }




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа....................................................................................................................................




// let firstNumrer = +prompt('Please enter your first number');
//
// let secondNumber = +prompt("Please enter your second number");
//
//
// if (firstNumrer > secondNumber) {
//
//     console.log(firstNumrer);
//
// } else if (firstNumrer < secondNumber) {
//
//     console.log(secondNumber);
//
// } else if (firstNumrer === secondNumber) {
//
//     console.log("These numbers are equal")
//
// } else{
//
//     console.log("Your data is incorrect!")
//
// }




//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподыбне, тобто кастується до false)........................................................................................................................................................................................




// let x = undefined || "default";
//
// console.log(x);
//
//
// let b = prompt('Enter something') || "default";
//
// console.log(b)