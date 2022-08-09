// - Знайти та вивести довжину наступних стрінгових значень.................................................................................................
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let greeting = 'hello world';
//
// console.log(greeting.length);
//
// let pangram = 'lorem ipsum';
//
// console.log(pangram.length);
//
// let evaluation = 'javascript is cool';
//
// console.log(evaluation.length);


// --------------ЧИСТО ДЛЯ СЕБЕ РОБЛЮ-------------------------------------------------------

// let greeting = 'hello world';
//
// let pangram = 'lorem ipsum';
//
// let evaluation = 'javascript is cool';
//
// function addSomeString(...myArray) {
//
//     let theBiggestValue = myArray[0];
//
//     let newArray = [];
//
//     let twoString;
//
//     for (let i = 0; i < myArray.length; i++) {
//
//         let myArrayElement = myArray[i];
//
//         if (myArrayElement.length > theBiggestValue.length) {
//
//             theBiggestValue = myArrayElement;
//
//         } else if (myArrayElement.length===theBiggestValue.length){
//
//             let number = newArray.push(myArrayElement);
//
//             twoString = newArray.join("<-->");
//
//         }
//     }
//     console.log(twoString)
//     return theBiggestValue;
// }
//
// let result = addSomeString(greeting,pangram,evaluation);
//
// console.log(result);


// - Перевести до великого регістру наступні стрінгові значення........................................................................................
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let greeting = 'hello world';
//
// let toUpperCaseFirst = greeting.toUpperCase();
//
// console.log(toUpperCaseFirst);
//
// let pangram = 'lorem ipsum';
//
// let toUpperCaseSecond = pangram.toUpperCase();
//
// console.log(toUpperCaseSecond);
//
// let evaluation = 'javascript is cool';
//
// let toUpperCaseThird = evaluation.toUpperCase();
//
// console.log(toUpperCaseThird);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let greeting = 'hello world';
//
// let toUpperCaseFirst = greeting.toUpperCase();
//
// console.log(toUpperCaseFirst);
//
// let toLowerCaseFirst = toUpperCaseFirst.toLowerCase();
//
// console.log(toLowerCaseFirst);
//
// let pangram = 'lorem ipsum';
//
// let toUpperCaseSecond = pangram.toUpperCase();
//
// console.log(toUpperCaseSecond);
//
// let toLowerCaseSecond = toUpperCaseSecond.toLowerCase();
//
// console.log(toLowerCaseSecond);
//
// let evaluation = 'javascript is cool';
//
// let toUpperCaseThird = evaluation.toUpperCase();
//
// console.log(toUpperCaseThird);
//
// let toLowerCaseThird = toUpperCaseThird.toLowerCase();
//
// console.log(toLowerCaseThird);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів......................................................................

// let str = ' dirty string   ';
//
// let trim = str.trim();
//
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.............................................................................
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні';
//
// function stringToArray(someString) {
//
//     let split = someString.split(" ");
//
//     console.log(split);
//
// }
//
// stringToArray(str);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові..................................................................

// let numberArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let map = numberArray.map(value => {
//
//     return value.toString();
//
// });
//
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction....................................................................................................................................
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11,21,3];
//
// function sortNums(someArray, direction) {
//
//     let sort = someArray.sort((a, b) => {
//
//         if (direction === 'ascending') {
//
//             return a - b;
//
//         } else if (direction === 'descending') {
//
//             return b - a;
//
//         }
//     });
//     console.log(sort);
// }
//
// sortNums(nums,'ascending');



// - є масив...........................................................................................................................................
// -- відсортувати його за спаданням за monthDuration


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// function sortNums(someArray) {
//
//     let sort = someArray.sort((a, b) => {
//
//         return b.monthDuration - a.monthDuration;
//
//     });
//     console.log(sort);
// }
//
// sortNums(coursesAndDurationArray);



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців.............................


// function sortNums(someArray) {
//
//     let filter = someArray.filter(value => {
//
//         return value.monthDuration > 5;
//
//     });
//     console.log(filter);
// }
//
// sortNums(coursesAndDurationArray);





// описати колоду карт...............................................................................................................................
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }