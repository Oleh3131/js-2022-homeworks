// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html..................................................

// <div id="content"></div>
// <h1>Правила бойцовского клуба</h1>
// <div id="wrap">
//     <div className="rules rule1">
//         <h2>Первое правило Бойцовского клуба.</h2>
//         <p>Никому не рассказывать о Бойцовском клубе.</p>
//     </div>
//     <div className="rules rule2">
//         <h2>Второе правило Бойцовского клуба.</h2>
//         <p>Никогда никому не рассказывать о Бойцовском клубе.</p>
//     </div>
//     <div className="rules rule3">
//         <h2>Третье правило Бойцовского клуба.</h2>
//         <p>В схватке участвуют только двое.</p>
//     </div>
//     <div className="rules rule4">
//         <h2>Четвертое правило Бойцовского клуба.</h2>
//         <p>Не более одного поединка за один раз.</p>
//     </div>
//
//     <div className="rules rule5">
//         <h2>Пятое правило Бойцовского клуба.</h2>
//         <p>Бойцы сражаются без обуви и голые по пояс.</p>
//     </div>
//     <div className="rules rule6">
//         <h2>Шестое правило Бойцовского клуба.</h2>
//         <p>Поединок продолжается столько, сколько потребуется.</p>
//     </div>
//     <div className="rules rule7">
//         <h2>Седьмое правило Бойцовского клуба.</h2>
//         <p>Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» —
//             поединок
//             окончен.</p>
//     </div>
//     <div className="rules rule8">
//         <h2>Восьмое и последнее правило Бойцовского клуба.</h2>
//         <p>Новичок обязан принять бой.</p>
//     </div>
// </div>


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// function createRulesList(someArray) {
//
//     document.write(`<div id="content">`);
//
//     document.write(`<h1>Fight Club Rules</h1>`);
//
//     document.write(`<div id="wrap">`);
//
//     for (let i = 0; i < someArray.length; i++) {
//
//         let partOgTheRule = someArray[i];
//
//         let numberOfTheRule = i + 1;
//
//         document.write(`<div class="rules rule${numberOfTheRule}">
//
//                     <h2>${partOgTheRule.title}</h2>
//                     <p>${partOgTheRule.body}</p>
//
// </div>`);
//
//     }
//     document.write(`</div>`);
//     document.write(`</div>`);
// }
//
// createRulesList(rules);


//   Вивести масив винахідників які народились в 1500-х роках...........................................................................................

// const inventors = [
//     {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
//     {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
//     {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
//     {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
//     {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
//     {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
//     {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
//     {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
//     {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
//     {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
//     {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
//     {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// ];

// function arrayFiltering(someArray) {
//
//     let filteredYearArray = [];
//
//     let filteredNameArray = [];
//
//     for (let value of someArray) {
//
//         if (value.year >= 1500 && value.year <= 1599) {
//
//             filteredYearArray[filteredYearArray.length] = value;
//
//         }
//     }
//     return filteredYearArray;
//
// }
//
// let result = arrayFiltering(inventors);
// console.log(result);


//   Вивести масив тільки імен винахідників які народились в 1800-х роках...............................................................................................


// function arrayFiltering(someArray) {
//
//     let filteredNameArray = [];
//
//     for (let value of someArray) {
//
//         if (value.year >= 1800 && value.year <= 1899) {
//
//             filteredNameArray[filteredNameArray.length] = value.first;
//
//         }
//     }
//     return filteredNameArray;
//
// }
//
// let result = arrayFiltering(inventors);
//
// console.log(result);


//   Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ]).............................................................................................


// function arrayFiltering(someArray) {
//
//     let filteredNameAndSurnameArray = [];
//
//     for (let value of someArray) {
//
//         if (value.first && value.last) {
//
//             filteredNameAndSurnameArray[filteredNameAndSurnameArray.length] = `${value.first} ${value.last}`;
//
//         }
//     }
//     return filteredNameAndSurnameArray;
//
// }
//
// let result = arrayFiltering(inventors);
//
// console.log(result);


//   Відсортувати винахідників за кількістю прожитих років............................................................................................................


// let sortAge = inventors.sort((a, b) => {
//
//     if ((a.passed - a.year) < (b.passed - b.year)) {
//
//         return 1;
//
//     }
//
//     if ((a.passed - a.year) > (b.passed - b.year)) {
//
//         return -1;
//
//     }
//     if ((a.passed - a.year) === (b.passed - b.year)) {
//
//         return 0;
//
//     }
//
// });
//
// console.log(sortAge);


//   Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false.......................................................................

// let someYear = inventors.some(value => {
//
//     return value.year === 1878;
// });
//
// console.log(someYear);


//   * Знайдіть суму років які прожили всі винахідники разом..........................................................................................................................


// let sumOfTheYears = inventors.reduce((previousValue,currentValue) => {
//
//     return previousValue + (currentValue.passed - currentValue.year);
//
// }, 0);
//
// console.log(sumOfTheYears);


// ------------------------------АБО----------------------------------


// function sumOfTheYears(someArray) {
//
//     let sum = 0;
//
//     for (let array of someArray) {
//
//         let result = array.passed - array.year;
//
//         sum = sum + result;
//
//     }
//     return sum;
// }
//
// let number = sumOfTheYears(inventors);
//
// console.log(number);


//   Відсортувати людей але тільки за прізвищем.....................................................................................................................

// const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
//     'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
//     'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
//     'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
//     'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
//     'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
//     'Blake, William'];
//
// function cutArray(someArray) {
//
//     let join = someArray.join(',');
//
//     let split = join.split(',');
//
//     let surnameArray = [];
//
//     for (let i = 0; i < split.length; i += 2) {
//
//         surnameArray[surnameArray.length] = split[i];
//
//     }
//     return surnameArray;
// }
//
// let resultSurnameArray = cutArray(people);
//
// console.log(resultSurnameArray);
//
// let sort = resultSurnameArray.sort((a, b) => {
//
//     if (a.length > b.length) {
//
//         return 1;
//
//     }
//     if (a.length < b.length) {
//
//         return -1;
//
//     }
//     if (a.length === b.length) {
//
//         return 0;
//
//     }
// });

// console.log(sort);

// let sortSurname = people.sort((a, b) => {
//
//     return a - b;
//
// });
//
// console.log(sortSurname);



//   * Знайти суму кожного типу транспорту, які є в масиві...............................................................................................................


// const transport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike','walk', 'car', 'van', 'car', 'truck', 'pogostick'];


// function sumTypeOfTransport() {
//
//     let numberArray = [];
//
//     for (let value of transport) {
//
//         numberArray[numberArray.length] = value.length;
//
//     }
//     return numberArray;
// }
//
// let numberResult = sumTypeOfTransport(transport);
//
// console.log(numberResult);



// --------------------------------АЛЕ ЯКЩО МАЛАСЯ ПО СУТІ ВСЯ СУМА--------------------------------


// function sumTypeOfTransport() {
//
//     let sum = 0;
//
//     for (let value of transport) {
//
//         sum = sum + value.length;
//
//     }
//     return sum;
// }
//
// let numberResult = sumTypeOfTransport(transport);
//
// console.log(numberResult);






// ===========додаткове від віктора====================================================================================================================================

// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!






//     2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========