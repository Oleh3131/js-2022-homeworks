// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)...................................................................................................................................................


// function User(id,name,surname,email,phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let usersArray = [];
//
// let userOne = new User(1, 'Oleh', "Bondarenko", "sdfsfw@gmail.com", "0617843212");
//
// let userTwo = new User(2, 'Denis', "Brown", "rferferf@gmail.com", "381515151524");
//
// let userThree = new User(3, 'Rob', "Lopuh", "xvxfdv@gmail.com", "54631351315");
//
// let userFour = new User(4, 'Julia', "Eerferf", "rferf@gmail.com", "2615315213");
//
// let userFive = new User(5, 'Elen', "Rwfwefwe", "vfvedr@gmail.com", "135133135");
//
// let userSix = new User(6, 'Mark', "Ecsdcsdc", "vrerter@gmail.com", "796351461561");
//
// let userSeven = new User(7, 'Bogdan', "Udvfvdv", "vderfert@gmail.com", "43165435431");
//
// let userEight = new User(8, 'Luci', "Srefer", "t4tffvd@gmail.com", "76165165146354");
//
// let userNine = new User(9, 'Stiven', "Vdeferfe", "grnd5rfrtg@gmail.com", "303316115315");
//
// let userTen = new User(10, 'Nick', "Ofdvfvd", "vfghfhf@gmail.com", "549681306813");
//
// const objectArray = usersArray.push(userOne, userTwo, userThree, userFour, userFive, userSix, userSeven, userEight, userNine, userTen);
//
// console.log(usersArray);


// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)..................................................................................................

// const filterById = usersArray.filter(value => {
//
//     return value.id % 2 === 0;
//
// });
//
// console.log(filterById);


// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)..................................................................................................................


