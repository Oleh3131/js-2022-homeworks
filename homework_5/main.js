// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function theAreaOfTheRectangle(a,b) {
//
//     let S;
//     S = a * b;
//     return S;
//
// }
//
// let valueTheAreaOfTheRectangle = theAreaOfTheRectangle(15, 8);
// console.log(valueTheAreaOfTheRectangle);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaOfACircle(r) {
//
//     let S;
//     const pi = 3.14;
//     S = pi*Math.pow(r, 2);
//     return +Math.round(S);
// }
//
// let valueAreaOfACircle = areaOfACircle(8);
//
// console.log(valueAreaOfACircle);


// -----------------АБО--------------------------------------------------


// function areaOfACircle(r) {
//
//     let S;
//     const pi = 3.14;
//     S = pi*r ** 2;
//     return +S.toFixed(1);
//
// }
//
// let valueAreaOfACircle = areaOfACircle(8);
//
// console.log(valueAreaOfACircle);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaOfTheCylinder(r,h) {
//
//     let S;
//     const pi = 3.14;
//     S = 2 * pi * r * h;
//
//     return +S.toFixed(1);
//
// }
//
// let valueAreaOfTheCylinder = areaOfTheCylinder(8,20);
//
// console.log(valueAreaOfTheCylinder);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let friends = [
//     { name: 'John', age: 22,status:false },
//     { name: 'Peter', age: 23,status:true },
//     { name: 'Mark', age: 24,status:false },
//     { name: 'Maria', age: 22,status:true },
//     { name: 'Monica', age: 21,status:true },
//     { name: 'Martha', age: 19 ,status:false},
// ]

// function friendsArray(someArray) {
//
//     document.write(`<div>`)
//
//     for (let array of someArray) {
//
//         let objectToString =JSON.stringify(array)
//
//         document.write(`<ul><li>${objectToString}</li></ul>`)
//
//     }
//     document.write(`</div>`)
//
// }
//
// friendsArray(friends);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(someText) {
//
//     document.write(`<div><p>${someText}</p></div>`)
//
// }
//
// paragraph("Welcome to my resolves!!");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function creator(someText) {
//
//     document.write(`<ul>`)
//
//     document.write(`<li>${someText}</li><br>`)
//     document.write(`<li>${someText}</li><br>`)
//     document.write(`<li>${someText}</li><br>`)
//
//     document.write(`</ul>`)
// }
//
// creator("Welcome to my resolves!!");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function creator(someText,length) {
//
//     document.write(`<ul>`)
//
//     for (let i = 1; i < length; i++) {
//
//         document.write(`<li>${someText}</li><br>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// creator("Welcome to my resolves!!",4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayOfPrimitiveValues = ["html",123,true,NaN,"nodejs",666,false,54,"python",444,undefined,"css",false]
//
// function createList(someArray) {
//
//     document.write(`<ol>`)
//
//     for (let i = 0; i < someArray.length; i++) {
//
//         let element = someArray[i];
//
//         document.write(`<li>${element}</li>`)
//
//     }
//     document.write(`</ol>`)
// }
//
// createList(arrayOfPrimitiveValues);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let friends = [
//     {id: 1, name: 'John', age: 22, status: false},
//     {id: 2, name: 'Peter', age: 23, status: true},
//     {id: 3, name: 'Mark', age: 24, status: false},
//     {id: 4, name: 'Maria', age: 22, status: true},
//     {id: 5, name: 'Monica', age: 21, status: true},
//     {id: 6, name: 'Martha', age: 19, status: false},
// ]
//
// function outputOfObjects(someArray) {
//
//     document.write(`<div>`)
//
//     for (let friend of someArray) {
//
//         let object = JSON.stringify(friend);
//
//         document.write(`<div>${object}</div><br>`);
//
//     }
//
//     document.write(`</div>`);
//
//
// }
//
// outputOfObjects(friends);


// - створити функцію яка повертає найменьше число з масиву







// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13