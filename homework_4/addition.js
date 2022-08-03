// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while.......................................................................

// let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// i = 0;
//
// while (i < someArray.length) {
//
//     let numberArray = someArray[i];
//
//     console.log(numberArray)
//
//     i++;
// }


//     2. перебрати його циклом for..........................................................................

// for (let i = 0; i < someArray.length; i += 1) {
//
//     let numberArray = someArray[i];
//
//     console.log(numberArray);
//
// }

// for (let myArray of someArray) {
//
//     console.log(myArray);
//
// }


//3. перебрати циклом while та вивести  числа тільки з непарним індексом............................................


// i = 0;
//
// while (i < someArray.length) {
//
//     let numberArray = someArray[i];
//
//     if (i % 2 === 1) {
//
//         console.log(numberArray);
//
//     } else {
//
//         console.log("--------------")
//
//     }
//
//     i = i + 1;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом............................................

// for (let i = 0; i < someArray.length; i++) {
//
//     let myNumber = someArray[i];
//
//     if (i % 2 === 1) {
//
//         console.log(myNumber);
//
//     } else {
//
//         console.log('---------------------')
//
//     }
//
// }


// 5. перебрати циклом while та вивести числа тільки парні значення.....................................................


// i = 0;
//
// while (i < someArray.length) {
//
//     let myNumber = someArray[i];
//
//     if (myNumber % 2===0) {
//
//         console.log(myNumber);
//
//     } else {
//
//         console.log('----------------------');
//
//     }
//
//     i++;
// }


// 6. перебрати циклом for та вивести числа тільки парні значення................................................

// for (let i = 0; i < someArray.length; i += 1) {
//
//     let myNumber = someArray[i];
//
//     if (myNumber % 2===0) {
//
//         console.log(myNumber);
//
//     } else {
//
//         console.log('----------------------');
//
//     }
// }


// for (const number of someArray) {
//
//     if (number % 2 === 0) {
//
//         console.log(number);
//
//     } else {
//
//         console.log('----------------------');
//
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"..............................................................

// for (let i=0;i<someArray.length; i++) {
//
//     let myNumber = someArray[i];
//
//     if (myNumber % 3 === 0) {
//
//         myNumber = 'okten';
//
//         console.log(myNumber);
//
//     } else {
//
//         console.log(myNumber)
//
//     }
//
// }


// 8. вивести масив в зворотньому порядку.............................................................................


// for (let i = someArray.length - 1; i >= 0; i--) {
//
//     const someArrayElement = someArray[i];
//
//     console.log(someArrayElement);
//
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)...............................................

// ------- перебрати його циклом while але в зворотньому циклі (с заду на перед)

// let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = someArray.length - 1;
//
// while (i >= 0) {
//
//     const someArrayElement = someArray[i];
//
//     console.log(someArrayElement);
//
//     i--;
// }


// ------- перебрати його циклом for але в зворотньому циклі (с заду на перед)


// for (let i = someArray.length - 1; i >= 0; i--) {
//
//     const someArrayElement = someArray[i];
//
//     console.log(someArrayElement);
//
// }


// ------- перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

// let i = someArray.length - 1;
//
// while (i >= 0) {
//
//     const someArrayElement = someArray[i];
//
//     if (i % 2 === 1) {
//
//         console.log(someArrayElement);
//
//     } else {
//
//         console.log('----------------')
//
//     }
//     i--;
// }

//-------- перебрати циклом for та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

// for (let i = someArray.length - 1; i >= 0; i--) {
//
//     const someArrayElement = someArray[i];
//
//     if (i % 2 === 1) {
//
//         console.log(someArrayElement);
//
//     } else {
//
//         console.log("--------------")
//
//     }
// }


//-------- перебрати циклом while та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)

// let i = someArray.length - 1;
//
// while (i >= 0) {
//
//     const someArrayElement = someArray[i];
//
//     if (someArrayElement % 2 === 0) {
//
//         console.log(someArrayElement);
//
//     } else {
//
//         console.log('----------------')
//
//     }
//     i--;
// }

//-------- перебрати циклом for та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)

// for (let i = someArray.length - 1; i >= 0; i--) {
//
//     const someArrayElement = someArray[i];
//
//     if (someArrayElement % 2 === 0) {
//
//         console.log(someArrayElement);
//
//     } else {
//
//         console.log("--------------")
//
//     }
// }

//-------- замінити кожне число кратне 3 на слово "okten" але в зворотньому циклі (с заду на перед)


// for (let i = someArray.length - 1; i >= 0; i--) {
//
//     let someArrayElement = someArray[i];
//
//     if (someArrayElement % 3 === 0) {
//
//         someArrayElement = "okten";
//
//         console.log(someArrayElement);
//
//     } else {
//
//         console.log(someArrayElement)
//
//     }
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі...............................................................

