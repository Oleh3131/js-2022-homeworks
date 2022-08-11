// // - создать массив с 20 числами......................................................................................................................
//
// let numberArray = [];
//
// function createArray(someArray) {
//
//     for (let i = 0; i < 19; i++) {
//
//         someArray[i] = Math.round(Math.random() * (50 - 5) + 5);
//
//         numberArray.push(someArray[i]);
//
//     }
//     return numberArray;
// }
//
// let array = createArray(numberArray);
//
// console.log(array);
//
//
// // -- при помощи метода sort и колбека  отсортировать массив.........................................
//
//
// let growth = array.sort((a, b) => a - b);
//
// console.log(growth);
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.................
//
// let decrease = growth.sort((a, b) => b - a);
//
// console.log(decrease);
//
//
// // -- при помощи filter получить числа кратные 3....................................................
//
//
// let numbersMultiplesOfThree = array.filter(value => {
//
//     if (value % 3 === 0) {
//
//         return value;
//
//     }
// });
// console.log(numbersMultiplesOfThree);
//
//
// // -- при помощи filter получить числа кратные 10....................................................
//
//
// let numbersMultiplesOfTen = array.filter(value => {
//
//     if (value % 10 === 0) {
//
//         return value;
//
//     }
// });
// console.log(numbersMultiplesOfTen);
//
//
//
// // -- перебрать (проитерировать) массив при помощи foreach().........................................
//
// let forEach = decrease.forEach((item)=>{
//
//     console.log(item);
//
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все
// значения будут в 3 раза больше...................................................................


// let map = array.map((item) => {
//
//     return item ** 3
//
// });
//
// console.log(map);


// - создать массив со словами на 15-20 элементов.....................................................................................................


// let stringArray = [];
//
// stringArray[0] = 'Python';
// stringArray[1] = 'JavaScript';
// stringArray[2] = 'C';
// stringArray[3] = 'C++';
// stringArray[4] = 'PHP';
// stringArray[5] = 'Arduino';
// stringArray[6] = 'Ruby';
// stringArray[7] = 'Delphi';
// stringArray[8] = 'Java';
// stringArray[9] = 'NodeJs';
// stringArray[10] = 'Kotlin';
// stringArray[11] = 'Dart';
// stringArray[12] = 'Racket';
// stringArray[13] = 'WebDNA';
// stringArray[14] = 'LabVIEW';
// stringArray[15] = 'MAXScript';
// stringArray[16] = 'Oberon';


// -- отсортировать его по алфавиту в восходящем порядке............................................


// let sort = stringArray.sort((a, b) => {
//
//     if (a > b) {
//
//         return 1
//
//     } else if (a < b) {
//
//         return -1
//
//     } else if (a === b) {
//
//         return 0
//
//     }
// });
//
// console.log(sort);


// -- отсортировать его по алфавиту  в нисходящем порядке...........................................

// let sort = stringArray.sort((a, b) => {
//
//     if (a < b) {
//
//         return 1
//
//     } else if (a > b) {
//
//         return -1
//
//     } else if (a === b) {
//
//         return 0
//
//     }
// });
//
// console.log(sort);


// -- отфильтровать слова длиной менее 4х символов...................................................

// let filter = stringArray.filter(value => {
//
//     if (value.length < 4) {
//
//         return value;
//
//     }
// });
//
// console.log(filter);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут
// со знаком "!" в конце................................................................................


// let map = stringArray.map(value => {
//
//     return value.concat('!');
//
// });
//
// console.log(map);


// Все робити через функції масивів (foreach, map ...тд)...............................................................................................................................................................................
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором


// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true
//     }
// ];


// let sortGrowth = users.sort((a, b) => {
//
//     return a.age - b.age;
//
// });
//
// console.log(sortGrowth);


// let sortDecrease = users.sort((a, b) => {
//
//     return b.age - a.age;
//
// });
//
// console.log(sortDecrease);


