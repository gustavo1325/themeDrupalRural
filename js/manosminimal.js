const $ =jQuery;

$(document).ready(()=>{


});

addEventListener('DOMContentLoaded',()=>{
const post_sumid = document.querySelector('.form-textarea')
})

//cambiar atributo href de compartir redes




//function show menu para em menu de navegacion de movil
const showMenu = (toggleCl,navId) => {
  const toggle = document.querySelector(toggleCl)
        nav = document.querySelector(navId)
  if(toggle && nav){
    toggle.addEventListener('click',() => {
      nav.classList.toggle('show')
      toggle.classList.toggle('main-menu-toggle')
      toggle.classList.toggle('main-menu-togglex')
    })
  }
}

showMenu('.main-menu-toggle' , '.main-nav')

//marcar item de menu comprar a la rural
const liNa = document.querySelector('.main-menu li:nth-child(3)')
      listock =document.querySelector('#block-menuprincipalstock .main-menu li:nth-child(3)')
if(liNa){
  liNa.setAttribute('id', 'item-compra')
}
if(listock){
  listock.setAttribute('id', 'item-compra')
}

//obtener valor de la variable css que establece la altura del header para desplazar el menu tooger

/*let heigthHeader = document.getElementById('header_top').offsetHeight
getComputedStyle(document.documentElement).getPropertyValue('--header-height', heigthHeader)*/


//function show search
const showSearch = (lupaid, searchBlock, img_search_lupa, blockmenu) => {
      const lupa = document.getElementById(lupaid),
            src_img=document.getElementById(img_search_lupa),
            search = document.getElementById(searchBlock),
            largeminBp= matchMedia('(min-width: 992px)'),
            largemaxBp= matchMedia('(max-width: 991px)'),
            menu_principal= document.getElementById(blockmenu)

      if(lupaid && searchBlock && src_img && largemaxBp.matches){
            lupa.addEventListener('click',() => {
                search.classList.toggle('show')

                if(src_img.getAttribute('src') == '/rural/web/themes/custom/manosminimal/img/lupa.JPG'){//cambio atributo scr para mostrar lupa o x
                src_img.setAttribute('src', '/rural/web/themes/custom/manosminimal/img/x.JPG')
                }else{
                  src_img.setAttribute('src', '/rural/web/themes/custom/manosminimal/img/lupa.JPG')
                 }
            })
      }
      if(lupaid && searchBlock && src_img && largeminBp.matches){
        lupa.addEventListener('click',() => {

        //  console.log(largeminBp)
            search.classList.toggle('show2')
            menu_principal.classList.toggle('show3')
            if(src_img.getAttribute('src') == '/rural/web/themes/custom/manosminimal/img/lupa.JPG'){//cambio atributo scr para mostrar lupa o x
            src_img.setAttribute('src', '/rural/web/themes/custom/manosminimal/img/x.JPG')
            }else{
              src_img.setAttribute('src', '/rural/web/themes/custom/manosminimal/img/lupa.JPG')
             }
        })
      }
}

showSearch( 'lupa' , 'search-block-form', 'img_search_lupa', 'block-menuprincipalstock')


//----------------------------function Read more

const readmore = (botomx, divleermas) => {
  const bottomesco =  document.getElementById(botomx),
        leermas = document.getElementById(divleermas)
  if(bottomesco && leermas){
    bottomesco.addEventListener('click',() => {
      leermas.classList.toggle('escondite')

    })
  }
}

readmore('bottom_leer_mas' , 'text_leer_mas')
readmore('bottom_leer_mas2' , 'text_leer_mas2')




//-------------------------------formatea  la fechas de los post del dida a dia
const view_dia= document.querySelector('.views-field-created span')
if(view_dia){
    var date_dia=view_dia.innerText
    var  subCadena_dia = date_dia.substring(5, 10)
}

//--------------------------------Formatea la fecha de creacion de nodo
const date_nodo =  document.getElementById('format_date')
if(date_nodo){
    var  dateNodo = date_nodo.querySelector("span").innerText
    var  subCadena = dateNodo.substring(5, 16)
    var    dia= subCadena.substring(0, 2)
    var ano=subCadena.substring(6, 10)
    var mes=subCadena.substring(3, 5)
    var foro=date_nodo.querySelector("span")
  }


//--------------------------------------formatea fechas del bloque del dia a dia

//const date1=  document.querySelector('.time_post1')
let date_post1,
  date_post2,
  date_post3,
  date_post4
