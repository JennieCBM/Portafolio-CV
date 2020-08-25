document.addEventListener('DOMContentLoaded', ()=>{
   const elementos = document.querySelectorAll('.carousel');
   M.Carousel.init(elementos, {
     duration: 500,
     indicators: true,
     fullWidth: false,
     shift: 50,
     dist: 0
   });
   const elems = document.querySelectorAll('.sidenav');
   const instances = M.Sidenav.init(elems);

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });
});

window.addEventListener("scroll", ()=>{
const navbar = document.querySelector('.nav');
const logo = document.querySelector('.brand-logo');
const h1= document.querySelector('h1');
const p = h1.parentNode.children[1];
  if(window.scrollY > 3){
    navbar.classList.remove("transparent");
    navbar.style.background = "rgba(245, 220, 220, .6)";
    h1.style.opacity = '1';
  };
  if(window.scrollY < 3){
    navbar.classList.add("transparent");
    h1.style.opacity = "0";
  };
  if(window.scrollY > 6){
    p.style.opacity = '1';
  };
  if(window.scrollY < 6){
    p.style.opacity = "0";
  };

})
//------------DATOS PERSONALES-----------------

//iconos - enlaces

const enlaces = document.querySelectorAll('.redes a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (e)=>{
    e.preventDefault();
  })
});
