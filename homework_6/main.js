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


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


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

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deckOfCards = [
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'joker',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'joker',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    }
];


// let findSpadeAce = deckOfCards.find(value => value.cardSuit==="spade" && value.value==="ace");
//
// console.log(findSpadeAce);


// - всі шістки........................................................................................


// let arrayOfSix = [];
//
// let findAllSix = deckOfCards.find(object => {
//
//     if (object.value === "6") {
//
//         arrayOfSix.push(object);
//
//     }
// });
//
// console.log(arrayOfSix);



// - всі червоні карти..............................................................................

// let arrayOfRedCards = [];
//
// let findAllRedCards = deckOfCards.find(object => {
//
//     if (object.color === "red") {
//
//         arrayOfRedCards.push(object);
//     }
// });
//
// console.log(arrayOfRedCards);



// - всі буби........................................................................................


// let arrayOfDiamondCards = [];
//
// let findAllDiamondCards = deckOfCards.find(object => {
//
//     if (object.cardSuit === "diamond") {
//
//         arrayOfDiamondCards.push(object);
//     }
// });
//
// console.log(arrayOfDiamondCards);



// - всі трефи від 9 та більше.......................................................................


// let arrayOfClubsCards = [];
//
// let findAllClubsCards = deckOfCards.find(object => {
//
//     if (object.cardSuit === "clubs" && object.value>=+"9") {
//
//          arrayOfClubsCards.push(object);
//     }
// });
//
// console.log(arrayOfClubsCards);


// Додатково по reduce..................................................................................................................................................................................
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let reduceSort = deckOfCards.reduce((previousValue, currentValue) => {
//
//     if (currentValue.cardSuit === "spade") {
//
//         previousValue.spade.push(currentValue);
//
//     } else if (currentValue.cardSuit === "diamond") {
//
//         previousValue.diamond.push(currentValue);
//
//     } else if (currentValue.cardSuit === "heart") {
//
//         previousValue.heart.push(currentValue);
//
//     } else if (currentValue.cardSuit === "clubs") {
//
//         previousValue.clubs.push(currentValue);
//
//     }
//
//     return previousValue;
//
//
// }, {spade: [], diamond: [], heart: [], clubs: []});
//
// console.log(reduceSort);