//if(date1){date_post1=date1.innerText}
const date2=  document.querySelector('.time_post2')
if(date2){date_post2 = date2.innerText}
const date3=  document.querySelector('.time_post3')
if(date3){date_post3=date3.innerText}
const date4=  document.querySelector('.time_post4')
if(date4){date_post4= date4.innerText}

const date1=  Array.from(document.querySelectorAll('.time_post1'))


//console.log(date1[0])

/*let date_post1,
  date_post2,
  date_post3,
  date_post4
if(date1){date_post1=date1.innerText}
const date2=  document.querySelector('.time_post2')
if(date2){date_post2 = date2.innerText}
const date3=  document.querySelector('.time_post3')
if(date3){date_post3=date3.innerText}
const date4=  document.querySelector('.time_post4')
if(date4){date_post4= date4.innerText}
*/

//Array.from(document.querySelectorAll('.img_dia'))
const mescat = (mess) => {
    switch(mess) {
   case "01": {
      result = "GENER";
      break;
   }
   case "02": {
      result = "FEBRER";
      break;
   }
   case "03": {
      result = "MARÇ";
      break;
   }
   case "04": {
      var result = "ABRIL";
      break;
   }
   case "05": {
      result = "MAIG";
      break;
   }
   case "06": {
      result = "JUNY";
      break;
   }
   case "07": {
      result = "JULIOL";
      break;
   }
   case "08": {
      result = "AGOST";
      break;
   }
   case "09": {
      result = "SETEMBRE";
      break;
   }
   case "10": {
      result = "OCTUBRE";
      break;
   }
   case "11": {
      result = "NOVEMBRE";
      break;
   }
   case "12": {
      result = "DESEMBRE";
      break;
   }

}
return result
}

mest= mescat(mes)
fechaAutor = dia + ' ' +  mest + ' ' + ano + ' | LA RURAL DE COLLSEROLA'

if(foro){
  nuevoText=date_nodo.querySelector("span").innerHTML = fechaAutor
}


//pone primer caracter de cadena en mayuscula
const primeraLetraMayuscula = (cadena) => {
  const primerCaracter = cadena.charAt(0).toUpperCase();
  const restoDeLaCadena = cadena.substring(1, cadena.length);
  return primerCaracter.concat(restoDeLaCadena);
}

//formatea las fechas del block del dia a dia
const trata_fecha_post = (cadena) => {
  dia_post1= cadena.substring(0 , 2)
  mes_post1 = cadena.substring(3)
  mest_post1= mescat(mes_post1)
  cadena_mes = mest_post1.toLowerCase();
  cadena_mes_firs_mayuscula=primeraLetraMayuscula(cadena_mes)
  fechapost_block_dia1 = dia_post1 + ' ' +  cadena_mes_firs_mayuscula
  return fechapost_block_dia1
}

if(date_post1){
  fecha_post_formateada = trata_fecha_post(date_post1)
  document.querySelector('.time_post1').innerHTML = fecha_post_formateada
}

if(date_post2){
  fecha_post_formateada = trata_fecha_post(date_post2)
  document.querySelector('.time_post2').innerHTML = fecha_post_formateada
}

if(date_post3){
  fecha_post_formateada = trata_fecha_post(date_post3)
  new_fechapost_block_dia1 =document.querySelector('.time_post3').innerHTML = fecha_post_formateada
}

if(date_post4){
  fecha_post_formateada = trata_fecha_post(date_post4)
  document.querySelector('.time_post4').innerHTML = fecha_post_formateada
}




for(i=0; i < date1.length; i++){
  fecha= date1[i].innerText;
  if(fecha){
    fecha_post_formateada = trata_fecha_post(fecha);
    date1[i].innerHTML = fecha_post_formateada;
  }
  //console.log(fecha_post_formateada)
}



//------------COMPARTE EN redes_img cambiar atributo href
addEventListener('DOMContentLoaded', () =>{})
const comparteRedes = () => {

  const face="https://www.facebook.com/sharer/sharer.php?u=",
        twit = "https://twitter.com/?status=",
        comparte_face = document.getElementById('comparte_facebook')
        comparte_twit = document.getElementById('comparte_twiter')
  var url_actual = location.href


      if(comparte_face){
        comparte_face.addEventListener('click',() => {
         var urlcom= 'https://www.facebook.com/sharer/sharer.php?u=' + url_actual
         comparte_face.setAttribute('href',urlcom)

        })
      }
        if(comparte_twit){
          comparte_twiter.addEventListener('click',() => {
          var urltw= 'https://twitter.com/?status=' + url_actual
           comparte_twit.setAttribute('href',urltw)

          })
      }

}
comparteRedes()





