// - є масив..........................................................................................................................................


// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


// for (let simpsonMember of simpsons) {
//
//     const htmlDivElement = document.createElement("div");
//
//     htmlDivElement.classList.add("member");
//
//     htmlDivElement.innerHTML = `
//     <h2>${simpsonMember.name} ${simpsonMember.surname}</h2>
//     <h4>age:${simpsonMember.age}</h4>
//     <p>${simpsonMember.info}</p>`
//
//     const htmlImageElement = document.createElement("img");
//
//     htmlImageElement.src = simpsonMember.photo;
//
//     htmlDivElement.appendChild(htmlImageElement);
//
//     document.body.appendChild(htmlDivElement);
//
// }


// Цикл в циклі...........................................................................................................................................................................
// - Є масив

// let coursesArray = [
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


// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


// for (let courses of coursesArray) {
//
//     const htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('courseObject');
//
//     const htmlHeadingElement = document.createElement('h2');
//     htmlHeadingElement.innerHTML=`<a href="https://owu.com.ua/">${courses.title}</a>`
//
//     const htmlDivElementTwo = document.createElement('div');
//     htmlDivElementTwo.classList.add('blockOfTwoElements');
//
//     const htmlHeadingElementTwo = document.createElement('h4');
//     htmlHeadingElementTwo.innerHTML=`months:${courses.monthDuration}`
//
//     const htmlHeadingElementThree = document.createElement('h4');
//     htmlHeadingElementThree.innerHTML=`hours:${courses.hourDuration}`
//
//     const htmlUlListElement = document.createElement('ul');
//     htmlUlListElement.classList.add("ulList")
//
//     for (let module of courses.modules) {
//
//         const htmlliElement = document.createElement('li');
//         htmlliElement.innerHTML = `module:<b>${module}</b>`;
//
//         htmlUlListElement.appendChild(htmlliElement);
//     }
//
//     htmlDivElementTwo.append(htmlHeadingElementTwo, htmlHeadingElementThree);
//     htmlDivElement.append(htmlHeadingElement, htmlDivElementTwo, htmlUlListElement);
//     document.body.appendChild(htmlDivElement);
//
// }


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// const htmlDivElement = document.createElement('div');
//
// htmlDivElement.innerText = 'Glory to Ukraine';
//
// htmlDivElement.classList.add("wrap", "collapse", "alpha", "beta");
// htmlDivElement.style.background = 'blue';
// htmlDivElement.style.width = '200px';
// htmlDivElement.style.height = '200px';
// htmlDivElement.style.color = 'gold';
// htmlDivElement.style.fontSize = '24px';
// htmlDivElement.style.display = 'flex';
// htmlDivElement.style.justifyContent = 'center';
// htmlDivElement.style.alignItems = 'center';
//
// document.body.appendChild(htmlDivElement);
//
// const cloneNodeHtmlDivElement = htmlDivElement.cloneNode(true);
//
// document.body.appendChild(cloneNodeHtmlDivElement);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли....................................................................................................................................................................................................................


// let someStringArray = ['Main', 'Products', 'About us', 'Contacts'];
//
// for (let string of someStringArray) {
//
//     const foundUl = document.getElementsByClassName('menu')[0];
//
//     const createdLi = document.createElement('li');
//     createdLi.innerHTML = `${string}`;
//
//     foundUl.appendChild(createdLi);
// }


