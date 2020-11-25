// // 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let name = prompt("write your name");
alert('your name is ' + name);

// 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
let userYear = prompt("write  your birth year");
const currntYear = 2020;
let result = currntYear - userYear;
alert('your age is '  + result);

// 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let sqLenghth = prompt("write square lenghth");
alert('P = ' + sqLenghth * 4);

// 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let radius = prompt("enter circle radius")
const ploshad = 3.14;
alert(ploshad * radius ** 2);

// 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// 6 Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let usd = prompt('enter usd ammount');
const euroCoef = 0.84;
let res = usd * euroCoef;
alert(res);

// 7 Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

// 8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
let total = prompt('enter how much money do yo have');
let chocolate = prompt('enter the price of the chocolade');
let amount = Math.floor(total / chocolate);
console.log("Math.floor()", amount);
console.log("Math.trunc()", Math.trunc(total / chocolate));
console.log("Math.round()", Math.round(total / chocolate));
console.log("Math.ceil()", Math.ceil(total / chocolate));
let change = total % chocolate;
console.log('change is ' + change);

// 9 Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// 10 Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