//************************************************BOTTOM LIKE **********************************************************+


//extraeidnode extrae el id de la url
const extraeidnode = ($url) =>{
  let id=$url.charAt($url.length-1)
  return id
}

var idnode= location.pathname;
var idactualnode = extraeidnode(idnode)

jQuery(document).ready(function(){ //llamada AJAX desde el botom like, envia un ok para aumentar el contadror like en la base de datos

  const numberlikes = () => {
    let actualizalike='inicializa';
    datos = {"actualizalike":actualizalike,
              "idnode" : idactualnode
            };


            $.ajax({
              url: "countlikes",
              type: "POST",
              data: datos
            }).done(function(data){
                //console.log(data);
                 let countlie_respuesta=data[0].message["countlike"]
                 const like_img_count = document.getElementById('id_img_like')
                 like_img_count .classList.add('img_like_count')
                 like_img_count.style.background='linear-gradient(to right, #353d2d var(--contador_like), transparent ' + countlie_respuesta + '%)'
    });
  }

const  comprobacionlikes = document.getElementById('like')
if(comprobacionlikes){
 numberlikes()
}





//$('p').one('click', function() {

    $( "#like" ).click(function(e) {
      $("#like").off('click');

      datos = {"actualizalike":"bottom",
                "idnode" : idactualnode
              };
                $.ajax({
                  url: "countlikes",
                  type: "POST",
                  data: datos,
                  //dataType: 'text',
                })
                .done(function(data){
                  //console.log(data);
                  let result_count_like= data[0].message["countlike"]
                  const like_img_count = document.getElementById('id_img_like')
                //  like_img_count .classList.add('img_like_count')
                  like_img_count.style.background='linear-gradient(to right, #353d2d var(--contador_like), transparent ' + result_count_like + '%)'
                //  console.log(result_count_like)

        });
      })
})




//Reducir y ampliar la imagen del post en la plana de dia_home_movil

let ancho_viewport= document.documentElement.clientWidth //tamño del ancho_viewport

const widthimg_post= (width) => {
  let heightimg_post= width / 1.6
  return heightimg_post
}

let resultheight=  widthimg_post(ancho_viewport)
document.documentElement.style.setProperty('--height_post', resultheight + 'px')
document.documentElement.style.setProperty('--width_post', ancho_viewport + 'px')

//---------------------------------------------------END-----------------------

//boton flecha para mostrar completa la imagen del post

const contenedor_flecha_post = document.getElementById('efecto1'),
      img_post  = document.getElementById('post_img'),
      flech_img =  document.getElementById('flecha_img')

const botom_flech = () => {
  if(contenedor_flecha_post){
      contenedor_flecha_post.addEventListener('click',() => {
        if(img_post){
          img_post.classList.remove('post_img')
        }
        if(flecha_img){
          flecha_img.style.display='none'
        }
    })
  }
}

botom_flech()


//calcular tamaño de altura de las imagenes del blog
const patron= new RegExp("dia_a_dia"), //esta expresion regular es para decidir que vista de dia a dia mostrar
      mediumBp= matchMedia('(max-width: 767px)'), //breakpoins para el dia a dia
      largeBp= matchMedia('(min-width: 767px)')
const imgpostrural=  Array.from(document.querySelectorAll('.img_dia'))
if(imgpostrural.length > 0){
    let imgpostruralun= imgpostrural[0].width
   if(mediumBp.matches){
      imgpostrural.map(el => el.style.height=imgpostruralun  + "px")
      imgpostrural.map(el => el.style.width=imgpostruralun + "px")
   }else{
     imgpostrural.map(el => el.style.height=imgpostruralun/2  + "px")
     imgpostrural.map(el => el.style.width=imgpostruralun + "px")

   }
}

//------------------------------------- solicitar la URL para decidir que vista del modulo dia a dia mostrar

