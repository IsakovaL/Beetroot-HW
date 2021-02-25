// Initialize and add the map
function initMap() {
    // The location of Uluru
    const bursatski = { lat: 49.994054610112826, lng: 36.22843778462689 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: bursatski,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: bursatski,
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

// -----------Slider-----------



$(document).ready(function(){
 
  $('.reviews__slick-slider').slick({
     	infinite: true,
     	dots: true,
       arrows: false,
     	slidesToShow: 1,
    	slidesToScroll: 1,
     	// responsive: [
    	//     {
     	//       breakpoint: 768,
     	//       settings: {
    	//         slidesToShow: 2,
     	//       }
     	//     },
      //   {
    	//       breakpoint: 480,
     	//       settings: {
    	//         slidesToShow: 1,
     	//       }
     	//     }
      //    ]
     });
  
});
// 
//  -----------form register-----------
function validateFormNameRegister(e) {
  var x = document.forms["myFormRegister"]["form-register-name"].value;
  if (x == "") {
    alert("Имя должно быть заполнено!");
    e.preventDefault();
    return false;
  }
}
function validateFormPhoneRegister(e) {
  var x = document.forms["myFormRegister"]["form-register-phone"].value;
  if (x == "") {
    alert("Телефон должен быть заполнен!");
    e.preventDefault();
    return false;
  }
}

function validateFormEmailRegister(e) {
  var x = document.forms["myFormRegister"]["form-register-email"].value;
  if (x == "") {
    alert("E-mail должен быть заполнен!");
    e.preventDefault();
    return false;
  }

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms["myFormRegister"].elements["form-register-email"].value;
debugger;
  if(reg.test(address) == false) {
     alert('Введите правильный e-mail!');
     e.preventDefault();
     return false;
  }
}


function onSubmit(e) {
  validateFormNameRegister(e);
  validateFormEmailRegister(e);
  validateFormPhoneRegister(e);

}

// ----------form ask--------
function validateFormNameAsk(e) {
  var x = document.forms["myFormAsk"]["form-ask-name"].value;
  if (x == "") {
    alert("Имя должно быть заполнено");
    e.preventDefault();
    return false;
  }
}
function validateFormPhoneAsk(e) {
  var x = document.forms["myFormAsk"]["form-ask-phone"].value;
  if (x == "") {
    alert("Телефон должен быть заполнен");
    e.preventDefault();
    return false;
  }
}

function validateFormEmailAsk(e) {
  var x = document.forms["myFormAsk"]["form-ask-email"].value;
  if (x == "") {
    alert("E-mail должен быть заполнен");
    e.preventDefault();
    return false;
  }

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms["myFormAsk"].elements["form-ask-email"].value;
debugger;
  if(reg.test(address) == false) {
     alert('Введите правильный e-mail');
     e.preventDefault();
     return false;
  }
}


function onSubmit(e) {
  validateFormNameAsk(e);
  validateFormEmailAsk(e);
  validateFormPhoneAsk(e);

}
//-----form pop up-----------

$(document).ready(function(){
  
  let btnAskFirst = $('#btn-ask-first');
  btnAskFirst.on('click', function() {
       let toEnable = $('.form-ask-question-container');
       $(toEnable).css("display","block");
    });

  let btnAskSecond = $('#btn-ask-second');
  btnAskSecond.on('click', function() {
      let toEnable = $('.form-ask-question-container');
      $(toEnable).css("display","block");
    });

  let btnRegisterBanner = $('#btn-start-banner');
  btnRegisterBanner.on('click', function() {
      let toEnable = $('.form-register-container');
      $(toEnable).css("display","block");
    });

  let btnRegisterProgram = $('#btn-start-in-program');
  btnRegisterProgram.on('click', function() {
      let toEnable = $('.form-register-container');
      $(toEnable).css("display","block");
    });
// When the user clicks on <div> (x), close the modal
  let closeReg = $('.close');                  
  closeReg.on('click', function() {
      let closeForm = $('.form-register-container');
      $(closeForm).css("display","none");
    });
// When the user clicks on <div> (x), close the modal
  let closeAsk = $('.close');                  
  closeAsk.on('click', function() {
        let closeForm = $('.form-ask-question-container');
        $(closeForm).css("display","none");
      }); 
});
