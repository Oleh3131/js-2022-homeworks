function userCard(someNumber) {

    let card = {balance: 100, transactionLimit: 100, historyLogs: [], key: someNumber};

    if (card.key > 0 && card.key <= 3) {

        card.key = someNumber;

    } else {

        console.log("Key number is invalid!!");

    }

    return {

        getCardOptions() {

            return card;

        },

        putCredits(someMoney) {

            let dayNow = new Date();

            card.historyLogs.push({
                operationType: "Received credits",
                credits: someMoney,
                operationTime: dayNow
            });

            return card.balance = card.balance + someMoney;

        },

        takeCredits(someMoney) {

            let dayNow = new Date();

            if (card.transactionLimit > someMoney && card.balance > someMoney) {

                card.historyLogs.push({
                    operationType: "Withdrawal of credits",
                    credits: someMoney,
                    operationTime: dayNow
                })

                card.balance = card.balance - someMoney;

                console.log(card.balance);

            } else {

                console.error("You have exceeded the withdrawal limit or your account does not have enough money!!!")

            }
        },

        setTransactionLimit(someNumber) {

            let dayNow = new Date();

            if (someNumber > 0) {

                card.historyLogs.push({
                    operationType: "Transaction limit change",
                    credits: someNumber,
                    operationTime: dayNow
                });

                card.transactionLimit = someNumber;

            }
        },

        transferCredits(numberOfCredits, recipient) {

            if (numberOfCredits > 0 && card.balance >= numberOfCredits && card.transactionLimit >= numberOfCredits) {

                let taxes = (numberOfCredits * 0.5) / 100;

                recipient.getCardOptions().balance = recipient.getCardOptions().balance + (card.balance - (numberOfCredits - taxes));

                return recipient.getCardOptions().balance;

            } else {

                return "You have exceeded the withdrawal limit or your account does not have enough money!!!"

            }
        },
    };
}

let userCard2 = userCard(2);

let cardOptions = userCard2.getCardOptions();

console.log(cardOptions);

const putCredits = userCard2.putCredits(200);

console.log(putCredits);

userCard2.takeCredits(80);

userCard2.setTransactionLimit(4000);

let userCard1 = userCard(1);

let transferCredits = userCard2.transferCredits(100, userCard1);

console.log(transferCredits);

// ----------------ОСТАННЯ ПЕРЕВІРКА ЩО МЕТОДИ СПРАЦЬОВУЮТЬ І ДАНІ З КАРТОК НАДХОДЯТЬ І РЕЄСТРУЮТЬСЯ-------------

console.log(userCard2.getCardOptions());

console.log(userCard1.getCardOptions());