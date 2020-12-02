// 1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = +prompt("enter your age");

if (age >= 0 && age <= 2) {
    alert("you are child")
} else if (age >=12 && age <= 18) {
    alert("you are teenager")
} else if (age >= 18 && age < 60) {
    alert("you are adult")
} else if (age >= 60) {
    alert("you are retired")
} else {
    alert("thank you! go to another question")
}
// 2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = +prompt("enter number from 0 to 9");

switch(number) {
    case 0: alert(")");
       break;
    case 1: alert("!");
        break;
    case 2: alert("@");
        break;
    case 3: alert("#");
        break;
    case 4: alert("$");
        break;
    case 5: alert("%");
        break;
    case 6: alert("^");
        break;
    case 7: alert("&");
        break;
    case 8: alert("*");
        break;
    case 9: alert("(");
        break;
}

// 3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.



// 4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = prompt("enter year");

if (year % 100 == 0 && year % 400 == 0 ) {
            alert('this year is leap');
    } else if (year % 4 == 0 && year % 100 > 0) {
            alert('this year is leap');
    } else if (year % 100 == 0) {
            alert('this year is not leap');
    } else {
            alert('this year is not leap');
}

// 5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let amount = prompt("Enter the amount of USD:");
let currency = prompt("EUR = 1, UAH = 2, AZN = 3");

switch(currency) {
    case '1': console.log(amount*0.83 + 'EUR');
         break;
    case '2': console.log(amount*28,57 + 'UAH');
        break;
    case '3': console.log(amount*1.70 + 'AZN');
        break;
    }

// 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let price = prompt('Enter the price');
    if (price >= 200 && price < 300)
        alert(price / 100 * 97, ' 3% discount');
    else if (price >= 300 && amount < 500)
        alert(price / 100*95, ' 5% discount');
    else if (price >= 500)
        alert(price / 100 * 93, ' 7% discount');

// 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let okrujnost = prompt('enter dlinu okrujnosti');
let P = prompt('enter P of square');
if ()

// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год