"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 
var Circle =
/*#__PURE__*/
function () {
  function Circle(R) {
    _classCallCheck(this, Circle);

    this.R = R;
  }

  _createClass(Circle, [{
    key: "circleArea",
    value: function circleArea() {
      return Math.PI * this.R * this.R; //S = π * r2
    }
  }, {
    key: "circumference",
    value: function circumference() {
      return Math.PI * this.R * 2; //метод, вычисляющий длину окружности. - найти удвоенное произведение радиуса и числа π.
    }
  }, {
    key: "radius",
    get: function get() {
      return this.R;
    },
    set: function set(R) {
      this.R = R;
    }
  }, {
    key: "d",
    get: function get() {
      return this.R * 2;
    }
  }]);

  return Circle;
}();

var circle = new Circle(150);
console.log(circle.radius);
console.log(circle.d);
console.log(circle.circleArea());
console.log(circle.circumference()); // 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила;
// один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 

var marker = function marker(color, inkP) {
  _classCallCheck(this, marker);

  this.color = color;
  this.inkP = inkP;
}; // 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать 
// через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().