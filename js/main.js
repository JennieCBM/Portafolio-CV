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
const lenguajes = document.querySelector('.lenguajes');
console.log(scrollY);
  if(window.scrollY > 3){
    navbar.classList.remove("transparent");
    navbar.style.background = "rgba(245, 220, 220, .6)";

  }else{
    navbar.classList.add("transparent");
  };
  if(window.scrollY > 10){
    p.style.opacity = '0';
    h1.style.opacity = '0';
  }else{
    p.style.opacity = '1';
    h1.style.opacity = '1';
  }

if(scrollY > 680 && scrollY < 1073){
  lenguajes.children[1].style.opacity='1';
  lenguajes.children[2].style.opacity='1';
}else{
  lenguajes.children[1].style.opacity='.5';
  lenguajes.children[2].style.opacity='.5';
};
if(scrollY > 1000 && scrollY < 1285){
  lenguajes.children[3].style.opacity='1';
  lenguajes.children[4].style.opacity='1';
}else{
  lenguajes.children[3].style.opacity='.5';
  lenguajes.children[4].style.opacity='.5';
};
if(scrollY > 1180 && scrollY < 1498){
  lenguajes.children[5].style.opacity='1';
  lenguajes.children[6].style.opacity='1';
}else{
  lenguajes.children[5].style.opacity='.5';
  lenguajes.children[6].style.opacity='.5';
};
if(scrollY > 1500 && scrollY < 1800){
  lenguajes.children[8].style.opacity='1';
  lenguajes.children[9].style.opacity='1';
}else{
  lenguajes.children[8].style.opacity='.5';
  lenguajes.children[9].style.opacity='.5';
};
if(scrollY > 1680 && scrollY < 2010){
  lenguajes.children[10].style.opacity='1';
  lenguajes.children[11].style.opacity='1';
}else{
  lenguajes.children[10].style.opacity='.5';
  lenguajes.children[11].style.opacity='.5';
};
if(scrollY > 1880 && scrollY < 2210){
  lenguajes.children[12].style.opacity='1';
  lenguajes.children[13].style.opacity='1';
}else{
  lenguajes.children[12].style.opacity='.5';
  lenguajes.children[13].style.opacity='.5';
};
if(scrollY > 2180 && scrollY < 2495){
  lenguajes.children[15].style.opacity='1';
  lenguajes.children[16].style.opacity='1';
}else{
  lenguajes.children[15].style.opacity='.5';
  lenguajes.children[16].style.opacity='.5';
};


})
//------------DATOS PERSONALES-----------------
