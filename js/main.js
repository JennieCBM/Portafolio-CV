//-----------SPA----------------------------
const links = document.querySelectorAll('.enlace');//los enlaces de la navbar
const main = document.querySelector('#main');//la seccion a la que se apendeara cada contenido
const h1= document.querySelector('h1');//el titulo
const parrafo = h1.parentNode.children[1];//el subtitulo
const navbar = document.querySelector('.nav');//Barra de navegacion principal
const background = document.querySelector('.parallax-1');
//declaro mi funcion ajax con dos argumentos, la url y el metodo (get por default)
let ajax = function(url, metodo){
  let http_metodo = metodo || "GET";
  let xhr = new XMLHttpRequest;
  xhr.open(http_metodo, url);
  xhr.send();
  return xhr;
};
//Al hacer click en cada enlace le asigno un valor al hash, será igual al id del target (enlace seleccionado)
links.forEach((link) => {
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.hash = e.target.id;
    //***********2.2 remuevo y agrego la clase que anima el titulo y subtitulo (otra opcion valida) comente esto para evitar dividir una pequeña funcion de agregar o remover clases en dos fragmentos separados
    //h1.classList.remove("aparece");
    //parrafo.classList.remove('aparece');
  });
});
//declaro una funcion para hacer cada peticion, y apendear el response al main
let navegar = function(){
  //concateno todo para usarlo en la petición, sin necesidad de que la ruta exacta sea visible en el pathname
  let p = location.hash.split('#')[1]+ ".html";
  let xhr = ajax(p);
  xhr.addEventListener("load", ()=>{
      if(xhr.status == 200){
        main.innerHTML = xhr.response;
        //***********1.2 remuevo y agrego la clase que anima el titulo y subtitulo, para evitar dividir una pequeña funcion de agregar y remover clases en dos fragmentos utilizo la propiedad offsetWidth la cual hace una lectura del ancho de un elemento en particular, al realizar dicha accion se trigerea en reflujo del DOM (se recarga un elemento especifico) y eso permite que la animacion vuelva a ejecutarse, agrego el operador void para minimizar el peso indicandole al navegador que el retorno sea undefined
        h1.classList.remove("aparece");
        parrafo.classList.remove('aparece');
        void (h1.offsetWidth);
        void (parrafo.offsetWidth);
        h1.classList.add("aparece");
        parrafo.classList.add('aparece');
        let test;
        if(p == "proyectos.html"){
          main.classList.add('section-proyectos');
          //si estoy en la seccion de proyectos llamo a las funciones respectivas
          //funcion materialize para carousel
          const elementos = document.querySelectorAll('.carousel');
           M.Carousel.init(elementos, {
             dist: -30,
             padding: 100,
           });//cierre funcion carousel

          //funcion cambio colores cubo
          const botones = document.querySelector('.lista').children;
          const cuadros = document.querySelectorAll('.color');

          let cambiarColor = function(nuevoColor){
              let contiene = cuadros[0].classList;
              let colorTest = /original-*/.test(contiene) ? 'original' : /rosa-*/.test(contiene) ? 'rosa' : /verde-*/.test(contiene) ? 'verde' : /azul-*/.test(contiene) ? 'azul' : undefined ;
              for (var cadaColor of cuadros) {
                for ( i = 1; i < 7; i++) {
                  cadaColor.classList.replace(`${colorTest}-${i}`,`${nuevoColor}-${i}`);
                };//fin for
              };//fin for of cada color
          }//cierre funcion cambiarColor
          for (boton of botones) {
            boton.addEventListener('click', (e)=>{
              let color = e.target.textContent.toLowerCase();
              cambiarColor(color);
            });//fin listener de click a botones
          };//fin for botones

          //Cambio titulo y subtitulo
          h1.innerText = "PROYECTOS";
          parrafo.innerText = '"En mi proceso de formación me he encontrado con la oportunidad de poner en practica la superacion de pequeños retos, algunos de los siguientes proyectos son resultado de ese proceso..."';
          
        }else{
           //si no estoy en proyectos.html
           if (p == 'contacto.html') {
             h1.innerText = 'Contacto'
           }else{
             //si no estoy en proyectos.html, ni en contacto.html
             h1.innerText = "Hola! bienvenido a mi sitio.";
             parrafo.innerText = '"Soy desarrolladora front-end en formación con conocimientos intermedios de maquetacion, orientada al desarrollo de sitios webs responsive, que permitan al usuario una experiencia fluida y dinamica..."'
           };

        };//cierre condicional proyectos
      }else{};//cierre condicional status 200


      //hago un bucle para cambiar el color al enlace seleccionado
      links.forEach((link) => {
        if(location.hash !== ""){
          if(link.id == location.hash.split('#')[1]){
            link.classList.add('activo');
          }else{
            link.classList.remove('activo');
          };//cierre condicional para agregar clase activo
        };//cierre condicional cambio de hash
      });//cierre foreach para cambio color enlace
  });//cierre de load
};//cierre funcion navegar

//declaro una variable que es igual a la ejecucion de mi funcion ajax con la pagina inicial, para que se apendee el contenido inicial cada vez que se inicia solo con el dominio (sin ruta especifica)
let pagina_inicial = ajax("home.html");
pagina_inicial.addEventListener("load", ()=>{
  if(pagina_inicial.status == 200){
    main.innerHTML= pagina_inicial.response;
  };
});
//siempre que location.hash tenga un valor, ejecuto navegar, esto permite al usuario acceder con la ruta directamente
if(location.hash){
  navegar();
};
//cada vez que hay un cambio en el hash ejecuto navegar, esto permite manejar el historial (yendo para adelante o atras en el navegador)
window.addEventListener("hashchange", navegar);


//----------------MATERIALIZE------------------------------
//funcion para barra de navegacion lateral
document.addEventListener('DOMContentLoaded', ()=>{
   const elems = document.querySelectorAll('.sidenav');
   const instances = M.Sidenav.init(elems);
});


//---------------------SCROLL--------------------------------

const scrollTop = document.documentElement.scrollTop;
window.addEventListener("scroll", ()=>{
  const logo = document.querySelector('.brand-logo');
  const lenguajes = document.querySelector('.lenguajes');

  //TRANSPARENCIA DE NAVBAR Y SALUDO
    if(window.scrollY > 20){
      navbar.classList.remove("transparent");
      navbar.style.background = "rgba(245, 220, 220, .6)";
      parrafo.style.opacity = '0';
      h1.style.opacity = '0';
    }else{
      navbar.classList.add("transparent");
      parrafo.style.opacity = '1';
      h1.style.opacity = '1';
    };
})
