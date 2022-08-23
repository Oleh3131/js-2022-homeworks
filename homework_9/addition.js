// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// const htmlButtonElement = document.createElement('button');
// htmlButtonElement.innerText = `Click me`;
// htmlButtonElement.style.cursor = "pointer";
//
// htmlButtonElement.onclick = function (e) {
//
//     htmlButtonElement.style.display = 'none';
//
// };
//
// document.body.appendChild(htmlButtonElement);



// - Создайте меню, которое раскрывается/сворачивается при клике.......................................................................................................................................................


// const htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('menu');
//
// const htmlHeadingElement = document.createElement('h3');
// htmlHeadingElement.classList.add('title')
// htmlHeadingElement.innerText = 'Types of modules:';
//
// const htmluListElement = document.createElement('ul');
//
// const htmlliElement = document.createElement('li');
// htmlliElement.innerText = `JavaScript`;
//
// const htmlliElementSecond = document.createElement('li');
// htmlliElementSecond.innerText = `NodeJs`;
//
// const htmlliElementThird = document.createElement('li');
// htmlliElementThird.innerText = `React`;
//
// const htmlliElementFourth = document.createElement('li');
// htmlliElementFourth.innerText = `Angular`;
//
// htmluListElement.append(htmlliElement, htmlliElementSecond, htmlliElementThird,htmlliElementFourth);
// htmlDivElement.append(htmlHeadingElement, htmluListElement);
// document.body.appendChild(htmlDivElement);
//
// htmlHeadingElement.onclick = function (e) {
//
//     htmlDivElement.classList.toggle('hidden');
//
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.............................................................................................................
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// const arrayOfComments=[
//
//     {title : 'firstLorem', body:'lorem ipsum dolo sit ametisfswf'},
//     {title : 'secondLorem', body:'lorem ipsum dolo sit ametiwefwefwef'},
//     {title : 'thirdLorem', body:'lorem ipsum dolo sit ametiwefwefwefwefwefwefwefwefwef'},
//     {title : 'fourthLorem', body:'lorem ipsum dolo sit ametiewefwef'},
//     {title : 'fifthLorem', body:'lorem ipsum dolo sit ametiwfe'},
//     {title : 'sixthLorem', body:'lorem ipsum dolo sit ametiefw fewfwe  ewfew'},
//     {title : 'seventhLorem', body:'lorem ipsum dolo sit ametiwfe we'},
//     {title : 'eighthLorem', body:'lorem ipsum dolo sit ametifew ewf ewfwfw e fww fw fw fw '},
//     {title : 'ninthLorem', body:'lorem ipsum dolo sit ametiwefwe wfe'},
//     {title : 'tenthLorem', body:'lorem ipsum dolo sit ametiwefwefwefwef'}
//
// ]
//
//
// for (let comment of arrayOfComments) {
//
//     const htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('comment');
//
//     const htmlHeadingElement = document.createElement('h3');
//     htmlHeadingElement.innerText = `${comment.title}`;
//
//     const htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.innerText = `${comment.body}`;
//
//     const htmlButtonElement = document.createElement('button');
//     htmlButtonElement.classList.add('button');
//     htmlButtonElement.innerText = `Click me`;
//
//     htmlDivElement.append(htmlHeadingElement, htmlParagraphElement,htmlButtonElement);
//     document.body.appendChild(htmlDivElement);
//
//     htmlButtonElement.onclick = function (e) {
//
//         htmlDivElement.classList.toggle('hidden');
//
//     };
// }



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм...........................................................................................
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// const htmlFormElement = document.createElement('form');
// htmlFormElement.setAttribute('id', 'firstForm');
//
// const htmlInputElement = document.createElement('input');
// htmlInputElement.setAttribute('type', 'text');
// htmlInputElement.setAttribute('name', 'userName');
// htmlInputElement.setAttribute('placeholder', 'user name');
//
// const htmlInputElementTwo = document.createElement('input');
// htmlInputElementTwo.setAttribute('type', 'text');
// htmlInputElementTwo.setAttribute('name', 'userSurname');
// htmlInputElementTwo.setAttribute('placeholder', 'user surname');
//
// const htmlFormElementTwo = document.createElement('form');
// htmlFormElementTwo.setAttribute('id', 'secondForm');
//
// const htmlInputElementThree = document.createElement('input');
// htmlInputElementThree.setAttribute('type', 'tel');
// htmlInputElementThree.setAttribute('name', 'userPhone');
// htmlInputElementThree.setAttribute('placeholder', 'phone');
//
// const htmlInputElementFour = document.createElement('input');
// htmlInputElementFour.setAttribute('type', 'email');
// htmlInputElementFour.setAttribute('name', 'userEmail');
// htmlInputElementFour.setAttribute('placeholder', 'email');
//
// const htmlButtonElement = document.createElement('button');
// htmlButtonElement.classList.add('button');
// htmlButtonElement.innerText = `Click me`;
//
// htmlFormElement.append(htmlInputElement, htmlInputElementTwo);
// htmlFormElementTwo.append(htmlInputElementThree, htmlInputElementFour);
// document.body.append(htmlFormElement, htmlFormElementTwo,htmlButtonElement);
//
// htmlButtonElement.onclick = function (e) {
//
//     const userNameValue = document.forms.firstForm.userName.value;
//     const userSurnameNameValue = document.forms.firstForm.userSurname.value;
//     const userPhoneValue = document.forms.secondForm.userPhone.value;
//     const userEmailValue = document.forms.secondForm.userEmail.value;
//
//     console.log(`name: ${userNameValue},surname: ${userSurnameNameValue},phone: ${userPhoneValue},email: ${userEmailValue}`);
// };



