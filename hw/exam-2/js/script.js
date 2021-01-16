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