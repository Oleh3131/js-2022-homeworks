// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort....................................................................................................................

// let numberArray = [];
//
// function createnumberArray(someArray) {
//
//     for (let i = 0; i < 30; i++) {
//
//         someArray[i] = Math.round(Math.random() * (100 - 1) + 1);
//
//     }
//     return someArray;
// }
//
// let resultArray = createnumberArray(numberArray);
//
// console.log(resultArray);
//
//
// let sort = resultArray.sort((a, b) => {
//
//     return a - b;
//
// });
//
// console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа...................................................................................

// let numberArray = [];
//
// function createnumberArray(someArray) {
//
//     for (let i = 0; i < 30; i++) {
//
//         someArray[i] = Math.round(Math.random() * (100 - 1) + 1);
//
//     }
//     return someArray;
// }
//
// let resultArray = createnumberArray(numberArray);
//
// console.log(resultArray);
//
//
// let filterArray = resultArray.filter(value => {
//
//     if (value % 2 === 0) {
//
//         return value;
//
//     }
// });
//
// console.log(filterArray);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.........................................................................................................................

// let numberArray = [];
//
// function createnumberArray(someArray) {
//
//     for (let i = 0; i < 30; i++) {
//
//         someArray[i] = Math.round(Math.random() * (100 - 1) + 1);
//
//     }
//     return someArray;
// }
//
// let resultArray = createnumberArray(numberArray);
//
// console.log(resultArray);
//
//
// let map = resultArray.map(value => {
//
//     return value.toString();
//
// });
//
// console.log(map);


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу........................................................................................................................


// let someArray = ['a', 'b', 'c'];
//
// for (let i = 0; i <= 2; i++) {
//
//     let someNumber = i + 1;
//
//     someArray.push(someNumber);
//
// }
//
// console.log(someArray);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]...................................................................................................................

// let someArray = [1, 2, 3];
//
// let numbers = someArray.reverse();
//
// console.log(numbers);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6............................................................................................................

// let someArray = [1, 2, 3];
//
// let number = someArray.push(4, 5, 6);
//
// console.log(someArray);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.................................................................................................

// let someArray = [1, 2, 3];
//
// let number = someArray.unshift(4, 5, 6);
//
// console.log(someArray);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]..........................................................................................................................


// let someArray = [1, 2, 3, 4, 5];
//
// let numbers = someArray.splice(0, 3);
//
// console.log(someArray);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].................................................................................................................


// let someArray = [1, 2, 3, 4, 5];
//
// let numbers = someArray.splice(2, 3);
//
// console.log(someArray);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].........................................................................................................


// let someArray = [1, 2, 3, 4, 5];
//
// let spliceArray = someArray.splice(3, 2,'a', 'b', 'c');
//
// console.log(someArray);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.........................................................................................................


// let numberArray = [];
//
// function createnumberArray(someArray) {
//
//     for (let i = 0; i < 10; i++) {
//
//         someArray[i] = Math.round(Math.random() * (40 - 5) + 5);
//
//     }
//     return someArray;
// }
//
// let resultArray = createnumberArray(numberArray);
//
// console.log(resultArray);
//
//
// let filterNumbers = resultArray.filter(value => {
//
//     return value % 2 === 0;
//
// });
// console.log(filterNumbers);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший...................................................................................................................

// let numberArray = [];
//
// function createnumberArray(someArray) {
//
//     for (let i = 0; i < 10; i++) {
//
//         someArray[i] = Math.round(Math.random() * (40 - 5) + 5);
//
//     }
//     return someArray;
// }
//
// let resultArray = createnumberArray(numberArray);
//
// console.log(resultArray);
//
//
//
// let emptyArray = [];
//
// let forEach = resultArray.forEach((item) => {
//
//     return emptyArray.push(item);
//
// });
//
// console.log(emptyArray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово............................................................................................

// let stringArray = ['a', 'b', 'c'];
//
// let someString = '';
//
// for (i = 0; i < stringArray.length; i++) {
//
//     someString=someString+stringArray[i]
//
// }
//
// console.log(someString);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово............................................................................................

// let stringArray = ['a', 'b', 'c'];
//
// let someString = '';
//
// let i = 0;
//
// while (i<stringArray.length) {
//
//     someString = someString + stringArray[i];
//
//     i++;
// }
// console.log(someString);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово...............................................................................................


// let stringArray = ['a', 'b', 'c'];
//
// let someString = '';
//
// for (let string of stringArray) {
//
//     someString = someString + string;
//
// }
//
// console.log(someString);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов..................................................................................................
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// function cutString(str,n) {
//
//     return str.match(new RegExp('.{1,' + n + '}', 'g'));
//
// }
//
// let cutStringResult = cutString('lend-lease', 3);
//
// console.log(cutStringResult);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.......................................................

//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//
//     let slice = str.slice(0, length);
//
//     console.log(slice)
//
// }
//
// delete_characters(str, 7);


// ----------------------------ВРІАНТ ЯКЩО ВИБИРАТИ ЯКИЙ САМЕ ХОЧЕМО ІНДЕКС ЕЛНМЕНТА ОБРІЗАТИ---------------------


// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//
//     let split = str.split(' ');
//
//     let newString;
//
//     for (let i = +prompt("What's the index of array?"); i < split.length; i++) {
//
//         if (i>=0 && i < split.length) {
//
//             newString = split[i].slice(0, length);
//
//             console.log(newString);
//
//             break;
//
//         } else if (i > split.length || i<0 || !i) {
//
//             console.log('You entered the wrong value!!!');
//
//             break;
//         }
//     }
// }
//
// delete_characters(str, 5);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр..........................................................................................................................................

