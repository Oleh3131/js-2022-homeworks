

// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// Масив вивести в консоль.


let attributeArray = [];

function counting(someElementOfBody) {

    let someElement = someElementOfBody.children;

    if (someElement.length !== 0) {

        for (const element of someElement) {

            const attribute = element.getAttribute('class');

            if (attribute !== null) {
                
                attributeArray.push(attribute);
                
            } else {

                counting(element);

            }
        }
    }
    return attributeArray
}

const resultArray = counting(document.body);

const stringsArray = resultArray.join(" ").split(" ");

console.log(stringsArray);

const clearArray = [];

for (let someString of stringsArray) {

    if (!clearArray.includes(someString)) {

        clearArray.push(someString);

    }
}

console.log(clearArray);