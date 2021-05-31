

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
resizeCharacters(heightDiv/5);




  var mediaqueryList = window.matchMedia("(orientation:portrait)");

  if(mediaqueryList.matches) {
    // console.log("Size CLOSE portrait");
    document.getElementById("mySidenav").style.height = "50px";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(0,0,0,0)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";
    
  }
  else{
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
    jQuery(function($) {
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

  if(mediaqueryList.matches) {
    // console.log("OPEN portrait");
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0.9)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 0)";
    document.getElementById("sidenav-logo").style.marginLeft = "10px";

  }
  else{
    // console.log("OPEN landscape");
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0.9)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 0)";
    document.getElementById("sidenav-logo").style.marginLeft = "35px";

  }

  document.getElementById("sidenav-menu").classList.toggle("change");

  jQuery(function($) {
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

  if(mediaqueryList.matches) {
    // console.log("CLOSE portrait");
    document.getElementById("mySidenav").style.height = "50px";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    // document.getElementById("sidenav").style.borderBottom = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";
    
  }
  else{
    // console.log("CLOSE landscape");
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("mySidenav").style.background = "rgba(21, 0, 37, 0)";
    document.getElementById("sidenav").style.borderRight = "2px solid rgba(var(--colorBorde), 1)";
    document.getElementById("sidenav-logo").style.marginLeft = "-12px";

  }

  document.getElementById("sidenav-menu").classList.remove("change");
  
  // evitar la animacion cuando presiona el logo pero esta cerrado el navbar
  if (navOpenState) {
    jQuery(function($) {
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
  // $('#logo-img-in').show();
  $('#logo-gif-in').hide();
  // $('#logo-img-out').hide();
  $('#logo-gif-out').show();

});


/*--------------------------------------------------------------
#  Change color background
--------------------------------------------------------------*/




var body = document.getElementsByTagName("BODY")[0]; 
// var body = document.getElementById("c");
  function chageColors(index) {
    
        if (index === 4) {
          body.style.backgroundColor ='#5100e7';
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (index === 3) {
        body.style.backgroundColor ='#fff';
        //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,78,21');
           $(".flecha-top a img").addClass("filtro-flecha-top");

         $("#sidenav-logo img").addClass("color-logo-naranja");
         $("#sidenav-menu div").css('background-color', '#ff4e15');


      } else if (index === 2) {
        body.style.backgroundColor ='#260031';
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (index === 1) {
        body.style.backgroundColor ='#ff4e15';
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
           $(".flecha-top a img").removeClass("filtro-flecha-top");

           $("#sidenav-logo img").removeClass("color-logo-naranja");
           $("#sidenav-menu div").css('background-color', '#fff');



      } else if (index === 0) {
        body.style.backgroundColor = '#280250';
          //cambiar color de menu
          document.querySelector(':root').style.setProperty('--colorBorde', '255,255,255');
           $(".flecha-top a img").removeClass("filtro-flecha-top");

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
  anchors: ['inicio', 'nosotros', 'experiencia', 'portafolio', 'contacto'],
  menu: '#menu',
  continuousVertical: true,
  afterLoad: function(anchorLink, index){
        // console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
        // console.log(JSON.stringify(index, null, 4));


    },
    onLeave: function(index, nextIndex, direction){
        // console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);
        // console.log(JSON.stringify(index, null, 4));

        //NOVA
        //NOVA
        //NOVA
        //NOVA
        
        chageColors(nextIndex.index);
    },
});









/*--------------------------------------------------------------
#                       Transicion entre paginas
--------------------------------------------------------------*/


window.transitionToPage = function(href, colorNextPage) {
  document.querySelector('body').style.opacity = 0;
  document.querySelector('body').style.backgroundColor = colorNextPage;
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})











/*--------------------------------------------------------------
#                       Expandable Video
--------------------------------------------------------------*/

// 

var Expand = (function() {
  var tile = $('.strips-strip');
  var tileLink = $('.strips-strip > .strip-content');
  var tileText = tileLink.find('.strip-video');
  var stripClose = $('.strip-close');
  
  var expanded  = false;

  var open = function() {
      
    var tile = $(this).parent();

      if (!expanded) {
        tile.addClass('strips-strip--expanded');
        stripClose.addClass('strip-close--show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
      } 
    };
  
  var close = function() {
    if (expanded) {
      tile.removeClass('strips-strip--expanded');
      stripClose.removeClass('strip-close--show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  }
    // expanding video
    var bindActions = function() {
      tileLink.on('click', open);	
      tileLink.hover( open, close ) 
      // stripClose.on('click', close);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();