// let map = users.map((user, index) => {
//
//     return {...user,id:index+1};
//
// });
//
// console.log(map);
//
// let sort = map.sort((a, b) => {
//
//     return b.id - a.id;
//
// });
//
// console.log(sort);


// -- наисать функцию калькулятора с 2мя числами и колбеком...............................................


// function calculator(a, b, callback) {
//
//     return callback(a, b);
//
// }
//
// let calculatorResolve = calculator(20, 5, function (a, b) {
//
//     return a * b - a
//
// });
//
// console.log(calculatorResolve);


// // -- наисать функцию калькулятора с 3мя числами и колбеком.................................................


// function calculator (a,b,c,callback){
//
//     return callback(a,b,c);
//
// }
//
// let calculatorResolve = calculator(30,80,90, function (a, b, c) {
//
//     return a - b + c;
//
// });
//
// console.log(calculatorResolve);


// ==================================================================================================
// ==================================================================================================
// =============КЛАССНАЯ РАБОТА======================================================================
// ==================================================================================================
// ==================================================================================================


// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {
//         producer: "bmw",
//         model: "115",
//         year: 2013,
//         color: "red",
//         type: "hachback",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         producer: "bmw",
//         model: "315",
//         year: 2010,
//         color: "white",
//         type: "sedan",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         producer: "bmw",
//         model: "650",
//         year: 2009,
//         color: "black",
//         type: "coupe",
//         engine: "f60",
//         volume: 6,
//         power: 350
//     },
//     {
//         producer: "bmw",
//         model: "320",
//         year: 2012,
//         color: "red",
//         type: "sedan",
//         engine: "f20",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let filterOne = cars.filter(value => {
//
//     if (value.volume > 3) {
//
//         return value;
//
//     }
// });
// console.log(filterOne);


// - двигун = 2л


// let filterTwo = cars.filter(value => {
//
//     if (value.volume === 2) {
//
//         return value;
//
//     }
// });
// console.log(filterTwo);


// - виробник мерс


// let filterThree = cars.filter(value => {
//
//     if (value.producer === "mercedes") {
//
//         return value;
//
//     }
// });
// console.log(filterThree);


// - двигун більше 3х літрів + виробник мерседес


// let filterFour = cars.filter(value => {
//
//     if (value.producer === "mercedes" && value.volume >3) {
//
//         return value;
//
//     }
// });
// console.log(filterFour);


// - двигун більше 3х літрів + виробник субару

// let filterFive = cars.filter(value => {
//
//     if (value.producer === "subaru" && value.volume >3) {
//
//         return value;
//
//     }
// });
// console.log(filterFive);


// - сили більше ніж 300

// let filterSix = cars.filter(value => {
//
//     if (value.power>300) {
//
//         return value;
//
//     }
// });
// console.log(filterSix);


// - сили більше ніж 300 + виробник субару

// let filterSix = cars.filter(value => {
//
//     if (value.power>300 && value.producer==="subaru") {
//
//         return value;
//
//     }
// });
// console.log(filterSix);


// - мотор серіі ej


// let filterSeven = cars.filter(value => {
//
//     if (value.engine.includes('ej')) {
//
//         return value;
//
//     }
// });
// console.log(filterSeven);


// - сили більше ніж 300 + виробник субару + мотор серіі ej


// let filterEight = cars.filter(value => {
//
//     if (value.engine.includes('ej') && value.power>300) {
//
//         return value;
//
//     }
// });
// console.log(filterEight);


// - двигун меньше 3х літрів + виробник мерседес

// let filterNine = cars.filter(value => {
//
//     if (value.volume<3 && value.producer==="mercedes") {
//
//         return value;
//
//     }
// });
// console.log(filterNine);


// - двигун більше 2л + сили більше 250


// let filterTen = cars.filter(value => {
//
//     if (value.volume>2 && value.power>250) {
//
//         return value;
//
//     }
// });
// console.log(filterTen);


