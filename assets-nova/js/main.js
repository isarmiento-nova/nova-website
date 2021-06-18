

let navOpenState = false;
const logoGifIn = document.getElementById('logo-gif-in');
const logoGifOut = document.getElementById('logo-gif-out');
const logoGifSobre = document.getElementById('gif-sobre');

/*--------------------------------------------------------------
#  Side navbar
--------------------------------------------------------------*/


function toggleNav() {


  if (navOpenState) {
    closeNav();
  } else {
    openNav();
  }


}


function reportWindowSize() {




  // mostrar el primer carousle elemento
  var carousel01 = document.getElementById("carousel-1");
  carousel01.classList.add("active");
  var carousel02 = document.getElementById("carousel-2");
  carousel02.classList.remove("active");


  // tomar la altura de la imagen de TRANSMEDIA
  var heightDiv = document.getElementById("img-transmedia").offsetWidth;
  // console.log(heightDiv/4);
  // reescalar las letras dependiendo de esa altura
  resizeCharacters(heightDiv / 5);




  var mediaqueryList = window.matchMedia("(orientation:portrait)");

  if (mediaqueryList.matches) {
    // console.log("Size CLOSE portrait");
    document.getElementById("mySidenav").style.height = "50px";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(0,0,0,0)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  }
  else {
    // console.log("Size CLOSE landscape");;
    document.getElementById("mySidenav").style.height = "100%"
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(0,0,0,0)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  }


  document.getElementById("sidenav-menu").classList.remove("change");

  // evitar la animacion cuando presiona el logo pero esta cerrado el navbar
  if (navOpenState) {
    jQuery(function ($) {
      // ...
      // $('#logo-img-in').hide();
      $('#logo-gif-in').hide();
      // $('#logo-img-out').hide();
      $('#logo-gif-out').show();
    });

    restartLogoGifOut();
  }


  navOpenState = false;



}

window.onresize = reportWindowSize;


/* Set the width of the side navigation to 250px */
function openNav() {


  var mediaqueryList = window.matchMedia("(orientation:portrait)");

  if (mediaqueryList.matches) {
    // console.log("OPEN portrait");
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0.9)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 0)";
    document.getElementById("sidenav-logo").style.marginLeft = "10px";

  }
  else {
    // console.log("OPEN landscape");
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0.9)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 0)";
    document.getElementById("sidenav-logo").style.marginLeft = "35px";

  }

  document.getElementById("sidenav-menu").classList.toggle("change");

  jQuery(function ($) {
    // ...
    // $('#logo-img-in').hide();
    $('#logo-gif-in').show();
    // $('#logo-img-out').hide();
    $('#logo-gif-out').hide();
  });

  restartLogoGifIn();

  navOpenState = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {

  var mediaqueryList = window.matchMedia("(orientation:portrait)");

  if (mediaqueryList.matches) {
    // console.log("CLOSE portrait");
    document.getElementById("mySidenav").style.height = "50px";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  }
  else {
    // console.log("CLOSE landscape");
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  }

  document.getElementById("sidenav-menu").classList.remove("change");

  // evitar la animacion cuando presiona el logo pero esta cerrado el navbar
  if (navOpenState) {
    jQuery(function ($) {
      // ...
      // $('#logo-img-in').hide();
      $('#logo-gif-in').hide();
      // $('#logo-img-out').hide();
      $('#logo-gif-out').show();
    });

    restartLogoGifOut();
  }


  navOpenState = false;
}



function initLogo() {

  jQuery(function ($) {
    // ...
    // $('#logo-img-in').hide();
    $('#logo-gif-in').hide();
    // $('#logo-img-out').hide();
    $('#logo-gif-out').show();
  });

  restartLogoGifOut();


}



/*--------------------------------------------------------------
#  Logo animation
--------------------------------------------------------------*/

function restartLogoGifIn() {
  logoGifIn.src = logoGifIn.getAttribute('src');
}

function restartLogoGifOut() {
  logoGifOut.src = logoGifOut.getAttribute('src');
}


$(function () {
  // $('#logo-img-in').show();
  $('#logo-gif-in').hide();
  // $('#logo-img-out').hide();
  $('#logo-gif-out').show();

  restartLogoGifOut();
});


/*--------------------------------------------------------------
#  Change color background
--------------------------------------------------------------*/




