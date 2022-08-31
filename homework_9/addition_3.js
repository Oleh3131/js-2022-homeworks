// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//   Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина.............................................................................................


// function checkElement(someElement) {
//
//     someElement.onclick = function (e) {
//
//         let targetTagName = e.target.tagName;
//         let targetClassList = e.target.classList;
//         let targetAttributeId = e.target.getAttribute('id');
//         let targetWidth = e.target.clientWidth;
//         let targetHeight = e.target.clientHeight;
//
//         console.log(`Назва тегу: ${targetTagName} - список класів: ${targetClassList} - список ід: ${targetAttributeId} - ширина:${targetWidth}px висота:${targetHeight}px`);
//     };
//
// }
//
// checkElement(document.body);


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок..........................................................................................................................................
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в
//     форматі висота*ширина

// function checkElement(someElement) {
//
//     someElement.onclick = function (e) {
//
//         let targetTagName = e.target.tagName;
//         let targetClassList = e.target.classList;
//         let targetAttributeId = e.target.getAttribute('id');
//         let targetWidth = e.target.clientWidth;
//         let targetHeight = e.target.clientHeight;
//
//         alert(`Назва тегу: <${targetTagName}> - список класів: [${targetClassList}] - список ід: ${targetAttributeId} - ширина:${targetWidth}px висота:${targetHeight}px`);
//     };
//
// }
//
// checkElement(document.body);


