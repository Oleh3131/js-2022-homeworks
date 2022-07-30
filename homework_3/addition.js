// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//
//     alert('This is a large array with three or more elements');
//
// } else {
//
//     alert("This is a small array with fewer than three elements")
//
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше).
//   Перевірити, чи знаходиться перше число між двома іншими........................................................................................................................

// let numbers = [];
//
// numbers[0] = +prompt("Enter first number");
//
// numbers[1] = +prompt("Enter second number");
//
// numbers[2] = +prompt("Enter third number");
//
// if ((numbers[0] > numbers[1] && numbers[0] < numbers[2])
//     ||
//     (numbers[0] < numbers[1] && numbers[0] > numbers[2])) {
//
//     console.log(numbers[0]);
//
// } else if ((numbers[1] > numbers[0] && numbers[1] < numbers[2])
//     ||
//     (numbers[1] < numbers[0] && numbers[1] > numbers[2])) {
//
//     console.log(numbers[1]);
//
// } else if ((numbers[2] > numbers[0] && numbers[2] < numbers[1])
//     ||
//     (numbers[2] < numbers[0] && numbers[2] > numbers[1])) {
//
//     console.log(numbers[2]);
//
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':................................................................................................................................

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }


// let result = (a + b < 4) ? 'Мало' : 'Багато';
//
// console.log(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним
// або нулем напишіть це тернарним оператором..................................................................................................................................................................................................................


// ----------------МІЙ ПРОБНИЙ ВАРІАНТ-----------------------------


// let number = Math.round(Math.random() * (100 - (-100)) + (-100));
//
// if (number > 0) {
//
//     console.log("This is a positive number");
//     console.log(number);
//
// } else if (number < 0) {
//
//     console.log("This is a negative number")
//     console.log(number);
//
// } else if  (number === 0) {
//
//     console.log("This number is zero")
//     console.log(number);
//
// }


// -------------------МІЙ ВАРІАНТ ІЗ ТЕРНАРНИМ ОПЕРАТОРОМ------------------------------------


// let randomNumber = Math.round(Math.random() * (100 - (-100)) + (-100));
//
// let number = (randomNumber > 0) ? "This is a positive number" : (randomNumber < 0) ? "This is a negative number" : (randomNumber === 0) ? "This number is zero" : "The data is not entered correctly";
//
// console.log(number);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)...................................................................................................................


// let test = confirm('Are you ready to make a choice?');
//
// if (test) {
//
//     alert('Вірно');
//
// } else {
//
//     alert('Неправильно');
//
// }


// let test = confirm('Are you ready to make a choice?')? 'Вірно':'Неправильно';
//
// console.log(test)


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!..........................................................................................................................................


// let mainQuestion = prompt('What is the official name of Java Script?');
//
// if (mainQuestion==="ECMAScript") {
//
//     alert("Right!");
//
// } else {
//
//     alert("Don't you know? ECMAScript!!");
//
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.........................................................................................................................................................................................................


// let flatNumber = +prompt("Please enter your flat number");
//
// if (flatNumber>=1 && flatNumber<=20) {
//
//     alert("Welcome to the first entrance!");
//
// } else if (flatNumber>=21 && flatNumber<=48) {
//
//     alert("Welcome to the second entrance!");
//
// }  else if (flatNumber>=49 && flatNumber<=90) {
//
//     alert("Welcome to the third entrance!");
//
// } else {
//
//     alert("The data is not entered correctly");
//
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


// let someNumber = +prompt("Please enter your number");
//
//
// if (someNumber === 10) {
//
//     alert('Right!');
//
// } else {
//
//     alert("Incorrectly!")
//
// }



// -----------------АБО ТЕРНАРКОЮ------------------------------------------------------


// let someNumber = +prompt("Please enter your number") === 10? alert('Right!') :alert("Incorrectly!") ;








// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру.
//     Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН..........................................................................................................................................................


// let someTemperature = +prompt("Please enter outside temperature");
//
// if (someTemperature>=10 && someTemperature<=22 ){
//
//     alert("We go to study");
//
// }else {
//
//     alert("We study online");
//
// }


// -----------------АБО ТЕРНАРКОЮ------------------------------------------------------


// let someTemperature = +prompt("Please enter outside temperature");
//
// let temperature=(someTemperature>=10 && someTemperature<=22 )? alert("We go to study"): alert("We study online");













// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного числа нам дається приз.
// (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне.......................................................................................................................................................................




// let someNumber = +prompt("Please enter a number from 1 to 5");
//
//
// switch (someNumber) {
//
//     case 1:
//
//         alert("Congratulations, you won a car!!!");
//         break;
//
//     case 2:
//
//         alert("Congratulations, you won a motorcycle!!!");
//         break;
//
//     case 3:
//
//         alert("Congratulations, you won a phone!!!");
//         break;
//
//     case 4:
//
//         alert("Congratulations, you won a TV!!!");
//         break;
//
//     case 5:
//
//         alert("Congratulations, you won a ticket!!!");
//         break;
//
//     default:
//
//         alert("The data is not entered correctly");
//
// }





// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)..................................................................................................................................................................................


let firstNumber = +prompt('Please enter the first number');

let secondNumber = +prompt('Please enter the second number');

let thirdNumber = +prompt('Please enter the third number');




















// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!