var body = document.getElementsByTagName("BODY")[0];
// var body = document.getElementById("c");
function chageColors(index) {

  if (index === 4) {
    body.style.backgroundColor = '#5100e7';
    $(".flecha-top").removeClass("d-none");

    //cambiar color de menu
    document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');

    $(".flecha-top a img").removeClass("filtro-flecha-top");

    $("#sidenav-logo img").removeClass("color-logo-naranja");
    $("#sidenav-menu div").css('background-color', '#fff');

  } else if (index === 3) {

    body.style.backgroundColor = '#260031';
    $(".flecha-top").removeClass("d-none");

    //cambiar color de menu
    document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
    $(".flecha-top a img").removeClass("filtro-flecha-top");

    $("#sidenav-logo img").removeClass("color-logo-naranja");
    $("#sidenav-menu div").css('background-color', '#fff');

  } else if (index === 2) {
    body.style.backgroundColor = '#fff';
    $(".flecha-top").removeClass("d-none");
    //cambiar color de menu
    document.querySelector(':root').style.setProperty('--colorBorde', '255,78,21');
    $(".flecha-top a img").addClass("filtro-flecha-top");

    $("#sidenav-logo img").addClass("color-logo-naranja");
    $("#sidenav-menu div").css('background-color', '#ff4e15');

  } else if (index === 1) {

    body.style.backgroundColor = '#ff4e15';
    $(".flecha-top").removeClass("d-none");

    //cambiar color de menu
    document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
    $(".flecha-top a img").removeClass("filtro-flecha-top");

    $("#sidenav-logo img").removeClass("color-logo-naranja");
    $("#sidenav-menu div").css('background-color', '#fff');

  } else if (index === 0) {
    body.style.backgroundColor = '#280250';
    $(".flecha-top").addClass("d-none");
    $(".icon-whatsapp").css("right", "1.5%");
    //cambiar color de menu
    document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');

    $("#sidenav-logo img").removeClass("color-logo-naranja");
    $("#sidenav-menu div").css('background-color', '#fff');
  }
}




// propiedades de index: 
// {
//   "anchor": "inicio",
//   "item": {},
//   "index": 0,
//   "isLast": false,
//   "isFirst": true
// }

var myFullpage = new fullpage('#fullpage', {
  //sectionsColor: ['#00000000', '#00000000', '#00000000', '#00000000', '#00000000'],
  anchors: ['inicio', 'nosotros', 'portafolio', 'experiencia', 'contacto'],
  menu: '#menu',
  continuousVertical: false,
  afterLoad: function (anchorLink, index) {
    // console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
    // console.log(JSON.stringify(index, null, 4));


  },
  onLeave: function (index, nextIndex, direction) {
    // console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);
    // console.log(JSON.stringify(index, null, 4));

    //NOVA
    //NOVA
    //NOVA
    //NOVA

    chageColors(nextIndex.index);

    // play gif sobre
    if (nextIndex.index === 4) {
      logoGifSobre.src = logoGifSobre.getAttribute('src');
    }
  },
});









/*--------------------------------------------------------------
#                       Transicion entre paginas
--------------------------------------------------------------*/


window.transitionToPage = function (href, colorNextPage) {
  document.querySelector('body').style.opacity = 0;
  document.querySelector('body').style.backgroundColor = colorNextPage;
  setTimeout(function () {
    window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').style.opacity = 1
})

/*--------------------------------------------------------------
#                      Carousel
--------------------------------------------------------------*/

// Oculta los botones anterior - siguiente de la primera y ultima diapositiva

var totalItems = $('#carousel .carousel-item').length;
var currentIndex = $('#carousel .carousel-item.active').index() + 1;

$('#carousel .carousel-control-prev').addClass('d-none');

$('#carousel').on('slid.bs.carousel', function () {
  currentIndex = $('#carousel .carousel-item.active').index() + 1;
  if (currentIndex == totalItems) {
    $('#carousel .carousel-control-next').addClass('d-none');
    $('#carousel .carousel-control-prev').removeClass('d-none');
    console.log(currentIndex)
  } else {
    $('#carousel .carousel-control-prev').addClass('d-none');
    $('#carousel .carousel-control-next').removeClass('d-none');
  }
});

var totalItems2 = $('#carousel-portafolio .carousel-item').length;
var currentIndex2 = $('#carousel-portafolio .carousel-item.active').index() + 1;
$('#carousel-portafolio .carousel-control-prev').addClass('d-none');
$('buttons-portafolio').addClass('buttons-portafolio-orange');

$('#carousel-portafolio').on('slid.bs.carousel', function () {
  currentIndex2 = $('#carousel-portafolio .carousel-item.active').index() + 1;
  if (currentIndex2 == totalItems2) {
    $('#carousel-portafolio .carousel-control-next').addClass('d-none');
    $('#carousel-portafolio .carousel-control-prev').removeClass('d-none');
    $('#buttons-portafolio').addClass('buttons-portafolio-white');
    $('#buttons-portafolio').removeClass('buttons-portafolio-orange');

    console.log(currentIndex2)
  } else {
    $('#carousel-portafolio .carousel-control-prev').addClass('d-none');
    $('#carousel-portafolio .carousel-control-next').removeClass('d-none');
    $('#buttons-portafolio').removeClass('buttons-portafolio-white');
    $('#buttons-portafolio').addClass('buttons-portafolio-orange');

  }
});
/*--------------------------------------------------------------
#                      Contactenos
--------------------------------------------------------------*/

// Detiene animación del botón contactenos

$(".container-mail a").hover(function () {
  $('.container-mail').css("transform", "scale(1.09)");
}, function () {
  $('.container-mail').css("transform", "none");
});















