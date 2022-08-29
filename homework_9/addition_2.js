// Візьміть файл template2.html, підключіть до нього скрипт, і працюйте в ньому!...................................................................................................................................
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний


// const contentId = document.getElementById('content');
// const textContent = contentId.innerText;
// console.log(textContent);
// contentId.innerText=`London is the capital of Great Britain`
// console.log(contentId.innerText);
// const colorContent = contentId.style.background = 'red';
//
//
// const rulestId = document.getElementById('rules');
// const textRules = rulestId.innerText;
// console.log(textRules);
// rulestId.innerText='Paris is the capital of France'
// console.log(rulestId.innerText);
// const colorRules = rulestId.style.background = 'blue';
// const classList = rulestId.classList;
// console.log(classList)
//
//
// const fc_rulesClass = document.getElementsByClassName('fc_rules');
//
// for (let element of fc_rulesClass) {
//
//     element.style.color = 'red';
//
//     console.log(element);
//
// }

// Взяти файл template_3.html та працювати в ньому.............................................................................................................................................................................................................
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header........................................

// const main_headerElement = document.getElementById('main_header');
// main_headerElement.setAttribute('class', 'june_2022');
// console.log(main_headerElement)

// b) робить шириниу елементу ul 400px..............................................................

// const ulElement = document.getElementsByTagName('ul')[0];
// ulElement.style.width = '400px';
// console.log(ulElement);

// c) робить шириниу всіх елементів з класом linkList шириною 50%..................................

// const listElements= document.getElementsByClassName('linkList');

// for (let element of listElements) {
//
//     element.style.width = '50%';
//
//     console.log(element);
//
// }

// d) отримує текст який зберігається в елементі з класом listElement2...........................

// const listElement2 = document.getElementsByClassName('listElement2')[0];
// const children = listElement2.children[0];
// console.log(children.innerHTML)

// e) отримує всі елементи li та змінює ім колір фону на сірий....................................

// const liElements = document.getElementsByTagName('li');
//
// for (let element of listElements) {
//
//     element.style.background = 'grey';
//
// }


// f) отримує всі елементи 'a' та додає їм клас anchor..............................................

// const aElements = document.getElementsByTagName('a');
//
// for (let element of aElements) {
//
//     element.classList.add('anchor');
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів.........................................................

// const aElements = document.getElementsByTagName('a');
//
// for (let element of aElements) {
//
//     if (element.innerText === 'link3') {
//
//         element.style.fontSize = '40px';
//
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a..........

// const aElements = document.getElementsByTagName('a');
//
// for (let element of aElements) {
//
//     const xxx = element.innerText = `XXX`;
//
//     element.classList.add(`element_${xxx}`);
//
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()...................


// const classSub_header = document.getElementsByClassName('sub-header');
//
// for (let element of classSub_header) {
//
//     element.style.background = prompt('Please enter the color');
//
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()...................................................................................................


// const classSub_header = document.getElementsByClassName('sub-header');
//
// for (let element of classSub_header) {
//
//     if (element.innerText==='content 2 segment') {
//
//         element.style.color = prompt('Please enter the color');
//
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt().........................................................................

// const elementContent_1 = document.getElementsByClassName('content_1')[0];
//
// elementContent_1.innerText = prompt('Please enter some text');


// l) отримати елементи p та змінити їм padding на 20px.................................................


// const pElements = document.getElementsByTagName('p');
//
// for (let element of pElements) {
//
//     element.style.padding = '20px';
//
// }



// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021).........................

// const text2Elements = document.getElementsByClassName('text2')[0];
//
// text2Elements.innerText = 'june-2022';


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив........................................................................................................................

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// const reduceArray = users.reduce((previousValue, currentValue) => {
//
//     previousValue.push(currentValue.address);
//
//     return previousValue;
//
// }, []);
//
//
// console.log(reduceArray);



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.....................................

for (let user of users) {

    const divElement = document.createElement('div');
    const stringify = JSON.stringify(user.address);


    divElement.innerText = `${stringify}`;

    document.body.appendChild(divElement);
}



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості




// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
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
