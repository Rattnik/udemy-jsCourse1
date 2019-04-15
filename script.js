'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
        time = prompt("Введите дату в формате YYYY-MM-DD");

    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expnses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("DONE");
                appData.expnses[a] = b;
            } else {}
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log("Ваш бюджет на 1 день=" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Хороший уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavigns: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма ваших накоплений"),
                precent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * precent;
            console.log("Доход в месяц с вашего депозита: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислете через запиятую)", "");
        while (items === null || items === "") {
            items = prompt("Что принесет дополнительный доход? (Перечислете через запиятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
};