// - Є масив :......................................................................................................................................
//
//     let usersList = [
//         {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             address: {
//                 street: 'Kulas Light',
//                 suite: 'Apt. 556',
//                 city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                 geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//             },
//             phone: '1-770-736-8031 x56442',
//             website: 'hildegard.org',
//             company: {
//                 name: 'Romaguera-Crona',
//                 catchPhrase: 'Multi-layered client-server neural-net',
//                 bs: 'harness real-time e-markets'
//             }
//         },
//         {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             address: {
//                 street: 'Victor Plains',
//                 suite: 'Suite 879',
//                 city: 'Wisokyburgh',
//                 zipcode: '90566-7771',
//                 geo: {
//                     lat: '-43.9509',
//                     lng: '-34.4618'
//                 }
//             },
//             phone: '010-692-6593 x09125',
//             website: 'anastasia.net',
//             company: {
//                 name: 'Deckow-Crist',
//                 catchPhrase: 'Proactive didactic contingency',
//                 bs: 'synergize scalable supply-chains'
//             }
//         },
//         {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             address: {
//                 street: 'Douglas Extension',
//                 suite: 'Suite 847',
//                 city: 'McKenziehaven',
//                 zipcode: '59590-4157',
//                 geo: {
//                     lat: '-68.6102',
//                     lng: '-47.0653'
//                 }
//             },
//             phone: '1-463-123-4447',
//             website: 'ramiro.info',
//             company: {
//                 name: 'Romaguera-Jacobson',
//                 catchPhrase: 'Face to face bifurcated interface',
//                 bs: 'e-enable strategic applications'
//             }
//         },
//         {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             address: {
//                 street: 'Hoeger Mall',
//                 suite: 'Apt. 692',
//                 city: 'South Elvis',
//                 zipcode: '53919-4257',
//                 geo: {
//                     lat: '29.4572',
//                     lng: '-164.2990'
//                 }
//             },
//             phone: '493-170-9623 x156',
//             website: 'kale.biz',
//             company: {
//                 name: 'Robel-Corkery',
//                 catchPhrase: 'Multi-tiered zero tolerance productivity',
//                 bs: 'transition cutting-edge web services'
//             }
//         },
//         {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             address: {
//                 street: 'Skiles Walks',
//                 suite: 'Suite 351',
//                 city: 'Roscoeview',
//                 zipcode: '33263',
//                 geo: {
//                     lat: '-31.8129',
//                     lng: '62.5342'
//                 }
//             },
//             phone: '(254)954-1289',
//             website: 'demarco.info',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             address: {
//                 street: 'Norberto Crossing',
//                 suite: 'Apt. 950',
//                 city: 'South Christy',
//                 zipcode: '23505-1337',
//                 geo: {
//                     lat: '-71.4197',
//                     lng: '71.7478'
//                 }
//             },
//             phone: '1-477-935-8478 x6430',
//             website: 'ola.org',
//             company: {
//                 name: 'Considine-Lockman',
//                 catchPhrase: 'Synchronised bottom-line interface',
//                 bs: 'e-enable innovative applications'
//             }
//         },
//         {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             address: {
//                 street: 'Rex Trail',
//                 suite: 'Suite 280',
//                 city: 'Howemouth',
//                 zipcode: '58804-1099',
//                 geo: {
//                     lat: '24.8918',
//                     lng: '21.8984'
//                 }
//             },
//             phone: '210.067.6132',
//             website: 'elvis.io',
//             company: {
//                 name: 'Johns Group',
//                 catchPhrase: 'Configurable multimedia task-force',
//                 bs: 'generate enterprise e-tailers'
//             }
//         },
//         {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             address: {
//                 street: 'Ellsworth Summit',
//                 suite: 'Suite 729',
//                 city: 'Aliyaview',
//                 zipcode: '45169',
//                 geo: {
//                     lat: '-14.3990',
//                     lng: '-120.7677'
//                 }
//             },
//             phone: '586.493.6943 x140',
//             website: 'jacynthe.com',
//             company: {
//                 name: 'Abernathy Group',
//                 catchPhrase: 'Implemented secondary concept',
//                 bs: 'e-enable extensible e-tailers'
//             }
//         },
//         {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             address: {
//                 street: 'Dayna Park',
//                 suite: 'Suite 449',
//                 city: 'Bartholomebury',
//                 zipcode: '76495-3109',
//                 geo: {
//                     lat: '24.6463',
//                     lng: '-168.8889'
//                 }
//             },
//             phone: '(775)976-6794 x41206',
//             website: 'conrad.com',
//             company: {
//                 name: 'Yost and Sons',
//                 catchPhrase: 'Switchable contextually-based project',
//                 bs: 'aggregate real-time technologies'
//             }
//         },
//         {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             address: {
//                 street: 'Kattie Turnpike',
//                 suite: 'Suite 198',
//                 city: 'Lebsackbury',
//                 zipcode: '31428-2261',
//                 geo: {
//                     lat: '-38.2386',
//                     lng: '57.2232'
//                 }
//             },
//             phone: '024-648-3804',
//             website: 'ambrose.net',
//             company: {
//                 name: 'Hoeger LLC',
//                 catchPhrase: 'Centralized empowering task-force',
//                 bs: 'target end-to-end models'
//             }
//         }
//     ];
//
//
// // Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість,
// // та властивості внутрішніх об'єктів створити свої окремі блок.
//
// for (let user of usersList) {
//
//     let mainUserDiv = document.createElement('div');
//     mainUserDiv.classList.add('mainUserBlock');
//
//     let mainH1 = document.createElement('h1');
//     mainH1.innerText = `id: ${user.id}`;
//
//     let mainH2 = document.createElement('h2');
//     mainH2.innerText = `name: ${user.name}`;
//
//     let mainH2Second = document.createElement('h2');
//     mainH2Second.innerText = `username: ${user.username}`;
//
//     let firstH4 = document.createElement('h4');
//     firstH4.innerText = `email: ${user.email}`;
//
//     let secondH4 = document.createElement('h4');
//     secondH4.innerText = `User address:`;
//
//     let mainUl = document.createElement('ul');
//
//     let mainLiFirst = document.createElement('li');
//     mainLiFirst.innerText = `street: ${user.address.street}`;
//
//     let mainLiSecond = document.createElement('li');
//     mainLiSecond.innerText = `suite: ${user.address.suite}`;
//
//     let mainLiThird = document.createElement('li');
//     mainLiThird.innerText = `city: ${user.address.city}`;
//
//     let mainLiFourth = document.createElement('li');
//     mainLiFourth.innerText = `zipcode: ${user.address.zipcode}`;
//
//     let thirdH4 = document.createElement('h4');
//     thirdH4.innerText = `User geo:`;
//
//     let mainUlSecond = document.createElement('ul');
//
//     let secondLiFirst = document.createElement('li');
//     secondLiFirst.innerText = `geo lat: ${user.address.geo.lat}`;
//
//     let secondLiSecond = document.createElement('li');
//     secondLiSecond.innerText = `geo lng: ${user.address.geo.lng}`;
//
//     let fourthH4 = document.createElement('h4');
//     fourthH4.innerText = `phone: ${user.phone}`;
//
//     let fifthH4 = document.createElement('h4');
//     fifthH4.innerText = `website: ${user.website}`;
//
//     let sixthH4 = document.createElement('h4');
//     sixthH4.innerText = `User company:`;
//
//     let mainUlThird = document.createElement('ul');
//
//     let thirdLiFirst = document.createElement('li');
//     thirdLiFirst.innerText = `name: ${user.company.name}`;
//
//     let thirdLiSecond = document.createElement('li');
//     thirdLiSecond.innerText = `catchPhrase: ${user.company.catchPhrase}`;
//
//     let thirdLiThird = document.createElement('li');
//     thirdLiThird.innerText = `bs: ${user.company.bs}`;
//
//     mainUlSecond.append(secondLiFirst,secondLiSecond)
//     mainUl.append(mainLiFirst,mainLiSecond,mainLiThird,mainLiFourth,mainUlSecond)
//     mainUlThird.append(thirdLiFirst,thirdLiSecond,thirdLiThird)
//     mainUserDiv.append(mainH1, mainH2, mainH2Second, firstH4, secondH4, mainUl, fourthH4, fifthH4, sixthH4, mainUlThird);
//     document.body.appendChild(mainUserDiv);
//
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------
// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в
// (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs


// let emptyObject = {headings: [], paragraphs: []};
//
// function checkingTheStructure(someElement) {
//
//     const elements = someElement.children;
//
//     if (elements.length !== 0) {
//
//         for (let element of elements) {
//
//             if (element.tagName === 'H2') {
//
//                 const textHeader = element.innerText;
//
//                 emptyObject.headings.push(textHeader);
//
//             } else if (element.tagName === 'P') {
//
//                 const textParagraph = element.innerText;
//
//                 emptyObject.paragraphs.push(textParagraph);
//
//             }
//
//             checkingTheStructure(element);
//         }
//     }
//     return emptyObject;
// }
//
// const result = checkingTheStructure(document.body);
// console.log(result);



// -----------------------------------------------------------------------------------------------------------------------------------------------------


