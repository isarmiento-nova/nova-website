

let navOpenState = false;
const logoGifIn = document.getElementById('logo-gif-in');
const logoGifOut = document.getElementById('logo-gif-out');

/*--------------------------------------------------------------
#  Side navbar
--------------------------------------------------------------*/


function toggleNav() {


  if (navOpenState ) {
    closeNav();
  } else {
    openNav();
  }


}

/* Set the width of the side navigation to 250px */
function openNav() {

  console.log("OPEN");
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0.9)";
  document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 0)";
  // document.getElementById("main").style.marginLeft = "150px";
  document.getElementById("sidenav-logo").style.marginLeft = "35px";

  document.getElementById("sidenav-menu").classList.toggle("change");

  // document.getElementById("sidenav-links").style.display = "flex";


  jQuery(function($) {
    // ...
  $('#logo-img-in').hide();
  $('#logo-gif-in').show();
  // $('#logo-img-out').hide();
  $('#logo-gif-out').hide();
});

  restartLogoGifIn();

  navOpenState = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  console.log("CLOSE");
  document.getElementById("mySidenav").style.width = "60px";
  document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
  document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 1)";
  // document.getElementById("main").style.marginLeft = "60px";
  document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  document.getElementById("sidenav-menu").classList.remove("change");

  // document.getElementById("sidenav-links").style.display = "none";

  
// evitar la animacion cuando presiona el logo pero esta cerrado el navbar
  if (navOpenState) {
    jQuery(function($) {
      // ...
    $('#logo-img-in').hide();
    $('#logo-gif-in').hide();
    // $('#logo-img-out').hide();
    $('#logo-gif-out').show();
  });
  
    restartLogoGifOut();
  }


  navOpenState = false;
}



/*--------------------------------------------------------------
#  Logo animation
--------------------------------------------------------------*/

function restartLogoGifIn(){
  logoGifIn.src=logoGifIn.getAttribute('src');
}

function restartLogoGifOut(){
  logoGifOut.src=logoGifOut.getAttribute('src');
}


$(function() {
  $('#logo-img-in').show();
  $('#logo-gif-in').hide();
  // $('#logo-img-out').hide();
  $('#logo-gif-out').hide();

});


/*--------------------------------------------------------------
#  Change color background
--------------------------------------------------------------*/







$(document).ready(function () {

    var scroll;
    // selectors
    var $window = $("#main"),
        $body = $('body');

    chageColors();


  $("#main").scroll(function() {
    
    chageColors();

  });



  function chageColors() {
        // Change 33% earlier than scroll position so colour is there when you arrive.
        scroll = $window.scrollTop() + ($window.height() / 3);

        // console.log("HEIGTH " + $window.height() );
        // console.log("SCROLL " + scroll );
    
        if (scroll > ($window.height() * 4)) {
          $body.css('background-color', '#5100e7');
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255')
          // document.getElementById("sidenav").style.borderRight = "2px solid white";
          // $("#sidenav-menu").addClass("color-letra-blanco");
          // $("#sidenav-links ul li a").addClass("color-letra-blanco");
          // $("#sidenav-menu").removeClass("color-letra-naranja");
          // $("#sidenav-links ul li a").removeClass("color-letra-naranja");
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (scroll > ($window.height() * 3)) {
          $body.css('background-color', '#fff');
        //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,78,21')
        // document.getElementById("sidenav").style.borderRight = "2px solid #ff4e15";
        // $("#sidenav-menu").removeClass("color-letra-blanco");
        // $("#sidenav-links ul li a").removeClass("color-letra-blanco");
        // $("#sidenav-menu").addClass("color-letra-naranja");
        // $("#sidenav-links ul li a").addClass("color-letra-naranja");
           $(".flecha-top a img").addClass("filtro-flecha-top");

         $("#sidenav-logo img").addClass("color-logo-naranja");
         $("#sidenav-menu div").css('background-color', '#ff4e15');


      } else if (scroll > ($window.height() * 2)) {
          $body.css('background-color', '#ff4e15');
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255')
          // document.getElementById("sidenav").style.borderRight = "2px solid white";
          // $("#sidenav-menu").addClass("color-letra-blanco");
          // $("#sidenav-links ul li a").addClass("color-letra-blanco");
          // $("#sidenav-menu").removeClass("color-letra-naranja");
          // $("#sidenav-links ul li a").removeClass("color-letra-naranja");
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (scroll > ($window.height() * 1)) {
          $body.css('background-color', '#260031');
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255')
          // document.getElementById("sidenav").style.borderRight = "2px solid white";
          // $("#sidenav-menu").addClass("color-letra-blanco");
          // $("#sidenav-links ul li a").addClass("color-letra-blanco");
          // $("#sidenav-menu").removeClass("color-letra-naranja");
          // $("#sidenav-links ul li a").removeClass("color-letra-naranja");
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (scroll > ($window.height() * 0)) {
          $body.css('background-color', '#280250');
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255')
          // document.getElementById("sidenav").style.borderRight = "2px solid white";
          // $("#sidenav-menu").addClass("color-letra-blanco");
          // $("#sidenav-links ul li a").addClass("color-letra-blanco");
          // $("#sidenav-menu").removeClass("color-letra-naranja");
          // $("#sidenav-links ul li a").removeClass("color-letra-naranja");
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      }
  }



});




/*--------------------------------------------------------------
#  
--------------------------------------------------------------*/






