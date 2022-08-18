// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.

class BaseComputer {

    constructor(operational_memory, processor_power, computer_name) {
        this.operational_memory = operational_memory;
        this.processor_power = processor_power;
        this.computer_name = computer_name;
    }

    inclusionMethod() {

        console.log("Press the Power button on the top or side of the keyboard panel or or press the Power button on the system unit.");

    }
}

let baseComputer = new BaseComputer(16, 1000, 'Lenovo');

console.log(baseComputer);

baseComputer.inclusionMethod();


// ==========================================================================================================================

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends BaseComputer {

    constructor(operational_memory, processor_power, computer_name, monitor_inch) {
        super(operational_memory, processor_power, computer_name);
        this.monitor_inch = monitor_inch;
    }

    batteryOperation() {

        return this.processor_power / (this.monitor_inch * this.operational_memory);

    }
}

let laptop = new Laptop(16, 1000, 'Lenovo', 27);

console.log(laptop);

const number = laptop.batteryOperation();

console.log(number);


// =================================================================================================================================

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {

    constructor(operational_memory, processor_power, computer_name, monitor_inch, weight) {
        super(operational_memory, processor_power, computer_name, monitor_inch);
        this.weight = weight;
    }

    theDeviceIsTurnedOn() {

        if (this.weight > 2) {
            console.log("The battery will last for less than 4 hours!!!");
        }
    }
}

let ultrabook = new Ultrabook(16, 1000, 'Lenovo', 27, 3);

console.log(ultrabook);

ultrabook.theDeviceIsTurnedOn();


// ==================================================================================================================================

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class BasicPC extends BaseComputer {

    constructor(operational_memory, processor_power, computer_name) {
        super(operational_memory, processor_power, computer_name);
    }

    startingTheGame() {

        console.log("Make sure that all processes are stable and click on the game launcher.");

        return this.processor_power / this.operational_memory;

    }
}

let basicPC = new BasicPC(16, 1000, 'Lenovo');

console.log(basicPC);

const basicPCFPS = basicPC.startingTheGame();

console.log(basicPCFPS);


// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Міняти змінну "в лоб" заборонено.

class Upgrade extends BaseComputer {

    constructor(operational_memory, processor_power, computer_name) {
        super(operational_memory, processor_power, computer_name);
    }

    moreProcessorPower() {

        if (this.processor_power > 0) {

            let newProcessor_power = this.processor_power;

            newProcessor_power = (this.processor_power * 10) / 100;

            console.log(`The power of the processor is increased by ${newProcessor_power} FLOPS`)

        } else {

            console.log(`You cannot reduce the power of the processor!!!`);

        }
    }

    moreOperationalMemory() {

        if (this.operational_memory > 0 && this.operational_memory) {

            let newOperational_memory = this.operational_memory;

            newOperational_memory = this.operational_memory ** 2;

            console.log(`The operational memory has been doubled and equal ${newOperational_memory} Gb!!!`)

        } else {

            console.log(`You cannot reduce the operational memory!!!`);

        }
    }
}

let upgrade = new Upgrade(16, 1000, 'Lenovo');

upgrade.moreProcessorPower();

upgrade.moreOperationalMemory();


// =============================================================================================================================================

// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingPC extends BasicPC {

    constructor(operational_memory, processor_power, computer_name) {
        super(operational_memory, processor_power, computer_name);
    }

    increasingFPS(numberOfFPS) {

        let newNumberOfFPS = numberOfFPS;

        newNumberOfFPS = newNumberOfFPS * 2;

        console.log(`The number of FPS is equal ${newNumberOfFPS}`);

    }

    processorPowerDrop() {

        let newProcessor_power = this.processor_power;

        newProcessor_power = newProcessor_power - (newProcessor_power * 0.1);

        console.log(`CPU power dropped to ${newProcessor_power}`);

        if (newProcessor_power < 500 && this.operational_memory < 8) {

            alert(`На цьому відрі ігри не запускаються(((`)

        }
    }
}

let gamingPC = new GamingPC(4, 500, 'ASUS');

gamingPC.increasingFPS(basicPCFPS);

gamingPC.processorPowerDrop();