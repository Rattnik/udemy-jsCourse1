'use strict';

let money, time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget : money,
    timeData: time,
    expnses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var answer1, answer2;
answer1 = prompt("Введите обязательную статью расходов в этом месяце");
answer2 = prompt("Во сколько обойдется?");
appData.expnses.answer1=answer2;
answer1 = prompt("Введите обязательную статью расходов в этом месяце");
answer2 = prompt("Во сколько обойдется?");
appData.expnses.answer1=answer2;

console.log("Ваш бюджет на 1 день=" + appData.budget/30);