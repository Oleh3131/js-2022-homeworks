// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let emptyArray = [];
//
// for (let i = 0;i<100 ;i+=1) {
//
//     let newNumber = i+1;
//
//     if (newNumber % 2 === 0) {
//
//         emptyArray[emptyArray.length] = newNumber;
//
//     }
// }
//
// console.log(emptyArray);


//     b. заповнити його 50 непарними числами за допомоги циклу.

// let emptyArray = [];
//
// for (let i = 0;i<100 ;i+=1) {
//
//     let newNumber = i+1;
//
//     if (newNumber % 2 === 1) {
//
//         emptyArray[emptyArray.length] = newNumber;
//
//     }
// }
//
// console.log(emptyArray);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let emptyArray = [];
//
// for (let i = 0; i < 20; i++) {
//
//     emptyArray.push(Math.round(Math.random() * 50));
//
// }
//
// console.log(emptyArray);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// let emptyArray = [];
//
// for (let i = 0; i < 20; i++) {
//
//     emptyArray.push(Math.round(Math.random() * (732 - 8)) + 8);
//
//
// }
//
// console.log(emptyArray);


// 2. Вивести за допомогою console.log кожен третій елемен

// let emptyArray = [];
//
// for (let i = 0; i < 20; i+=3) {
//
//     let newNumber = i+1;
//
//     emptyArray[emptyArray.length] = newNumber;
//
// }
//
// console.log(emptyArray);


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.


// for (let i = 0; i < 30; i+=3) {
//
//     let someNumber=i+1
//
//     if (someNumber % 2 === 0) {
//
//         console.log(someNumber);
//
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let emptyArray = [];
//
// for (let i = 0; i < 30; i+=3) {
//
//     let someNumber=i+1
//
//     if (someNumber % 2 === 0) {
//
//         emptyArray[emptyArray.length] = someNumber;
//
//     }
// }
//
// console.log(emptyArray);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// let someArray=[44, 56, 3, 15, 106, 9, 77, 9, 80];
//
// for (let i = 0; i < someArray.length; i++) {
//
//     let myNumber = someArray[i];
//
//     if (i+1 && (myNumber % 2 === 0)) {
//
//         let k = i - 1;
//
//         if (k>=0) {
//
//             let newNumber = someArray[k];
//
//             console.log(newNumber)
//
//         }
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let someArray = [100, 250, 50, 168, 120, 345, 188];
//
// let sumNumber = 0;
//
// for (let i = 0; i < someArray.length; i++) {
//
//     let myNumber = someArray[i];
//
//     sumNumber = sumNumber + myNumber;
//
// }
//
// let averagePurchasePrice=sumNumber/someArray.length
//
//
// console.log(averagePurchasePrice);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// let firstArray = [];
//
// firstArray[0] = 5;
// firstArray[1] = 67;
// firstArray[2] = 21;
// firstArray[3] = 20;
// firstArray[4] = 48;
// firstArray[5] = 30;
// firstArray[6] = 105;
//
// let secondArray = [];
//
// for (let i = 0; i < firstArray.length; i += 1) {
//
//     let newNumbers = firstArray[i]*5;
//
//     secondArray.push(newNumbers);
//
// }
// console.log(firstArray);
//
// console.log(secondArray);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let firstArray = [];
//
// firstArray[0] = 5;
// firstArray[1] = true;
// firstArray[2] = 21;
// firstArray[3] = "msql";
// firstArray[4] = 48;
// firstArray[5] = undefined;
// firstArray[6] = 105;
// firstArray[6] = [false,"html",31];
// firstArray[6] = 105;
//
// let secondArray=[]
//
// for (let array of firstArray) {
//
//     if (typeof array === 'number') {
//
//         secondArray[secondArray.length] = array;
//
//     }
// }
//
// console.log(secondArray);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]


// let usersWithCities = [];
//
// for (let user of usersWithId) {
//
//     for (let city of citiesWithId) {
//
//         let newArray = usersWithCities;
//
//         if (user.id === city.user_id) {
//
//             user.address = city;
//
//             newArray[newArray.length] = user;
//
//         }
//     }
// }
//
// console.log(usersWithCities);



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrayOfNumbers = [];
//
// arrayOfNumbers[0] = 31;
// arrayOfNumbers[1] = 354;
// arrayOfNumbers[2] = 76;
// arrayOfNumbers[3] = 5;
// arrayOfNumbers[4] = 64;
// arrayOfNumbers[5] = 15;
// arrayOfNumbers[6] = 94;
// arrayOfNumbers[7] = 54;
// arrayOfNumbers[8] = 357;
// arrayOfNumbers[9] = 987;
// arrayOfNumbers[10] = 21;
// arrayOfNumbers[11] = 109;
// arrayOfNumbers[12] = 65;
//
// for (let number of arrayOfNumbers) {
//
//     if (number % 2 === 0) {
//
//         console.log(number)
//
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrayOfNumbers = [];
//
// arrayOfNumbers[0] = 31;
// arrayOfNumbers[1] = 354;
// arrayOfNumbers[2] = 76;
// arrayOfNumbers[3] = 5;
// arrayOfNumbers[4] = 64;
// arrayOfNumbers[5] = 15;
// arrayOfNumbers[6] = 94;
// arrayOfNumbers[7] = 54;
// arrayOfNumbers[8] = 357;
// arrayOfNumbers[9] = 987;
// arrayOfNumbers[10] = 21;
// arrayOfNumbers[11] = 109;
// arrayOfNumbers[12] = 65;
//
// let newArrayOfNumbers = [];
//
// for (let number of arrayOfNumbers) {
//
//     newArrayOfNumbers[newArrayOfNumbers.length] = number;
//
// }
//
// console.log(newArrayOfNumbers);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//
// let stringArray = ['a', 'b', 'c'];
//
// let sum = "";
//
// for (let i = 0;i<stringArray.length;i++) {
//
//     let someString=stringArray[i];
//
//     sum = sum + someString
//
// }
//
// console.log(sum);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let stringArray = ['a', 'b', 'c'];
//
// let sum = "";
//
// let i = 0;
//
// while (i < stringArray.length) {
//
//     let someString=stringArray[i];
//
//     sum = sum + someString
//
//     i += 1;
// }
//
// console.log(sum);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let stringArray = ['a', 'b', 'c'];
//
// let sum = "";
//
// for (const element of stringArray) {
//
//     sum = sum + element;
//
// }
//
// console.log(sum);