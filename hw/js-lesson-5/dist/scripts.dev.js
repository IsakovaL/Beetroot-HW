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
console.log(fib(7)); // 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// -Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// -Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать 
// количество в существующей покупке, а не добавлять новую.
// -Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу 
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

console.log("the most expensive good costs ".concat(the_most_expensive_item)); // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, 
// состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит 
// этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными 
//в массиве.
// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. Написать несколько функций для работы с ним
// -Вывод на экран всех аудиторий;
// -Вывод на экран аудиторий для указанного факультета;
// -Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета;
// -Функция сортировки аудиторий по количеству мест;
// -Функция сортировки аудиторий по названию (по алфавиту).