let urlactual= location.href,
    diahomephone =document.getElementById("diahome_phone"),
    diaadi_phone =document.getElementById("didaadia_phone"),
    didhome_desk =document.getElementById("didhome_desk"),
    diaadi_desk =document.getElementById("dia_desk")




   fr=urlactual.search(patron)

  if(fr == -1 && largeBp.matches){

    if(diahomephone){diahomephone.style.display="none"}
    if(diaadi_phone){diaadi_phone.style.display="none"}
    if(didhome_desk){didhome_desk.style.display="block"}
    if(diaadi_desk){diaadi_desk.style.display="none"}
  //  console.log("estoy en dia home escritorio")
    //document.getElementById("id").style.property="value"
  }
  if(fr == -1 && mediumBp.matches){
    if(diahomephone){diahomephone.style.display="block"}
    if(diaadi_phone){diaadi_phone.style.display="none"}
    if(didhome_desk){didhome_desk.style.display="none"}
    if(diaadi_desk){diaadi_desk.style.display="none"}
    //console.log("estoy en dia home movil")
  }

  if(fr != -1 && largeBp.matches){
    if(diahomephone){diahomephone.style.display="none"}
    if(diaadi_phone){diaadi_phone.style.display="none"}
    if(didhome_desk){didhome_desk.style.display="none"}
    if(diaadi_desk){diaadi_desk.style.display="block"}
  //  console.log("estoy en dia a dia escritorio")
  }

  if(fr != -1 && mediumBp.matches){
    if(diahomephone){diahomephone.style.display="none"}
    if(diaadi_phone){diaadi_phone.style.display="block"}
    if(didhome_desk){didhome_desk.style.display="none"}
    if(diaadi_desk){diaadi_desk.style.display="none"}
      //console.log("estoy en el dia a dia movil")

  }

  ///////--------------------------------- colocamo img al item del menu con el focomenu PERO NO HACE FALTA

//const itemmenumprincipal=  Array.from(document.querySelectorAll('.main-menu__item a'))

//var patrons=[new RegExp("qui_som"), new RegExp("horts"), new RegExp("compra_a_la_rural"), new RegExp("ateneu_rural"), new RegExp("dia_a_dia"), new RegExp("contacte")];

//for(i=0; i<=5; i++){
//  urlactual;
//  frr=urlactual.search(patrons[i]);
//  if(frr != -1){
//  itemmenumprincipal[i].setAttribute('class', 'itemmeu');
//    console.log(i);
//  }
// }
//  liNa.setAttribute('id', 'item-compra')


//recolocamos elemento textarea del form contact al tomar el focomenu

const textarea_contact =document.getElementById("edit-field-comentarirural-0-value"),
      class_textarea_contact =document.querySelector('.form-item-field-comentarirural-0-value')
      class_textarea_contact_label =document.querySelector('.form-item-field-comentarirural-0-value label')


if(textarea_contact){
        textarea_contact.addEventListener('focus',() => {
          class_textarea_contact.style.marginTop='0'
          class_textarea_contact_label.style.top='0'
        })
}


//cambiar aspecto (imagen y background) del modulo compra a la rural para plana horts y contact
const patronhorts= new RegExp("horts"),
      patroncontact = new RegExp("contact"),
      backgroundCompra = document.getElementById("content_comprarural"),
      imgCompra = document.getElementById("img_comprarural"),
      textconpra=document.getElementById("textconpra"),
      compra_email=document.querySelector('.compra_email'),
      compra_politica_privacidad=document.querySelector('.comprarural-addform label.option'),
      submit_compra=document.getElementById("edit-submit--3"),
      submit_compra_contact=document.getElementById("edit-submit--2"),
      img_cambio=document.getElementById("img_cambio")
      img_cambio_phone=document.getElementById("img_cambio_phone")


frhor=urlactual.search(patronhorts)
frcont=urlactual.search(patroncontact)
if(frhor != -1 && largeBp.matches || frcont != -1 && largeBp.matches || frhor != -1 && mediumBp.matches || frcont != -1 && mediumBp.matches){
      if(backgroundCompra){
        backgroundCompra.style.background='#90b37d'
        imgCompra.setAttribute('src', '/rural/web/themes/custom/manosminimal/img/Compra_Rural_ico.png')
        textconpra.style.color='#fff'
        compra_email.style.background='#90b37d'
        compra_email.style.borderColor='#fff'
        compra_email.classList.add('cambio')
        compra_politica_privacidad.style.color='#fff'
        submit_compra.style.background='#90b37d'
        submit_compra.style.borderColor='#fff'
        submit_compra.style.color='#fff'
        submit_compra_contact.style.background='#90b37d'
        submit_compra_contact.style.borderColor='#fff'
        submit_compra_contact.style.color='#fff'
        img_cambio.setAttribute('srcset', '/rural/web/themes/custom/manosminimal/img/els_horts_compra_rural.png')
        img_cambio_phone.setAttribute('srcset', '/rural/web/themes/custom/manosminimal/img/hort_img_cambio_phone.png')

      }
}


