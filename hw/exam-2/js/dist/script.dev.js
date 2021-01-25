"use strict";

// $('.single-item').slick();
$(document).ready(function () {
  $('.slick-slider').slick({
    // infinite: true,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000
  });
});
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  buttons: ["close"]
});
$('.buildings-btn').on('click', function () {
  var toDisable = $('.apartment');
  toDisable.toArray().forEach(function (element) {
    $(element).hide();
  });
  var toEnable = $('.building');
  toEnable.toArray().forEach(function (element) {
    $(element).show();
  });
});
$('.apt-btn').on('click', function () {
  var toDisable = $('.building');
  toDisable.toArray().forEach(function (element) {
    $(element).hide();
  });
  var toEnable = $('.apartment');
  toEnable.toArray().forEach(function (element) {
    $(element).show();
  });
});
$('.nav__link').on('click', function () {
  var section = $(this).attr('href');
  var top = $(section).offset().top - 100;
  $('html, body').animate({
    scrollTop: top
  }, 1500);
});
$('.up').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500);
}); // Initialize and add the map

function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  }; // The map, centered at Uluru

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
} //  -----------form-----------


function validateFormName(e) {
  var x = document.forms["myForm"]["form-name"].value;

  if (x == "") {
    alert("Name must be filled out");
    e.preventDefault();
    return false;
  }
}

function validateFormEmail(e) {
  var x = document.forms["myForm"]["form-email"].value;

  if (x == "") {
    alert("E-mail must be filled out");
    e.preventDefault();
    return false;
  }

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms["myForm"].elements["form-email"].value;
  debugger;

  if (reg.test(address) == false) {
    alert('Enter correct e-mail');
    e.preventDefault();
    return false;
  }
}

function onSubmit(e) {
  validateFormName(e);
  validateFormEmail(e);
}