// let myNumderArray = [];
//
// myNumderArray[0] = 11;
// myNumderArray[1] = 22;
// myNumderArray[2] = 33;
// myNumderArray[3] = 44;
// myNumderArray[4] = 55;
// myNumderArray[5] = 66;
// myNumderArray[6] = 77;
// myNumderArray[7] = 88;
// myNumderArray[8] = 99;
// myNumderArray[9] = 110;
//
//
// for (let array of myNumderArray) {
//
//     console.log(array)
//
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.............................................................

// let myStringArray = [];
//
// myStringArray[0] = 'html';
// myStringArray[1] = 'css';
// myStringArray[2] = 'js';
// myStringArray[3] = 'db';
// myStringArray[4] = 'react';
// myStringArray[5] = 'angular';
// myStringArray[6] = 'nodejs';
// myStringArray[7] = 'nestjs';
// myStringArray[8] = 'python';
// myStringArray[9] = 'java';
//
// for (let i = 0; i < myStringArray.length; i++) {
//
//     myArray = myStringArray[i];
//
//     console.log(myArray);
//
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі..........................................................

// let mySomeArray = [];
//
// mySomeArray[0] = 1;
// mySomeArray[1] = 'css';
// mySomeArray[2] = true;
// mySomeArray[3] = 'db';
// mySomeArray[4] = 2022;
// mySomeArray[5] = false;
// mySomeArray[6] = 'nodejs';
// mySomeArray[7] = undefined;
// mySomeArray[8] = [];
// mySomeArray[8][0] = false;
// mySomeArray[8][1] = 'java';
// mySomeArray[9] = NaN;
//
// for (let myArray of mySomeArray) {
//
//     console.log(myArray);
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи..............................................

// let mySomeArray = [];
//
// mySomeArray[0] = 11;
// mySomeArray[1] = 'css';
// mySomeArray[2] = true;
// mySomeArray[3] = 22;
// mySomeArray[4] = 'js';
// mySomeArray[5] = false;
// mySomeArray[6] = 33;
// mySomeArray[7] = 'nodejs';
// mySomeArray[8] = false;
// mySomeArray[9] = 44;
//
// for (let myArray of mySomeArray) {
//
//     if (typeof myArray === "boolean") {
//
//         console.log(myArray);
//
//     } else {
//
//         console.log("--------------")
//
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи......................................................

// let mySomeArray = [];
//
// mySomeArray[0] = 11;
// mySomeArray[1] = 'css';
// mySomeArray[2] = true;
// mySomeArray[3] = 22;
// mySomeArray[4] = 'js';
// mySomeArray[5] = false;
// mySomeArray[6] = 33;
// mySomeArray[7] = 'nodejs';
// mySomeArray[8] = false;
// mySomeArray[9] = 44;
//
// for (let myArray of mySomeArray) {
//
//     if (typeof myArray === "number") {
//
//         console.log(myArray);
//
//     } else {
//
//         console.log("--------------")
//
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи...........................................................

// let mySomeArray = [];
//
// mySomeArray[0] = 11;
// mySomeArray[1] = 'css';
// mySomeArray[2] = true;
// mySomeArray[3] = 22;
// mySomeArray[4] = 'js';
// mySomeArray[5] = false;
// mySomeArray[6] = 33;
// mySomeArray[7] = 'nodejs';
// mySomeArray[8] = false;
// mySomeArray[9] = 44;
//
// for (let myArray of mySomeArray) {
//
//     if (typeof myArray === "string") {
//
//         console.log(myArray);
//
//     } else {
//
//         console.log("--------------")
//
//     }
// }


// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write.....................................................................................

// for (let i = 1; i < 11; i++) {
//
//     console.log(i);
//
//     document.write(`<h1>${i}</h1>`)
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write...................................................................................

// for (let i = 1; i < 101; i++) {
//
//     console.log(i);
//
//     document.write(`<h1>${i}</h1>`)
//
// }


// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write.....................................................................................

// for (let i = 1; i < 101; i+=2) {
//
//     console.log(i);
//
//     document.write(`<h1>${i}</h1>`)
//
// }


// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write..............................................................................

// for (let i = 1; i < 101; i++) {
//
//     if (i % 2 === 0) {
//
//         console.log(i);
//
//         document.write(`<h1>${i}</h1>`)
//
//     }
// }

// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write...................................................................................

// for (let i = 1; i < 101; i++) {
//
//     if (i % 2 === 1) {
//
//         console.log(i);
//
//         document.write(`<h1>${i}</h1>`)
//
//     }
// }




// стоврити масив книжок (назва, кількість сторінок, автори , жанри)....................................................................................................

// let arrayOfBooks = [
//
//     {
//         name: "The Return of the King",
//         pages: 350,
//         author: ["John R.R. Tolkien"],
//         genre: ["Fantasy", "Epic fantasy", "Adventure Fiction"]
//     },
//     {
//         name: "Mascot",
//         pages: 255,
//         author: ["Stephen King", "Peter Straub"],
//         genre: ["Romance", "Horror Literature", "Science Fiction", "Fantasy", "Epic Fantasy"]
//     },
//     {
//         name: "Martin Eden",
//         pages: 448,
//         author: ["Jack London"],
//         genre: ["Novel", "Fiction", "Fiction novel"]
//     },
//     {
//         name: "Angelica",
//         pages: 502,
//         author: ["Anne Golon", "Serge Golon"],
//         genre: ["Novel"]
//     }
// ];



