"use strict";

// 1. Создать страницу, которая выводит нумерованный список песен:
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function printList(arr) {
  var newOl = document.createElement('ol');

  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    var textnode = document.createTextNode("".concat(arr[i].song));
    li.appendChild(textnode);
    newOl.appendChild(li);
  }

  var findDiv = document.getElementsByClassName("songs")[0];
  findDiv.appendChild(newOl);
}

;
printList(playList); // 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

var findBtn = document.getElementsByClassName("open-modal")[0];
var modal = $modal();
findBtn.addEventListener('click', function () {
  modal.show();
}); // 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.