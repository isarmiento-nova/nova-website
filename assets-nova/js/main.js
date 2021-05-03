

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
  document.getElementById("mySidenav").style.width = "150px";
 document.getElementById("main").style.marginLeft = "150px";
 document.getElementById("sidenav-logo").style.marginLeft = "0px";

  document.getElementById("sidenav-menu").style.display = "none";
  document.getElementById("sidenav-links").style.display = "flex";


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
  document.getElementById("main").style.marginLeft = "60px";
  document.getElementById("sidenav-logo").style.marginLeft = "22px";

  document.getElementById("sidenav-menu").style.display = "flex";
  document.getElementById("sidenav-links").style.display = "none";

  
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
          document.getElementById("sidenav").style.borderRight = "2px solid white";
          $("#sidenav-menu").addClass("color-letra-blanco");
          $("#sidenav-links ul li a").addClass("color-letra-blanco");
          $("#sidenav-menu").removeClass("color-letra-naranja");
          $("#sidenav-links ul li a").removeClass("color-letra-naranja");

          $("#sidenav-logo img").removeClass("color-logo-naranja");



      } else if (scroll > ($window.height() * 3)) {
          $body.css('background-color', '#fff');
        //cambiar color de menu
        document.getElementById("sidenav").style.borderRight = "2px solid #ff4e15";
        $("#sidenav-menu").removeClass("color-letra-blanco");
        $("#sidenav-links ul li a").removeClass("color-letra-blanco");
        $("#sidenav-menu").addClass("color-letra-naranja");
        $("#sidenav-links ul li a").addClass("color-letra-naranja");

        $("#sidenav-logo img").addClass("color-logo-naranja");


      } else if (scroll > ($window.height() * 2)) {
          $body.css('background-color', '#ff4e15');
          //cambiar color de menu
          document.getElementById("sidenav").style.borderRight = "2px solid white";
          $("#sidenav-menu").addClass("color-letra-blanco");
          $("#sidenav-links ul li a").addClass("color-letra-blanco");
          $("#sidenav-menu").removeClass("color-letra-naranja");
          $("#sidenav-links ul li a").removeClass("color-letra-naranja");

          $("#sidenav-logo img").removeClass("color-logo-naranja");



      } else if (scroll > ($window.height() * 1)) {
          $body.css('background-color', '#260031');
          //cambiar color de menu
          document.getElementById("sidenav").style.borderRight = "2px solid white";
          $("#sidenav-menu").addClass("color-letra-blanco");
          $("#sidenav-links ul li a").addClass("color-letra-blanco");
          $("#sidenav-menu").removeClass("color-letra-naranja");
          $("#sidenav-links ul li a").removeClass("color-letra-naranja");

          $("#sidenav-logo img").removeClass("color-logo-naranja");



      } else if (scroll > ($window.height() * 0)) {
          $body.css('background-color', '#280250');
          //cambiar color de menu
          document.getElementById("sidenav").style.borderRight = "2px solid white";
          $("#sidenav-menu").addClass("color-letra-blanco");
          $("#sidenav-links ul li a").addClass("color-letra-blanco");
          $("#sidenav-menu").removeClass("color-letra-naranja");
          $("#sidenav-links ul li a").removeClass("color-letra-naranja");

          $("#sidenav-logo img").removeClass("color-logo-naranja");



      }
  }



});




/*--------------------------------------------------------------
#  
--------------------------------------------------------------*/






