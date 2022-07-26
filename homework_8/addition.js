// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// const attributesOfTagA = [
//     {
//         titleOfAttr: 'href',
//         actionOfAttr: 'Задает адрес документа, на который следует перейти'
//     },
//     {
//         titleOfAttr: 'target',
//         actionOfAttr: 'По умолчанию, при переходе по ссылке документ открывается в текущем окне или фрейме'
//     },
//     {
//         titleOfAttr: 'name',
//         actionOfAttr: 'Атрибут name используется для определения якоря внутри страницы'
//     }
// ];
//
// const attributesOfTagDiv = [
//     {
//         titleOfAttr: 'align',
//         actionOfAttr: 'Выравнивание содержимого контейнера <div> по краю'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом'
//     }
// ];
//
// const attributesOfTagH1 = [
//     {
//         titleOfAttr: 'align',
//         actionOfAttr: 'Выравнивание заголовка текста по краю'}
// ];
//
// const attributesOfTagSpan = [
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//     },
//     {
//         titleOfAttr: 'hidden',
//         actionOfAttr: 'Скрывает содержимое элемента от просмотра'
//     }
// ];
//
// const attributesOfTagInput = [
//     {
//         titleOfAttr: 'form',
//         actionOfAttr: 'Связывает поле с формой по её идентификатору'
//     },
//     {
//         titleOfAttr: 'value',
//         actionOfAttr: 'Определяет значение элемента формы, которое будет отправлено на сервер или получено с помощью клиентских скриптов'
//     },
//     {
//         titleOfAttr: 'list',
//         actionOfAttr: 'Указывает на список вариантов, созданный с помощью тега <datalist>, которые можно выбирать при наборе текста'
//     },
// ];
//
// const attributesOfTagForm = [
//     {
//         titleOfAttr: 'action',
//         actionOfAttr: 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер'
//     },
//     {
//         titleOfAttr: 'target',
//         actionOfAttr: 'После того, как обработчик формы получает данные, он возвращает результат в виде HTML-документа'
//     },
//     {
//         titleOfAttr: 'name',
//         actionOfAttr: 'Определяет уникальное имя формы'
//     },
// ];
//
// const attributesOfTagOption = [
//     {
//         titleOfAttr: 'value',
//         actionOfAttr: 'Определяет значение пункта списка, которое будет отправлено на сервер'
//     },
//     {
//         titleOfAttr: 'disabled',
//         actionOfAttr: 'Блокирует элемент списка для его выбора'
//     },
//     {
//         titleOfAttr: 'label',
//         actionOfAttr: 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <option>'
//     },
// ];
//
// const attributesOfTagSelect = [
//     {
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Атрибут accesskey позволяет перейти к списку с помощью некоторого сочетания клавиш с заданной в атрибуте буквой или цифрой'
//     },
//     {
//         titleOfAttr: 'size',
//         actionOfAttr: 'Устанавливает высоту списка'
//     },
//     {
//         titleOfAttr: 'autofocus',
//         actionOfAttr: 'Атрибут autofocus устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры'
//     },
// ];
//
//
// function DescriptionSomeTag(titleOfTag, action, attrs) {
//
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// const tagArray = [];
//
// let descriptionSomeTagA = new DescriptionSomeTag("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок", attributesOfTagA);
// let descriptionSomeTagDiv = new DescriptionSomeTag("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого", attributesOfTagDiv);
// let descriptionSomeTagH1 = new DescriptionSomeTag("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка", attributesOfTagH1);
// let descriptionSomeTagSpan = new DescriptionSomeTag("span", "Тег <span> предназначен для определения строчных элементов документа", attributesOfTagSpan);
// let descriptionSomeTagInput = new DescriptionSomeTag("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем", attributesOfTagInput);
// let descriptionSomeTagForm = new DescriptionSomeTag("form", "Тег <form> устанавливает форму на веб-странице", attributesOfTagForm);
// let descriptionSomeTagOption = new DescriptionSomeTag("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>", attributesOfTagOption);
// let descriptionSomeTagSelect = new DescriptionSomeTag("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором", attributesOfTagSelect);
//
// tagArray.push(descriptionSomeTagA, descriptionSomeTagDiv, descriptionSomeTagH1, descriptionSomeTagSpan, descriptionSomeTagInput, descriptionSomeTagForm, descriptionSomeTagOption, descriptionSomeTagSelect);
//
// console.log(tagArray);


// ==================================================================================================================================================================================================================================