// - сили більше 250  + виробник бмв


// let filterEleven = cars.filter(value => {

//     if (value.producer==="bmw" && value.power>250) {
//
//         return value;
//
//     }
// });
// console.log(filterEleven);


// - взять слдующий массив...............................................................................................................................................

// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersWithAddress = [
//     {
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Vasilenko', number: 1}
//     },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Romanova', number: 121}
//     },
//     {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Soborna', number: 90}
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Nabezna', number: 115}
//     },
//     {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 2}
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 22}
//     },
//     {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 43}
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 12}
//     },
//     {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 121}
//     }
// ];

// -- отсортировать его по id пользователей

// let sortGrowthId = usersWithAddress.sort((a, b) => {
//
//     return a.id - b.id;
//
// });
//
// console.log(sortGrowthId);


// -- отсортировать его по id пользователей в обратном опрядке

// let sortDecreaseId = usersWithAddress.sort((a, b) => {
//
//     return  b.id-a.id;
//
// });
//
// console.log(sortDecreaseId);


// -- отсортировать его по возрасту пользователей

// let sortGrowthAge = usersWithAddress.sort((a, b) => {
//
//     return a.age-b.age;
//
// });
//
// console.log(sortGrowthAge);


// -- отсортировать его по возрасту пользователей в обратном порядке

// let sortDecreaseAge = usersWithAddress.sort((a, b) => {
//
//     return b.age-a.age;
//
// });
//
// console.log(sortDecreaseAge);



// -- отсортировать его по имени пользователей


// let sortByName = usersWithAddress.sort((a, b) => {
//
//     if (a.name > b.name) {
//
//         return 1
//
//     } else if (a.name < b.name) {
//
//         return -1;
//
//     } else if (a.name===b.name)
//
//         return 0;
//
// });
//
// console.log(sortByName);




// -- отсортировать его по имени пользователей в обратном порядке



// let sortByName = usersWithAddress.sort((a, b) => {
//
//     if (a.name < b.name) {
//
//         return 1
//
//     } else if (a.name > b.name) {
//
//         return -1;
//
//     } else if (a.name===b.name)
//
//         return 0;
//
// });
//
// console.log(sortByName);



// -- отсортировать его по названию улицы  в алфавитном порядке


// let sortByAddressName = usersWithAddress.sort((a, b) => {
//
//
//     if (a.address.street > b.address.street) {
//
//         return 1
//
//     } else if (a.address.street < b.address.street) {
//
//         return -1
//
//     } else if (a.address.street === b.address.street) {
//
//         return 0
//
//     }
// });
// console.log(sortByAddressName);


// -- отсортировать его по номеру дома по возрастанию


// let sortByHomeNumber = usersWithAddress.sort((a, b) => {
//
//
//     if (a.address.number > b.address.number) {
//
//         return 1
//
//     } else if (a.address.number < b.address.number) {
//
//         return -1
//
//     } else if (a.address.number === b.address.number) {
//
//         return 0
//
//     }
// });
// console.log(sortByHomeNumber);



// -- отфильтровать (оставить) тех кто младше 30


// let filterAge = usersWithAddress.filter(value => {
//
//     if (value.age < 30) {
//
//         return value;
//
//     }
//
// });
// console.log(filterAge);


// -- отфильтровать (оставить) тех у кого отрицательный статус


// let filterStatus = usersWithAddress.filter(value => {
//
//     if (value.status===false) {
//
//         return value;
//
//     }
// });
// console.log(filterStatus);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterStatus = usersWithAddress.filter(value => {
//
//     if (value.status===false && value.age < 30) {
//
//         return value;
//
//     }
// });
// console.log(filterStatus);


// -- отфильтровать (оставить) тех у кого номер дома четный


// let filterStatus = usersWithAddress.filter(value => {
//
//     if (value.address.number%2===0) {
//
//         return value;
//
//     }
// });
// console.log(filterStatus);