// - Є масив.................................................................................................................................................................................................................

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (let course of coursesAndDurationArray) {
//
//     const divElement = document.createElement('div');
//     divElement.classList.add('course');
//
//     const h2Element = document.createElement('h2');
//     h2Element.innerHTML = `${course.title}`;
//
//     const h4Element = document.createElement('h4');
//     h4Element.innerHTML = `${course.monthDuration}`;
//
//     divElement.append(h2Element, h4Element);
//     document.body.appendChild(divElement);
//
// }


// - Є масив..........................................................................................................................................................................................................


// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


// for (let course of coursesAndDurationArray) {
//
//     const htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('item');
//
//     const htmlHeadingElement = document.createElement('h1');
//     htmlHeadingElement.classList.add('heading');
//     htmlHeadingElement.innerHTML = `${course.title}`;
//
//     const htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.classList.add('description');
//     htmlParagraphElement.innerHTML = `${course.monthDuration}`;
//
//     htmlDivElement.append(htmlHeadingElement, htmlParagraphElement);
//     document.body.appendChild(htmlDivElement);
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// - Створити довільний елемент з id = text.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// const htmlDivElement = document.createElement('div');
// htmlDivElement.setAttribute('id', 'text');
// htmlDivElement.style.width = '200px';
// htmlDivElement.style.height = '200px';
// htmlDivElement.style.background = 'gold';
//
//
// const htmlDivElementTwo = document.createElement('div');
// htmlDivElementTwo.classList.add('twoButtons')
//
// const htmlButtonElement = document.createElement('button');
// htmlButtonElement.innerText = `Hide element`;
// htmlButtonElement.style.cursor = 'pointer';
// htmlButtonElement.style.width = '75px';
// htmlButtonElement.style.height = '40px';
// htmlButtonElement.style.borderRadius = '10px';
//
// const htmlButtonElementTwo = document.createElement('button');
// htmlButtonElementTwo.innerText = `Show element`;
// htmlButtonElementTwo.style.cursor = 'pointer';
// htmlButtonElementTwo.style.width = '75px';
// htmlButtonElementTwo.style.height = '40px';
// htmlButtonElementTwo.style.borderRadius = '10px';
//
//
// htmlButtonElement.onclick = function () {
//
//     htmlDivElement.style.display = 'none';
//
// };
//
// htmlButtonElementTwo.onclick = function (e) {
//
//     htmlDivElement.style.display = 'flex';
//
// };
//
// htmlDivElementTwo.append(htmlButtonElement,htmlButtonElementTwo)
// document.body.append(htmlDivElement, htmlDivElementTwo);


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.................................................................................................................................................
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача


// const htmlFormElement = document.createElement('form');
// htmlFormElement.setAttribute('id', 'firstForm');
//
// const htmlInputElement = document.createElement('input');
// htmlInputElement.setAttribute('type', 'number');
// htmlInputElement.setAttribute('name', 'userAge');
// htmlInputElement.setAttribute('placeholder', 'age');
//
// const htmlButtonElement = document.createElement('button');
// htmlButtonElement.classList.add('mainButton');
// htmlButtonElement.innerText = `Send age`;
//
// htmlFormElement.append(htmlInputElement, htmlButtonElement);
// document.body.appendChild(htmlFormElement);
//
//
// htmlButtonElement.onclick = function (e) {
//
//     e.preventDefault();
//
//     let inputValue = htmlFormElement.userAge.value;
//
//     if (inputValue >= 18) {
//
//         alert('You can follow to the next page');
//
//     } else if (inputValue < 18 &&inputValue > 0) {
//
//         alert('Unfortunately, the information on this page is only for adults!');
//
//     }
// };


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.............................................................................................................
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const htmlFormElement = document.createElement('form');
// htmlFormElement.setAttribute('id', 'secondForm');
//
// const htmlInputElement = document.createElement('input');
// htmlInputElement.setAttribute('type', 'number');
// htmlInputElement.setAttribute('name', 'numberOfLines');
// htmlInputElement.setAttribute('placeholder', 'number of lines');
//
// const htmlInputElementTwo = document.createElement('input');
// htmlInputElementTwo.setAttribute('type', 'number');
// htmlInputElementTwo.setAttribute('name', 'numberOfCells');
// htmlInputElementTwo.setAttribute('placeholder', 'number of cells');
//
// const htmlInputElementThree = document.createElement('input');
// htmlInputElementThree.setAttribute('type', 'text');
// htmlInputElementThree.setAttribute('name', 'someInformation');
// htmlInputElementThree.setAttribute('placeholder', 'some information');
//
// const htmlButtonElement = document.createElement('button');
// htmlButtonElement.classList.add('mainButton');
// htmlButtonElement.innerText = `Сreate a table`;
//
//
// htmlButtonElement.onclick = function (e) {
//
//     e.preventDefault();
//
//     let tr = htmlFormElement.numberOfLines.value;
//
//     let td = htmlFormElement.numberOfCells.value;
//
//     let textInfo = htmlFormElement.someInformation.value;
//
//     let table = document.createElement('table');
//
//     document.body.appendChild(table);
//
//     for (let i = 0; i < tr; i++) {
//
//         let tr = document.createElement('tr');
//
//         for (let k = 0; k < td; k++) {
//
//             let td = document.createElement('td');
//
//             td.innerText = `${textInfo}`;
//
//             table.appendChild(tr);
//
//             tr.appendChild(td);
//
//         }
//     }
// };
//
// htmlFormElement.append(htmlInputElement, htmlInputElementTwo, htmlInputElementThree, htmlButtonElement);
// document.body.append(htmlFormElement);