// ==================================================================================================================================================================================================================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// const attributesOfTagA = [
//     {
//         titleOfAttr: 'href',
//         actionOfAttr: 'Задает адрес документа, на который следует перейти'
//     },
//     {
//         titleOfAttr: 'target',
//         actionOfAttr: 'По умолчанию, при переходе по ссылке документ открывается в текущем окне или фрейме'
//     },
//     {
//         titleOfAttr: 'name',
//         actionOfAttr: 'Атрибут name используется для определения якоря внутри страницы'
//     }
// ];
//
// const attributesOfTagDiv = [
//     {
//         titleOfAttr: 'align',
//         actionOfAttr: 'Выравнивание содержимого контейнера <div> по краю'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом'
//     }
// ];
//
// const attributesOfTagH1 = [
//     {
//         titleOfAttr: 'align',
//         actionOfAttr: 'Выравнивание заголовка текста по краю'}
// ];
//
// const attributesOfTagSpan = [
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//     },
//     {
//         titleOfAttr: 'hidden',
//         actionOfAttr: 'Скрывает содержимое элемента от просмотра'
//     }
// ];
//
// const attributesOfTagInput = [
//     {
//         titleOfAttr: 'form',
//         actionOfAttr: 'Связывает поле с формой по её идентификатору'
//     },
//     {
//         titleOfAttr: 'value',
//         actionOfAttr: 'Определяет значение элемента формы, которое будет отправлено на сервер или получено с помощью клиентских скриптов'
//     },
//     {
//         titleOfAttr: 'list',
//         actionOfAttr: 'Указывает на список вариантов, созданный с помощью тега <datalist>, которые можно выбирать при наборе текста'
//     },
// ];
//
// const attributesOfTagForm = [
//     {
//         titleOfAttr: 'action',
//         actionOfAttr: 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер'
//     },
//     {
//         titleOfAttr: 'target',
//         actionOfAttr: 'После того, как обработчик формы получает данные, он возвращает результат в виде HTML-документа'
//     },
//     {
//         titleOfAttr: 'name',
//         actionOfAttr: 'Определяет уникальное имя формы'
//     },
// ];
//
// const attributesOfTagOption = [
//     {
//         titleOfAttr: 'value',
//         actionOfAttr: 'Определяет значение пункта списка, которое будет отправлено на сервер'
//     },
//     {
//         titleOfAttr: 'disabled',
//         actionOfAttr: 'Блокирует элемент списка для его выбора'
//     },
//     {
//         titleOfAttr: 'label',
//         actionOfAttr: 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <option>'
//     },
// ];
//
// const attributesOfTagSelect = [
//     {
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Атрибут accesskey позволяет перейти к списку с помощью некоторого сочетания клавиш с заданной в атрибуте буквой или цифрой'
//     },
//     {
//         titleOfAttr: 'size',
//         actionOfAttr: 'Устанавливает высоту списка'
//     },
//     {
//         titleOfAttr: 'autofocus',
//         actionOfAttr: 'Атрибут autofocus устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры'
//     },
// ];
//
// class DescriptionSomeTag {
//
//     constructor (titleOfTag, action, attrs) {
//
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
//
// const tagArray = [];
//
// let descriptionSomeTagA = new DescriptionSomeTag("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок", attributesOfTagA);
// let descriptionSomeTagDiv = new DescriptionSomeTag("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого", attributesOfTagDiv);
// let descriptionSomeTagH1 = new DescriptionSomeTag("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка", attributesOfTagH1);
// let descriptionSomeTagSpan = new DescriptionSomeTag("span", "Тег <span> предназначен для определения строчных элементов документа", attributesOfTagSpan);
// let descriptionSomeTagInput = new DescriptionSomeTag("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем", attributesOfTagInput);
// let descriptionSomeTagForm = new DescriptionSomeTag("form", "Тег <form> устанавливает форму на веб-странице", attributesOfTagForm);
// let descriptionSomeTagOption = new DescriptionSomeTag("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>", attributesOfTagOption);
// let descriptionSomeTagSelect = new DescriptionSomeTag("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором", attributesOfTagSelect);
//
// tagArray.push(descriptionSomeTagA, descriptionSomeTagDiv, descriptionSomeTagH1, descriptionSomeTagSpan, descriptionSomeTagInput, descriptionSomeTagForm, descriptionSomeTagOption, descriptionSomeTagSelect);
//
// console.log(tagArray);


// ================================================================================================================================================================================
//
//
//
// ===================================================================================================================================================================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//
//     model: "mercedes",
//     manufacturer: "Germany",
//     year_of_manufacture: 2017,
//     maximum_speed: 300,
//     volume: 4,
//
//     drive() {
//
//         console.log(`Їдемо зі швидкістю ${this.maximum_speed} на годину`);
//
//     },
//
//     info() {
//
//         console.log(`model - ${this.model},manufacturer - ${this.manufacturer},year of manufacture - ${this.year_of_manufacture},maximum speed - ${this.maximum_speed},volume - ${this.volume}`);
//
//     },
//
//     increaseMaxSpeed(newSpeed) {
//
//         newSpeed = newSpeed + this.maximum_speed;
//
//         console.log(`Мaксимальна швидкість даного автомобіля ${newSpeed} км/год`);
//
//     },
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
//     },
//
//     addDriver(driver) {
//
//         this.driver = driver;
//
//         return this;
//
//     },
// }
//
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2021);
//
// const addDriver = car.addDriver({name: 'petro', age: '45', status: true});
//
// console.log(addDriver);





// ===================================================================================================================================================
//
//     CLASS
//
//     =================================================================================================================================================

//  - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

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



// ====================================================================================================================================================
//
//
// =====================================================================================================================================================