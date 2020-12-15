//ДЗ: Числа Фібоначі через рекурсію і вивести масив задом наперед. Вивести значення n-ого члену ряду Фібоанчі

arr = [1,2,3]

a = arr.reverse(); 

for(var i=0; i < a.length; i++) {

  alert(a[i]); 

}


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  console.log( fib(3) ); 
  console.log( fib(7) );


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу 
// товара. Написать следующие функции:

// -Распечатка чека на экран; +
// -Подсчет общей суммы покупки; +
// -Получение самой дорогой покупки в чеке; +
// -Подсчет средней стоимости одного товара в чеке. +

let bill = [];

function addItemToBill(name, price, quantity) {

    let item = [];

    item[0] = name;
    item[1] = price;
    item[2] = quantity;

    bill.push(item);
}

function printItem(item_to_print) {

console.log(`name: ${item_to_print[0]}, price: ${item_to_print[1]}, quantity: ${item_to_print[2]} `);

}

function printBill(billToPrint) {
  
    for(let i=0; i < billToPrint.length; i++) {
        printItem(billToPrint[i]);
    }
}

addItemToBill("apple", "20", "3"); // добавляю товары в bill
addItemToBill("pear", "30", "2");
addItemToBill("salt", "40", "1");

printBill(bill); //Распечатка чека на экран;

function billSum(bill) { 
    let sum = 0; 

    for(let i = 0; i < bill.length; i++ ) {
      let itemToCount = bill[i];
      let calcSum = itemToCount[1] * itemToCount[2];
      sum = sum + calcSum;
    }

    return sum;
}

let totalSum = billSum(bill);

console.log(`total sum is ${totalSum}`); //Подсчет общей суммы покупки;

console.log(`avarage item price is ${totalSum / bill.length}`); //Подсчет средней стоимости одного товара в чеке.

function mostExpensiveItem(billToCheck) {

  let most_expensive = 0;

  for(let i = 0; i < billToCheck.length; i++) {

    let current_item = billToCheck[i];

    if(current_item[1] > most_expensive) {

      most_expensive = current_item[1];
    }
  }
  return most_expensive;
}

let the_most_expensive_item = mostExpensiveItem(bill); //Получение самой дорогой покупки в чеке;

console.log(`the most expensive good costs ${the_most_expensive_item}`);