// - Створити функцію, яка генерує таблицю...........................................................................................................................................................................................
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// function generateTable(countOfTr,countOfTd,someElement) {
//
//     const htmlTableElement = document.createElement('table');
//
//     for (let i = 0; i < countOfTr; i++) {
//
//         const tr = document.createElement('tr');
//
//         for (let l = 0; l < countOfTd; l++) {
//
//             const td = document.createElement('td');
//             td.innerText = `okten is cool`;
//
//             htmlTableElement.appendChild(tr);
//             tr.appendChild(td);
//             someElement.appendChild(htmlTableElement);
//         }
//     }
// }
//
// generateTable(6, 6, document.body);



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки................................................................................................................


const mainDiv = document.createElement('div');
mainDiv.classList.add('mainBlock');

const listElement = document.createElement('ul');

const liElementOne = document.createElement('li');
const liElementTwo = document.createElement('li');
const liElementThree = document.createElement('li');
const liElementFour = document.createElement('li');
const liElementFive = document.createElement('li');
const liElementSix = document.createElement('li');
const liElementSeven = document.createElement('li');
const liElementEight = document.createElement('li');
const liElementNine = document.createElement('li');
const liElementTen = document.createElement('li');

const imgOne = document.createElement('img');
imgOne.setAttribute('src', './photo/facebook.png');

const imgTwo = document.createElement('img');
imgTwo.setAttribute('src', './photo/glo.png');

const imgThree = document.createElement('img');
imgThree.setAttribute('src', './photo/google-logo.png');

const imgFour = document.createElement('img');
imgFour.setAttribute('src', './photo/instagram-new.png');

const imgFive = document.createElement('img');
imgFive.setAttribute('src', './photo/java-eclipse.png');

const imgSix = document.createElement('img');
imgSix.setAttribute('src', './photo/netflix.png');

const imgSeven = document.createElement('img');
imgSeven.setAttribute('src', './photo/qq.png');

const imgEight = document.createElement('img');
imgEight.setAttribute('src', './photo/skype.png');

const imgNine = document.createElement('img');
imgNine.setAttribute('src', './photo/twitter-circled--v1.png');

const imgTen = document.createElement('img');
imgTen.setAttribute('src', './photo/youtube.png');

liElementOne.appendChild(imgOne);
liElementTwo.appendChild(imgTwo);
liElementThree.appendChild(imgThree);
liElementFour.appendChild(imgFour);
liElementFive.appendChild(imgFive);
liElementSix.appendChild(imgSix);
liElementSeven.appendChild(imgSeven);
liElementEight.appendChild(imgEight);
liElementNine.appendChild(imgNine);
liElementTen.appendChild(imgTen);

listElement.append(liElementOne,liElementTwo,liElementThree,liElementFour,liElementFive,liElementSix,liElementSeven,liElementEight,liElementNine,liElementTen);

mainDiv.appendChild(listElement);

document.body.appendChild(mainDiv);







// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку















// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан