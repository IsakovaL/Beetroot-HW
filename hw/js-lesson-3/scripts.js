// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let num1 = +prompt("enter the first number of range");
let num2 = +prompt("enter the last number of range");
let sum = 0;
 
while(num1 <= num2) {       
       sum += num1;  
       num1++;
    }
 
alert(sum)

// 2 Запросить 2 числа и найти только наибольший общий делитель.

let number1 = +prompt("enter 1st number");// 49
let number2 = +prompt("enter 2nd number");// 7
let i;

if (number1 > number2) {
    i = number2; 
    } else { 
        i = number1; 
        }
while (i < 0) {
    if (number1 % i >= number2 % i) {
alert(i)
    }
}

// // 3 Запросить у пользователя число и вывести все делители этого числа.

 let number = +prompt("enter number");

 for (let i=1; i <= number; i++) {

    if (number % i == 0) {

      alert(i);
    }
  }


// 4 Определить количество цифр в введенном числе.
//123 % 10 =3  12 % 10 = 2  rest =1

let number = 10;
let i = 0;

do {
number = Math.trunc(number / 10);
i++;
} while (number);

console.log(i);


// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной 
// переменной (не 10) для ввода чисел пользователем.

  let positive = 0;
  let negative = 0;
  let zero = 0;
  let even = 0;
  let odd = 0;

for (let i = 0; i <= 9; i++) {
  
  let number = +prompt("enter numbers");

  if (number > 0) {
      positive ++;
    }

  if (number < 0) {
      negative ++;
    }

  if (number == 0) {
      zero ++;
    }

  if (number % 2 > 0) {
     odd ++;
    } else {
     even ++;
    }

}
alert (`positive - ${positive}, negative - ${negative}, even - ${even}, odd - ${odd}`);

// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет 
// ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

while (true) {

  let number1 = +prompt("enter 1st number");
  let number2 = +prompt("enter 2nd number");
  let operation = prompt("enter sign");

  if (operation == "+") {
    alert(number1 + number2);
  }

  if (operation == "-") {
    alert(number1 - number2);
  }

  if (operation == "*") {
    alert(number1 * number2);
  }

  if (operation == "/") {
    alert(number1 / number2);
  } 

  let reply = prompt("do you want to continue? if no - enter 'NO'");

    if(reply == "NO") {
    break;
  }

}

// 7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 
// сдвинуть на 2 цифры, то получится 345612).

let numberString = prompt("enter number");//"123456789"
let shift = +prompt("enter shift"); //3
let movedPart = numberString.substring(0, shift);//123

numberString += movedPart;//"123456789123"
numberString = numberString.substring (shift, numberString.length);
alert(numberString); //456789123

// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

while (true) {

  if (!confirm('Monday. Do you want to see next day of the week?')) {
    break;
  }
  
  if(!confirm('Tuesday. Do you want to see next day of the week?')) {
    break;
  }

  if(!confirm('Wednesday. Do you want to see next day of the week?')) {
    break;
  }

  if(!confirm('Thursday. Do you want to see next day of the week?')) {
    break;
  }

  if(!confirm('Friday. Do you want to see next day of the week?')) {
    break;
  }

  if(!confirm('Saturday. Do you want to see next day of the week?')) {
    break;
  }

  if(!confirm('Sunday. Do you want to see next day of the week?')) {
    break;
  }
}

// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
for ( let i = 2; i <= 9; i++) {

  console.log(`i ${i}`); 

  for ( let j = 1; j <= 10; j++) {
    
  console.log('j', j);
 
    console.log( `${i} * ${j} = ${ i * j}` );
}
}

// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию
//  цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
//  В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
//  Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

let yourNum = prompt("choose number from 0 to 100");

let N;
let topBorder = 100;
let bottom = 0;


while(true) {
  
  N = Math.round((topBorder + bottom) / 2); //50, 
  if (confirm(`Ваше число == ${N} ?`)) {
    alert("End");
    break;
  } 
  
  if(confirm(`Ваше число > ${N} ?`)) {
    bottom = N;
  } else {
    topBorder = N;
  }
}

// рекурсия
// function guessNumber(bottomNumber, topNumber) {

//   let avarageNumber = Math.round((bottomNumber + topNumber) / 2);

//   if(confirm(`is your number == ${avarageNumber}`)) {
//     return avarageNumber;
//   }
//   if(confirm(`is your number > ${avarageNumber}`)) {
//     return guessNumber(avarageNumber, topNumber);
//   } else {
//     return guessNumber(bottomNumber, avarageNumber);
//   }
// }
// let answer = guessNumber(0, 100);
// console.log(answer);

//замыкание 
// function dividerFactory(number) {
//   let divider = number;

//   return function(numberToDivide) {
//     return numberToDivide / divider; 
//   }
// }

// let divider2Function = dividerFactory(2);

// console.log(divider2Function(100));

// let divider3Function = dividerFactory(3);

// console.log(divider3Function(30));