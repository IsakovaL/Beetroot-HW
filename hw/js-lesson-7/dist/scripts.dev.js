"use strict";

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:
var renault = {
  developer: "Reanult",
  model: "Fourgon Type AX",
  year: "1911",
  speed: "55"
}; // --Функция для вывода на экран информации об автомобиле;

function showInfo(car) {
  console.log(car.developer);
  console.log(car.model);
  console.log(car.year);
  console.log(car.speed);
}

;
showInfo(renault); // --Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги 
//водителю необходимо делать перерыв на 1 час.
// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 
// --Функция сложения 2-х объектов-дробей;
// --Функция вычитания 2-х объектов-дробей;
// --Функция умножения 2-х объектов-дробей;
// --Функция деления 2-х объектов-дробей;
// --Функция сокращения объекта-дроби.
// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

var time = [{
  hour: 9,
  minutes: 20,
  seconds: 45
}]; //-- Функция вывода времени на экран;
//-- Функция изменения времени на переданное количество секунд;
//-- Функция изменения времени на переданное количество минут;
//-- Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
//Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
// 4. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество 
//и куплен или нет. Написать несколько функций для работы с таким массивом.

var shoppingList = [{
  product: "apple",
  ammount: 3,
  bought: true
}, {
  product: "plum",
  ammount: 4,
  bought: false
}, {
  product: "pear",
  ammount: 5,
  bought: true
}, {
  product: "melon",
  ammount: 1,
  bought: false
}]; // --Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function filterByStatus(arr, status) {
  var newArrOrder = arr.filter(function (item) {
    return item.bought == status;
  });
  return newArrOrder;
}

;
var notBought = filterByStatus(shoppingList, false);
var bought = filterByStatus(shoppingList, true);
console.log(notBought);
console.log(bought); // --Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество
// в существующей покупке, а не добавлять новую.
// --Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
// 5. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, 
//состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит 
//этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

var style = [{
  propertyName: color,
  propertyValue: red
}, {
  propertyName: font - size,
  propertyValue: 20
}];

function textStyle(style, text) {
  var string = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = style[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      string += "".concat(element.propertyName, ":").concat(element.propertyValue);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(string);
  document.write("<p style=${string}>${text}</p>");
}

textStyle(style, askdasdlkasdjl); // 6. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она 
//предназначена. Написать несколько функций для работы с ним^

var rooms = [{
  name: "English",
  seats: 15,
  faculty: "English faculty"
}, {
  name: "Math",
  seats: 18,
  faculty: "Math faculty"
}, {
  name: "Science",
  seats: 15,
  faculty: "science faculty"
}, {
  name: "Economics",
  seats: 15,
  faculty: "Economics faculty"
}]; // --Вывод на экран всех аудиторий;

function showRooms(arr) {
  arr.forEach(function (item) {
    console.log(item.name);
  });
}

showRooms(rooms); // --Вывод на экран аудиторий для указанного факультета;

function filterByFaculty(facultyNAme, arr) {
  var newArrFaculty = arr.filter(function (item) {
    return item.faculty == facultyNAme;
  });
  return newArrFaculty;
}

;
var res = filterByFaculty("Economics faculty", rooms); // --Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// --Функция сортировки аудиторий по количеству мест;
// --Функция сортировки аудиторий по названию (по алфавиту)