// const sortById = usersArray.sort(function (a, b) {
//
//     return a.id - b.id;
//
// });
//
// console.log(sortById);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)...................................................................................................................
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clientsArray = [];
//
// let clientOne = new Client(1, 'Oleh', "Bondarenko", "sdfsfw@gmail.com", "0617843212", [
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
//     {
//         title: 'oil',
//         price: 30,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
// let clientTwo = new Client(2, 'Denis', "Brown", "rferferf@gmail.com", "381515151524", [
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
//     }]);
//
// let clientThree = new Client(3, 'Rob', "Lopuh", "xvxfdv@gmail.com", "54631351315", [
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
//     {
//         title: 'oil',
//         price: 30,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
// let clientFour = new Client(4, 'Julia', "Eerferf", "rferf@gmail.com", "2615315213", [
//     {
//
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
//     }]);
//
// let clientFive = new Client(5, 'Elen', "Rwfwefwe", "vfvedr@gmail.com", "135133135", [
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
//     {
//         title: 'oil',
//         price: 30,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
// let clientSix = new Client(6, 'Mark', "Ecsdcsdc", "vrerter@gmail.com", "796351461561", [
//     {
//
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
//     }]);
//
// let clientSeven = new Client(7, 'Bogdan', "Udvfvdv", "vderfert@gmail.com", "43165435431", [
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
//     {
//         title: 'oil',
//         price: 30,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
// let clientEight = new Client(8, 'Luci', "Srefer", "t4tffvd@gmail.com", "76165165146354", [
//     {
//
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
//     }]);
//
// let clientNine = new Client(9, 'Stiven', "Vdeferfe", "grnd5rfrtg@gmail.com", "303316115315", [
//
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
// let clientTen = new Client(10, 'Nick', "Ofdvfvd", "vfghfhf@gmail.com", "549681306813", [
//     {
//
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
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }]);
//
//
// clientsArray.push(clientOne, clientTwo, clientThree, clientFour, clientFive, clientSix, clientSeven, clientEight, clientNine, clientTen);
//
// console.log(clientsArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// const sortByOrderLength = clientsArray.sort((a, b)=>{
//
//     return a.order.length - b.order.length;
//
// });
//
// console.log(sortByOrderLength);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:.........................................................................................................................................................
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, manufacturer, year_of_manufacture, maximum_speed, volume) {
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year_of_manufacture = year_of_manufacture;
//     this.maximum_speed = maximum_speed;
//     this.volume = volume;
//
//     this.drive = function () {
//
//         console.log(`Їдемо зі швидкістю ${this.maximum_speed} на годину`);
//
//     };
//
//     this.info = function () {
//
//         console.log(`model - ${this.model},manufacturer - ${this.manufacturer},year of manufacture - ${this.year_of_manufacture},maximum speed - ${this.maximum_speed},volume - ${this.volume}`);
//
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//
//         newSpeed = newSpeed + this.maximum_speed;
//
//         console.log(`Мaксимальна швидкість даного автомобіля ${newSpeed} км/год`);
//
//
//     };
//
//
//     this.changeYear = function (newValue) {
//
//         let newYear = this.year_of_manufacture;
//
//         newYear = newValue;
//
//         console.log(`Рік випуску даного автомобіля ${newYear}`);
//
//     };
//
//     this.addDriver = function (driver) {
//
//         this.driver = driver;
//
//         return this;
//
//     };
//
// }
//
// let carCharacteristic = new Car("mercedes","Germany",2017,300,4);
//
// console.log(carCharacteristic);
//
// carCharacteristic.drive();
//
// carCharacteristic.info();
//
// carCharacteristic.increaseMaxSpeed(40);
//
// carCharacteristic.changeYear(2020);
//
// const newObject = carCharacteristic.addDriver({name: 'petro', age: '45', status: true});
//
// console.log(newObject);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:..................................................................................................................................................................................
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//
//     constructor(model, manufacturer, year_of_manufacture, maximum_speed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year_of_manufacture = year_of_manufacture;
//         this.maximum_speed = maximum_speed;
//         this.volume = volume;
//     }
//
//     drive() {
//
//         console.log(`Їдемо зі швидкістю ${this.maximum_speed} на годину`);
//
//     };
//
//     info() {
//
//         console.log(`model - ${this.model},manufacturer - ${this.manufacturer},year of manufacture - ${this.year_of_manufacture},maximum speed - ${this.maximum_speed},volume - ${this.volume}`);
//
//     };
//
//     increaseMaxSpeed(newSpeed) {
//
//         newSpeed = newSpeed + this.maximum_speed;
//
//         console.log(`Мaксимальна швидкість даного автомобіля ${newSpeed} км/год`);
//
//
//     };
//
//
//     changeYear(newValue) {
//
//         let newYear = this.year_of_manufacture;
//
//         newYear = newValue;
//
//         console.log(`Рік випуску даного автомобіля ${newYear}`);
//
//     };
//
//     addDriver(driver) {
//
//         this.driver = driver;
//
//         return this;
//
//     };
// }
//
// let carCharacteristic = new Car("mercedes","Germany",2017,300,4);
//
// console.log(carCharacteristic);
//
// carCharacteristic.drive();
//
// carCharacteristic.info();
//
// carCharacteristic.increaseMaxSpeed(40);
//
// carCharacteristic.changeYear(2020);
//
// const newObject = carCharacteristic.addDriver({name: 'petro', age: '45', status: true});
//
// console.log(newObject);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок..........................................................................................................................................................
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
// let arrayOfCindarella = [];
//
// let cinderellaOne = new Cinderella('Sofi',26,37);
// let cinderellaTwo = new Cinderella('Luci',31,35);
// let cinderellaThree = new Cinderella('Juli',28,41);
// let cinderellaFour = new Cinderella('Ann',31,38);
// let cinderellaFive = new Cinderella('Kate',29,45);
// let cinderellaSix = new Cinderella('Dofi',23,40);
// let cinderellaSeven = new Cinderella('Jane',25,36);
// let cinderellaEight = new Cinderella('Emma',26,39);
// let cinderellaNine = new Cinderella('Sharlotta',26,42);
// let cinderellaTen = new Cinderella('Olivia',26,43);
//
// arrayOfCindarella.push(cinderellaOne, cinderellaTwo, cinderellaThree, cinderellaFour, cinderellaFive, cinderellaSix, cinderellaSeven, cinderellaEight, cinderellaNine, cinderellaTen);
//
// console.log(arrayOfCindarella);
//
// class Prince {
//
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince('William', 30, 36);
//
// console.log(prince);
//
// arrayOfCindarella.forEach(value => {
//
//     if (value.foot_size === prince.foundShoe) {
//
//         console.log(value);
//
//     }
// });
//
// const findCindarella = arrayOfCindarella.find(value => {
//
//     if (value.foot_size === prince.foundShoe) {
//
//         return value;
//
//     }
// });
//
// console.log(findCindarella);