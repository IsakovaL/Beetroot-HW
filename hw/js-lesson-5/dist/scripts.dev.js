"use strict";

//ДЗ: Числа Фібоначі через рекурсію і вивести масив задом наперед. Вивести значення n-ого члену ряду Фібоанчі
arr = [1, 2, 3];
a = arr.reverse();

for (var i = 0; i < a.length; i++) {
  alert(a[i]);
}

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(7)); // 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу 
// товара. Написать следующие функции:
// -Распечатка чека на экран; +
// -Подсчет общей суммы покупки; +
// -Получение самой дорогой покупки в чеке; +
// -Подсчет средней стоимости одного товара в чеке. +

var bill = [];

function addItemToBill(name, price, quantity) {
  var item = [];
  item[0] = name;
  item[1] = price;
  item[2] = quantity;
  bill.push(item);
}

function printItem(item_to_print) {
  console.log("name: ".concat(item_to_print[0], ", price: ").concat(item_to_print[1], ", quantity: ").concat(item_to_print[2], " "));
}

function printBill(billToPrint) {
  for (var _i = 0; _i < billToPrint.length; _i++) {
    printItem(billToPrint[_i]);
  }
}

addItemToBill("apple", "20", "3"); // добавляю товары в bill

addItemToBill("pear", "30", "2");
addItemToBill("salt", "40", "1");
printBill(bill); //Распечатка чека на экран;

function billSum(bill) {
  var sum = 0;

  for (var _i2 = 0; _i2 < bill.length; _i2++) {
    var itemToCount = bill[_i2];
    var calcSum = itemToCount[1] * itemToCount[2];
    sum = sum + calcSum;
  }

  return sum;
}

var totalSum = billSum(bill);
console.log("total sum is ".concat(totalSum)); //Подсчет общей суммы покупки;

console.log("avarage item price is ".concat(totalSum / bill.length)); //Подсчет средней стоимости одного товара в чеке.

function mostExpensiveItem(billToCheck) {
  var most_expensive = 0;

  for (var _i3 = 0; _i3 < billToCheck.length; _i3++) {
    var current_item = billToCheck[_i3];

    if (current_item[1] > most_expensive) {
      most_expensive = current_item[1];
    }
  }

  return most_expensive;
}

var the_most_expensive_item = mostExpensiveItem(bill); //Получение самой дорогой покупки в чеке;

console.log("the most expensive good costs ".concat(the_most_expensive_item));