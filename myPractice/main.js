


let friends = [

    { name: 'John', age: 22,status:false },
    { name: 'Peter', age: 23,status:true },
    { name: 'Mark', age: 24,status:false },
    { name: 'Maria', age: 22,status:true },
    { name: 'Monica', age: 21,status:true },
    { name: 'Martha', age: 19 ,status:false}

]


function separstor(array) {

    let filteredArray = [];

    for (let friend of array) {

        if (friend.age <= 22) {

            filteredArray[filteredArray.length] = friend;

        } else {

            console.log('That is all for now')

        }

    }

    return filteredArray;

}

let separstor1 = separstor(friends);

console.log(separstor1)


function ageFiltration(array,isFiltration) {

    let someArray = [];

    for (const friend of array) {

        if (isFiltration(friend)) {

            someArray.push(friend);

        } else {

            console.log("Some objects")

        }

    }

    return someArray;

}

let ageFiltration1 = ageFiltration(friends, (friend) => friend.age>=20 );

console.log(ageFiltration1);