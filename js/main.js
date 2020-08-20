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
let navbar = document.querySelector('.nav');
  if(window.scrollY > 3){
    navbar.classList.remove("transparent");
    navbar.style.background = "rgba(245, 220, 220, .6)";
  };
  if(window.scrollY < 3){
    navbar.classList.add("transparent");
  }
})
