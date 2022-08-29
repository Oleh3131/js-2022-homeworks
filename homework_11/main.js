

// 1)Розв'язок через promise------------------------------------------------------------------------



let money = 200;
let moneyBalances;
let goToCleanTeeth;
let breakfast;
let timeToWakeUp = 6.30;
let timeToLeave;
let atWork;

function wakeUp(status, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status && time === 6.30) {

                console.log('Я встигаю на роботу');
                goToCleanTeeth = true;
                resolve(goToCleanTeeth);

            } else {

                console.log('Я проспав роботу!!!');
                reject('Це ж треба було так погуляти вчора!!!');

            }
        }, Math.round(Math.random() * (2500 - 400) + 400))
    });
}

function brushTeeth(goToCleanTeeth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (goToCleanTeeth) {

                console.log('Я матиму чисті зуби');
                breakfast = true;
                timeToLeave = 7.20;
                resolve(breakfast);

            } else {
                console.log("Пропала вода");
                reject("Сьогодні не мій день(((");
            }

        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}

function haveBreakfast(status, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status && time ===7.20) {

                console.log('Смачний був сніданок');
                resolve(time);

            } else {

                console.log('Немає газу та світла');
                reject("Голод дастья взнаки");

            }
        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}

function roadToWork(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 7.20) {

                console.log('Їду на роботу автобусом');
                moneyBalances = money-40;
                resolve(atWork=true);

            }else {

                console.log('Транспорту немає адже погода штормова');
                reject("Прийдеться лишатись дома");

            }
        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}
function myWork(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {

                console.log('День буде продуктивний і по графіку');
                resolve(true);

            } else {

                console.log('Від роботи голова іде обертом');
                reject("Коли уже закінчиться день");

            }
        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}

function purchaseOfProducts(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyBalances>120) {
                moneyBalances-=120
                console.log('Товарів на любий вибір');
                resolve(moneyBalances);

            } else {

                console.log('Грошей не хватить, поїду дому');
                reject("Треба зняти грошей");

            }
        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}

function goHome(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money<=40) {
                money-=40
                console.log('Нарешті дома');
                resolve("Хуууух");

            } else {
                money-=40
                console.log('Надіюся завтра буде кращий день');
                reject(money);

            }
        }, Math.round(Math.random() * (2500 - 400) + 400));
    })
}


// wakeUp(true, timeToWakeUp)
//     .then(value => {
//         console.log("---Wake up---")
//
//         return brushTeeth(value)
//     })
//     .then(status => {
//
//         console.log("---Brush teeth---")
//
//         return haveBreakfast(status, timeToLeave)
//     })
//     .then(time => {
//
//         console.log("---Breakfast---")
//
//         return roadToWork(time);
//     })
//     .then(status => {
//
//         console.log("---Road to work---")
//
//         return myWork(status)
//     })
//     .then(status => {
//
//         console.log("---Work---")
//
//         return purchaseOfProducts(status);
//
//     })
//     .then(money => {
//
//         console.log("---Shop---");
//
//         return goHome(money);
//     })
//     .then(string => {
//
//         console.log("---Home---")
//
//     })
//     .catch(reason => {
//
//         console.warn('Це погано', reason);
//
//     })
// .finally(()=>{
//
//     console.log('Який не який день, а що маємо то маємо)))')
//
// })


//ЯКЩО ЗМІНИМО ЧАС ПРОКИДАННЯ з wakeUp(true, timeToWakeUp) ------> до wakeUp(true, 6.50) ,ТО ВІДЛОВИМО ПОМИЛКУ;



// ----------------------------------------------------------------------------------------------------------------------------------------


// 2)Розв'язок через async await--------------------------------------------------------------------------


// async function myDay() {
//
//     try {
//
//         const statusOfWakeUp = await wakeUp(true, timeToWakeUp);
//         console.log("---Wake up---")
//
//         const statusOfBrushTeeth = await brushTeeth(statusOfWakeUp);
//         console.log("---Brush teeth---")
//
//         const timeOfHaveBreakfast = await haveBreakfast(statusOfBrushTeeth, timeToLeave);
//         console.log("---Breakfast---")
//
//         const statusOfRoadToWork = await roadToWork(timeOfHaveBreakfast);
//         console.log("---Road to work---")
//
//         const statusOfMyWork =await myWork(statusOfRoadToWork);
//         console.log("---Work---")
//
//         const moneyOfPurchaseOfProducts =await purchaseOfProducts(statusOfMyWork);
//         console.log("---Shop---");
//
//         const stringOfGoHome = await goHome(moneyOfPurchaseOfProducts);
//         console.log("---Home---")
//
//     } catch (e){
//         console.warn('Це погано', e);
//     }
// }
//
// myDay();



