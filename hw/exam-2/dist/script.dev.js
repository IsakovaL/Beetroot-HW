"use strict";

// $('.single-item').slick();
$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
});