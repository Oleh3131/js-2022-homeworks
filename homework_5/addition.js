// 1) створити функцію яка приймає масив та виводить його елементи.

// let someArray = ['html', 132, true, undefined, false, 'js', NaN, 666, 'nodejs', 'mysql', true, 31];
//
// function inputArray(array) {
//
//         console.log(array);
// }
//
// inputArray(someArray);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.


// function inputArray(someArray) {
//
//     console.log(someArray);
// }
//
// let newArray = [];
//
// function fullArray(array,someFunction) {
//
//     for (let i = 0; i < 30; i++) {
//
//         array[i] = Math.round(Math.random() * (53 - 7) + 7);
//
//     }
//     someFunction(array);
// }
//
// fullArray(newArray,inputArray);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function inputNumbers(a,b,c) {
//
//     if (a < b && a < c) {
//
//         console.log(a);
//
//     }else if (b < a && b < c) {
//
//         console.log(b);
//
//     }else if (c < a && c < b) {
//
//         console.log(c);
//
//     }
//
// }
//
// inputNumbers(5, 3, 15);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function inputNumbers(a,b,c) {
//
//     if (a > b && a > c) {
//
//         console.log(a);
//
//     }else if (b > a && b > c) {
//
//         console.log(b);
//
//     }else if (c > a && c > b) {
//
//         console.log(c);
//
//     }
//
// }
//
// inputNumbers(5, 3, 15);


// 5) створити функцію яка повертає найбільше число з масиву


// let arrayOfNumbers = [5, 3, 15];
//
// let firstNumber = arrayOfNumbers[0];
//
// function inputNumbers(someArray) {
//
//     for (let someArrayElement of someArray) {
//
//         if (someArrayElement > firstNumber) {
//
//             firstNumber = someArrayElement;
//
//         }
//     }
//     return firstNumber;
// }
//
// let number = inputNumbers(arrayOfNumbers);
//
// console.log(number);


// 6) створити функцію яка повертає найменьше число з масиву


// let arrayOfNumbers = [5, 3, 15];
//
// let firstNumber = arrayOfNumbers[0];
//
// function inputNumbers(someArray) {
//
//     for (let someArrayElement of someArray) {
//
//         if (someArrayElement < firstNumber) {
//
//             firstNumber = someArrayElement;
//
//         }
//     }
//     console.log(firstNumber);
// }
//
// inputNumbers(arrayOfNumbers);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.


// let numbersArray = [2,4,6,8,10];
//
// let sum = 0;
//
// function sumNumbers(someArray) {
//
//     for (const someArrayElement of someArray) {
//
//         sum = sum + someArrayElement;
//
//     }
//     return sum;
// }
//
// let number = sumNumbers(numbersArray);
//
// console.log(number);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbersArray = [2, 4, 6, 8, 10];
//
// let arithmeticMeanNumber = 0;
//
// let result = 0;
//
// function arithmeticMean(someArray) {
//
//     for (let someArrayElement of someArray) {
//
//         arithmeticMeanNumber = (arithmeticMeanNumber + someArrayElement);
//
//         result=arithmeticMeanNumber/someArray.length
//
//     }
//     return result;
// }
//
// const number = arithmeticMean(numbersArray);
//
// console.log(number);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrayOfBooks = [
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

// let nextArrayOfKeys = [];
//
// function createKeysArray(someArray) {
//
//     for (let array of someArray) {
//
//         for (let key in array){
//
//             if (nextArrayOfKeys.includes(key)) {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] !== key;
//
//             }else {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] = key;
//
//             }
//         }
//     }
//     return nextArrayOfKeys;
// }
//
// let keysArray = createKeysArray(arrayOfBooks);
//
// console.log(keysArray);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let arrayOfBooks = [
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
//
//
// let nextArrayOfKeys = [];
//
// function createKeysArray(someArray) {
//
//     for (let array of someArray) {
//
//         for (let key in array){
//
//             if (nextArrayOfKeys.includes(array[key])) {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] !== array[key];
//
//             }else {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] = array[key];
//
//             }
//         }
//     }
//     return nextArrayOfKeys;
// }
//
// let keysArray = createKeysArray(arrayOfBooks);
//
// console.log(keysArray);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]


// let firstNumberArray = [4,12,64,7,21,100,300,400,500,2];
//
// let secondNumberArray = [5,10,12,13,49,100,200,100,50,4];
//
// let resultArray = [];
//
// function createResultArray(firstArray,secondArray) {
//
//     for (let i = 0; i < firstArray.length; i++) {
//
//         for (let h = 0; h < secondArray.length; h++) {
//
//             if (h===i) {
//
//                 let result = firstArray[i] + secondArray[i];
//
//                 resultArray[resultArray.length] = result;
//
//             }
//         }
//     }
//     return resultArray;
// }
//
// let resultArray1 = createResultArray(firstNumberArray, secondNumberArray);
//
// console.log(resultArray1);


// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function setNumbers(...a) {
//
//     let firstNumber = a[0];
//
//     let secondNumber=a[0];
//
//
//     for (let array of a) {
//
//         if (array < firstNumber) {
//
//             firstNumber = array;
//
//         }
//     }
//
//     for (let secondArray of a) {
//
//         if (secondArray > secondNumber) {
//
//             secondNumber = secondArray;
//
//         }
//     }
//
//     console.log(secondNumber);
//
//     return firstNumber;
// }
//
// let numbers = setNumbers(8, 6, 4, 13, -5,24);
//
// console.log(numbers);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// let arrayOfBooks = [
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
//
// let nextArrayOfKeys = [];
//
// let nextArrayOfKeysValues = [];
//
// function createKeysArray(someArray) {
//
//     for (let array of someArray) {
//
//         for (let key in array){
//
//             if (nextArrayOfKeysValues.includes(array[key])) {
//
//                 nextArrayOfKeysValues[nextArrayOfKeysValues.length] !== array[key];
//
//             }else{
//
//                 nextArrayOfKeysValues[nextArrayOfKeysValues.length] = array[key];
//
//             }
//         }
//     }
//
//     for (let array of someArray) {
//
//         for (let key in array){
//
//             if (nextArrayOfKeys.includes(key)) {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] !== key;
//
//             }else {
//
//                 nextArrayOfKeys[nextArrayOfKeys.length] = key;
//
//             }
//         }
//     }
//     return nextArrayOfKeysValues
// }
//
// let keysArray = createKeysArray(arrayOfBooks);
//
// console.log(keysArray);



// - Функція приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



let numberArray = [2, 4, 8, 12];

function changeNumber(someArray,i) {

    let someNumber = someArray[i];

    someArray[i]= someArray[i+1]

    someArray[i+1] = someNumber;

    console.log(numberArray);

}

changeNumber(numberArray,0);










// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //