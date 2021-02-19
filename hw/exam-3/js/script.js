// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.994054610112826, lng: 36.22843778462689 };
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
  // -----------Accordion-------
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ----------Fancybox----------
$('[data-fancybox="gallery"]').fancybox({
	loop: true,
    buttons: [
      
    "close"
  ],
});

//-----------Slider-----------
// $('.reviews__slick-slider').slick();

// $('.reviews__slick-slider').slick({
//   infinite: true,
//   dots: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });
$('.reviews__slick-slider').slick({
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});