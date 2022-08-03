// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині......................................................................................................


// for (let i = 1; i < 11; i += 1) {
//
//     if (i % 2 === 0) {
//
//         document.write(`<div>"Even numbers greet you!"</div><br>`);
//
//     } else if (i % 2 === 1) {
//
//         document.write(`<div>"Odd numbers greet you!"</div><br>`);
//
//     }
//
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині..................................................................................................................

// for (let i = 1; i < 11; i = i + 1) {
//
//     if (i % 2 === 0) {
//
//         document.write(`<div>${i} -- "Even numbers greet you!"</div><br>`);
//
//     } else if (i % 2 === 1) {
//
//         document.write(`<div>${i} --"Odd numbers greet you!"</div><br>`);
//
//     }
//
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині........................................................................................................................................


// document.write(`<div style="display: flex;flex-direction: column;justify-content: center;align-items: center">`);
//
// i = 1;
//
// while (i < 21) {
//
//     if (i % 2 === 0) {
//
//         document.write(`<h1 style="background: yellow;color: blue">"The first national color"</h1><br>`);
//
//     } else if (i % 2 === 1) {
//
//         document.write(`<h1 style="background: blue ;color: yellow">"The second national color"</h1><br>`);
//
//     }
//
//     i += 1;
// }
//
// document.write(`</div>`);


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.....................................................................................................................................


// document.write(`<div style="display: flex;flex-direction: column;justify-content: center;align-items: center">`);
//
// i = 1;
//
// while (i < 21) {
//
//     if (i % 2 === 0) {
//
//         document.write(`<h1 style="background: yellow;color: blue">${i} ---"The first national color"</h1><br>`);
//
//     } else if (i % 2 === 1) {
//
//         document.write(`<h1 style="background: blue ;color: yellow">${i} ---"The second national color"</h1><br>`);
//
//     }
//
//     i += 1;
// }
//
// document.write(`</div>`);


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону....................................................................................................................................................................................................

// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------


// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul style="background: silver;display: flex;justify-content: center;align-items: center;flex-direction: column">`)
//
// for (let i = 0;i<listOfItems.length; i++) {
//
//     let item=listOfItems[i]
//
//     document.write(`<li>${item}</li><br>`)
//
// }
//
// document.write(`</ul>`)


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон...................................................................................................................................................................................
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//


// for (const product of products) {
//
//     document.write(`<div class="product-card">`);
//
//     document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
//
//     document.write(`<img src="${product.image}" alt="product">`);
//
//     document.write(`<div/>`);
//
// }


//
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//     є масив


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// let trueArray = [];
//
// let falseArray = [];
//
// for (let i = 0; i < users.length; i++) {
//
//     let user = users[i];
//
//     if (user.status) {
//
//         trueArray[trueArray.length] = user;
//
//     } else {
//
//         falseArray[falseArray.length] = user;
//
//     }
// }
//
// console.log(trueArray);
// console.log(falseArray);
//
//
// let oldUsersArray = [];
//
// let youngUsersArray = [];
//
// for (const user of users) {
//
//     if (user.age>30) {
//
//         oldUsersArray[oldUsersArray.length] = user;
//
//     }else {
//
//         youngUsersArray[youngUsersArray.length] = user;
//
//     }
// }
//
// console.log(oldUsersArray);
// console.log(youngUsersArray);




// ------------------------------ВИРІШЕННЯ МЕТОДОМ МАСИВІВ------------------------------------------------


// let firstReduce = users.reduce((acumulator, user) => {
//
//     if (user.status) {
//
//         acumulator[0].push(user);
//
//     } else {
//
//         acumulator[1].push(user);
//
//     }
//
//     return acumulator;
//
// }, [[], []]);
//
// console.log(firstReduce);
//
//
// let secondReduce = users.reduce((acumulator, user) => {
//
//     if (user.age > 30) {
//
//         acumulator[0].push(user);
//
//     } else {
//
//         acumulator[1].push(user);
//
//     }
//
//     return acumulator;
//
// }, [[], []]);
//
// console.log(secondReduce);