//controlar la altura de las imagenes del horts y ateneu para que sean cuadradas
const img_galeria_hor_ateneu=  Array.from(document.querySelectorAll('.img_galeria_hort'))

if(img_galeria_hor_ateneu.length > 0){
  let width_img_galeria= img_galeria_hor_ateneu[0].width
  img_galeria_hor_ateneu.map(el => el.style.height=width_img_galeria  + "px")
}

//hacemos cuadradas las imagenes de las galerias de hort y ateneu
const img_galeria_horts_ateneu_phone = document.getElementById("img_galeria_hort_ateneu")
if(img_galeria_horts_ateneu_phone){
      let width_galeria_phone= img_galeria_horts_ateneu_phone.width
      img_galeria_horts_ateneu_phone.style.height= width_galeria_phone + "px"
}

//activar boton de la galeria
const flecha_galeria =  document.querySelector('.flecha_galeria'),
      src_galeria= document.getElementById("img_galeria_hort_ateneu")
      img1=document.getElementById("img1"),
      img2=document.getElementById("img2"),
      img3=document.getElementById("img3")
var img_src1
var img_src2
var img_src3
      if(img1 || img2 || img3){
      img_src1=img1.getAttribute('src'),
      img_src2=img2.getAttribute('src'),
      img_src3=img3.getAttribute('src')
    }
let e=0
array_galeria=[img_src1, img_src2, img_src3]

if(flecha_galeria && img_src1 && img_src2 && img_src3){
    flecha_galeria.addEventListener('click',() => {
        e++
        src_galeria.setAttribute('src', array_galeria[e])

        if(e>2){
          e=0
          src_galeria.setAttribute('src', array_galeria[e])
        }

    })
}


//cambiar background del modulo de instagran en la plana de ateneu > 768 y cambio background galeria cuando <768
const patronateneu= new RegExp("ateneu_rural"),
      content_instagram_ateneu=document.getElementById("content_instagram"),
      img_instagram_phone= document.querySelector('.item_img_instagram')
frateneu=urlactual.search(patronateneu)
if(frateneu != -1 && largeBp.matches){
  content_instagram_ateneu.style.background='#fcf9f0'
}

//quitar padding-top en la plana de movil del modulo de instagran
if(frateneu != -1 && mediumBp.matches){
  img_instagram_phone.style.paddingTop='0px'
}


//traigo del servidor las URL de los seis post para la galeria_post

//boton siguiente
$( "#galeria_post_siguiente").click(function(e) {
 array_post=[]
        $.ajax({
          url: "diadia",
          type: "POST",
        })
        .done(function(data){
              for(let i=0; i<6; i++){
                array_post[i]=data[0].message[i];
                if(data[0].message[i] == urlactual){
                }
              }
              let length_array= array_post.length

                for(i=0; i<length_array; i++){
                      if(array_post[i] == urlactual && i<length_array-2){
                      location.href= array_post[i+1]
                      break
                      }
                      if(i==length_array-1){
                        location.href=array_post[0]
                        break
                      }
                }
        });
});


//boton anterior

$( "#galeria_post_anterior").click(function(e) {
 array_post=[]
        $.ajax({
          url: "diadia",
          type: "POST",
        })
        .done(function(data){
              for(let i=0; i<6; i++){
                array_post[i]=data[0].message[i];
                if(data[0].message[i] == urlactual){
                }
              }
              let length_array= array_post.length

                for(i=0; i<length_array -1; i++){
                      if(array_post[i] == urlactual && i != 0){
                      location.href= array_post[i-1]
                      break
                      }
                      if(array_post[i] == urlactual && i== 0){
                        location.href=array_post[length_array-1]
                        break
                      }
                }

        });
});


//Controla el tamaño de la imagen post_pagina de desk

const post_img=document.getElementById("post_img"),
      content_post=document.getElementById("content_post"),
      item_title_post=document.getElementById("item_title_post")
      if(content_post){
        var width_content_post=content_post.clientWidth
      }

if(post_img && content_post){
      // let width_post_img=post_img.width
      if(largeBp.matches){
          //img_post.style.height= (width_content_post  + "px")
          post_img.style.width= (width_content_post / 2 + "px")
         item_title_post.style.width= (width_content_post / 2 + "px")
          post_img.style.height= (width_content_post / 2 + "px")
          console.log(width_content_post)
      }
}
