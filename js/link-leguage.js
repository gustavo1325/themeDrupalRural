

/*const $ = jQuery;
$(document).ready(function() {
  var nodeActual= document.getElementById("lastChi");
  var ultimoHIjo= nodeActual.lastChild;;
  alert (ultimoHIjo.nodeName);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     console.log('Esto es un dispositivo móvil');
     $('.language-link').addClass("invisible");
     $('.is-active').addClass("visible");
     }
     else {console.log('no es')
      $('.language-link').addClass("invisible");
    //  $('.is-active').addClass("visible");

      //raton encima aparece
      $(document).on('mouseover',".is-active",function(event){
        console.log('evento mouse ever');
        $('.language-link').addClass("visible");
        });
        //poner clase flex
        $(document).on('click',".link-lenguage-item",function(event){
          console.log('dado click');
          $('#lastChi').addClass("orden");
        });

        //Sale raton desaparece
        $(document).on('mouseleave',"#mouseover-ul", function(event){
          console.log('mouseleva activa');
          $('.language-link').removeClass("visible");
          $('.is-active').addClass("visible");
        });

   }
});*/

const $ = jQuery;

$( window ).on( "load", function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    }else{
      $('.language-link').addClass("invisible");
      $('.is-active').addClass("visible");

      //raton encima aparece
      $("#orden-ul").hover(function(){
        console.log('evento mouse ever');
        $('.language-link').addClass("visible");
      },function(){
        $('.language-link').removeClass("visible");
        $('.is-active').addClass("visible");}
      );

  }

  var urlActual= window.location;
  if(urlActual == "http://localhost/manosdefuego/web/en"){
    console.log("estoes");
    $('#mouseover-ul').addClass("orden");
  }
});
