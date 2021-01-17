// $('.single-item').slick();
$(document).ready(function(){
    $('.slick-slider').slick({
        // infinite: true,
        // dots:true,
        arrows:false,
        autoplay:true,
      
      autoplaySpeed:1000
    });
  });


  $('[data-fancybox="gallery"]').fancybox({
	loop: true,
    buttons: [
    "close"
  ],
});



$('.nav__link').on('click', function(){
  let section = $(this).attr('href')
  let top = $(section).offset().top - 100
  $('html, body').animate({
    scrollTop: top
  }, 1000)
   
})

$('.up').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000)
})

 // Initialize and add the map
 function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