// -знайти найбільшу книжку.................................................................................



// for (let i=0;i<arrayOfBooks.length;i++) {
//
//     if ((arrayOfBooks[0].pages > arrayOfBooks[1].pages && arrayOfBooks[0].pages > arrayOfBooks[2].pages) && arrayOfBooks[0].pages > arrayOfBooks[3].pages) {
//
//         console.log(arrayOfBooks[0]);
//
//     } else if ((arrayOfBooks[1].pages > arrayOfBooks[0].pages && arrayOfBooks[1].pages > arrayOfBooks[2].pages) && arrayOfBooks[1].pages > arrayOfBooks[3].pages) {
//
//         console.log(arrayOfBooks[1]);
//
//     } else if ((arrayOfBooks[2].pages > arrayOfBooks[0].pages && arrayOfBooks[2].pages > arrayOfBooks[1].pages) && arrayOfBooks[2].pages > arrayOfBooks[3].pages) {
//
//         console.log(arrayOfBooks[2]);
//
//     } else if ((arrayOfBooks[3].pages > arrayOfBooks[0].pages && arrayOfBooks[3].pages > arrayOfBooks[1].pages) && arrayOfBooks[3].pages > arrayOfBooks[2].pages) {
//
//         console.log(arrayOfBooks[3]);
//
//     }
// }


// - знайти книжку/ки з найбільшою кількістю жанрів...........................................................................


// for (let i=0;i<arrayOfBooks.length;i++) {
//
//     if ((arrayOfBooks[0].genre.length > arrayOfBooks[1].genre.length && arrayOfBooks[0].genre.length > arrayOfBooks[2].genre.length) && arrayOfBooks[0].genre.length > arrayOfBooks[3].genre.length) {
//
//         console.log(arrayOfBooks[0]);
//
//     } else if ((arrayOfBooks[1].genre.length > arrayOfBooks[0].genre.length && arrayOfBooks[1].genre.length > arrayOfBooks[2].genre.length) && arrayOfBooks[1].genre.length > arrayOfBooks[3].genre.length) {
//
//         console.log(arrayOfBooks[1]);
//
//     } else if ((arrayOfBooks[2].genre.length > arrayOfBooks[0].genre.length && arrayOfBooks[2].genre.length > arrayOfBooks[1].genre.length) && arrayOfBooks[2].genre.length > arrayOfBooks[3].genre.length) {
//
//         console.log(arrayOfBooks[2]);
//
//     } else if ((arrayOfBooks[3].genre.length > arrayOfBooks[0].genre.length && arrayOfBooks[3].genre.length > arrayOfBooks[1].genre.length) && arrayOfBooks[3].genre.length > arrayOfBooks[2].genre.length) {
//
//         console.log(arrayOfBooks[3]);
//
//     }
// }


// - знайти книжку/ки з найдовшою назвою............................................................................................................



// for (let i=0;i<arrayOfBooks.length;i++) {
//
//     if ((arrayOfBooks[0].name.length > arrayOfBooks[1].name.length && arrayOfBooks[0].name.length > arrayOfBooks[2].name.length) && arrayOfBooks[0].name.length > arrayOfBooks[3].name.length) {
//
//         console.log(arrayOfBooks[0]);
//
//     } else if ((arrayOfBooks[1].name.length > arrayOfBooks[0].name.length && arrayOfBooks[1].name.length > arrayOfBooks[2].name.length) && arrayOfBooks[1].name.length > arrayOfBooks[3].name.length) {
//
//         console.log(arrayOfBooks[1]);
//
//     } else if ((arrayOfBooks[2].name.length > arrayOfBooks[0].name.length && arrayOfBooks[2].name.length > arrayOfBooks[1].name.length) && arrayOfBooks[2].name.length > arrayOfBooks[3].name.length) {
//
//         console.log(arrayOfBooks[2]);
//
//     } else if ((arrayOfBooks[3].name.length > arrayOfBooks[0].name.length && arrayOfBooks[3].name.length > arrayOfBooks[1].name.length) && arrayOfBooks[3].name.length > arrayOfBooks[2].name.length) {
//
//         console.log(arrayOfBooks[3]);
//
//     }
// }


// - знайти книжку/ки які писали 2 автори..............................................................................................................


// for (let i=0;i<arrayOfBooks.length;i++) {
//
//     let book = arrayOfBooks[i];
//
//     if (book.author.length === 2) {
//
//         console.log(book);
//
//     }
// }


// - знайти книжку/ки які писав 1 автор....................................................................................................................


// for (let i=0;i<arrayOfBooks.length;i++) {
//
//     let book = arrayOfBooks[i];
//
//     if (book.author.length === 1) {
//
//         console.log(book);
//
//     }
// }