//     
// doclet str = "HTML JavaScript PHP";ument.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//
//     let newString;
//
//     let split = str.split(',');
//
//     newString = split.join('-').toUpperCase();
//
//     return newString;
// }
//
// let insertDash = insert_dash(str);
//
// console.log(insertDash);


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній....................................................................................


// let str = "html javascript php";
//
// function firstIndexToUpperCase(someString) {
//
//     let highSymbol;
//
//     let nextSymbols;
//
//     for (let i = 0; i < someString.length; i++) {
//
//         if (i === 0) {
//
//             highSymbol = someString[i].toUpperCase();
//
//             nextSymbols = someString.slice(1, someString.length);
//
//         }
//     }
//
//     let result = highSymbol + nextSymbols;
//
//     console.log(result);
//
// }
//
// firstIndexToUpperCase(str);


// - Дано список імен......................................................................................................................................................................................


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
//
// function replaceString(someString,separator) {
//
//     let emptyArray = [];
//
//     let nameArray = [];
//
//     let result = someString.split(separator);
//
//     for (let myResulr of result) {
//
//         if (myResulr === '') {
//
//             emptyArray.push(myResulr);
//
//         }else {
//
//             let number = nameArray.push(myResulr);
//
//         }
//
//     }
//     return nameArray.join(" ");
// }
//
// let resultN1 = replaceString(n1,".");
//
// console.log(resultN1);
//
// let resultN2 = replaceString(n2,"-");
//
// console.log(resultN2);
//
// let resultN3 = replaceString(n3,"_");
//
// console.log(resultN3);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100...................................................................................................................


// let numberArray = [];
//
// function createNumber(someArray) {
//
//     for (let i = 0; i < 100; i++) {
//
//         someArray[i] = Math.round(Math.random() * (80 - 5) + 5);
//
//     }
//     return (someArray);
// }
//
// let someNumberArray = createNumber(numberArray);
//
// console.log(someNumberArray);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень................................................................................................................
// Відсортувати його за допомоги sort


// let sort = someNumberArray.sort((a, b) => {
//
//     return a - b;
//
// });
//
// console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)...................................................................................................................................................


// let filter = someNumberArray.filter(item => {
//
//     return item%2===0;
//
// });
//
// console.log(filter);
//
//


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.............................................................................................................


// let str = "html javascript php";
//
// function capitalize(str) {
//
//     let stingArray = str.split(' ');
//
//     let myFirstHighIndex=[];
//
//     let myLastStringPart=[];
//
//     for (let i = 0; i < stingArray.length; i++) {
//
//         if (stingArray[i][0]) {
//
//             let firstHighIndex = stingArray[i][0].toUpperCase();
//
//             myFirstHighIndex.push(firstHighIndex);
//
//             lastStringPart = stingArray[i].slice(1, stingArray[i].length);
//
//             myLastStringPart.push(lastStringPart);
//
//         }
//     }
//
//     let resultArray = [];
//
//     for (let k = 0, y = 0; k < myFirstHighIndex.length, y < myLastStringPart.length; k++ , y++) {
//
//         if (k === y) {
//
//             resultArray.push(myFirstHighIndex[k] + myLastStringPart[y])
//
//         }
//     }
//     return resultArray.join(' ');
// }
//
// let result = capitalize(str);
//
// console.log(result);


// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// 1)данні до знака равлика(@),
// 2)наявність равлика,
// 3)крапку яка знаходиться не меньше ніж на 2 символи далі після равлика,
// 4)функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення).................................................................................................................................
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


let firstEmail = "omeemail@gmail.com";
let secondEmail = "someeMAIL@gmail.com";
let thirdEmail = "someeMAIL@i.ua";
let fourthEmail = "some.email@gmail.com";


function validatorProtection(email) {

    let validValue;

    let invalidValue;

    if (email.includes("@")) {

        let indexOf = email.indexOf("@");

        if (indexOf) {

            for (let i = indexOf; i >= 0; i--) {

                if ((typeof email[i] === 'string' || typeof email[i] === "number" || typeof email[i] === "symbol") && (email[indexOf - 1] !== "." && email[indexOf - 2] !== ".")) {

                    email[i].toUpperCase() === email[i].toLowerCase();

                    for (let i = indexOf; i < email.length; i++) {

                        if ((typeof email[i] === 'string' || typeof email[i] === "number" || typeof email[i] === "symbol") && (email[indexOf + 1] !== "." && email[indexOf + 2] !== ".")) {

                            email[i].toUpperCase() === email[i].toLowerCase();

                            validValue = "Your email is valid!!!";

                        } else {

                            invalidValue="You have invalid e-mail address data!!!"

                        }
                    }

                } else {

                    invalidValue = "You have invalid e-mail address data!!!";

                }
            }
        }

    } else {

        invalidValue="You have invalid e-mail address data!!!"
    }
    return validValue || invalidValue;
}


let validatorResult = validatorProtection(thirdEmail);

console.log(validatorResult);





// --------------------АБО РЕГУЛЯРКОЮ------------------------------------------------------------------


// function validatorProtection(email) {
//
//     let validator = /^[a-zA-Z-09.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-09-]+(?: \.[a-zA-Z09-]+)*$/;
//
//     if (email.match(validator)) {
//
//         console.log("Valid email address!");
//
//     } else {
//
//         console.log("You have entered an invalid email address!")
//
//     }
// }
//
// validatorProtection(firstEmail);


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню