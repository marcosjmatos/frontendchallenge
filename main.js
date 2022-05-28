const desplegable = document.querySelector(".features");
const desplegable2 = document.querySelector('.company');
const contenido = document.querySelector(".content")
const contenido2 = document.querySelector(".content2")
const flecha1 = document.querySelector(".flecha1");
const flecha2 = document.querySelector(".flecha2");


function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}


desplegable.addEventListener("click", ()=> {
  menu1(contenido,flecha1);
}) 

//dropdown the menu funtion
function menu1(element,flecha) {

  if (element.style.display === "inline-block") {
    element.style.display = "none";
    flecha.setAttribute("src","images/icon-arrow-down.svg")
  } else {
    element.style.display = "inline-block"
    flecha.setAttribute("src","images/icon-arrow-up.svg")

  }

}

desplegable2.addEventListener("click", ()=> {

menu1(contenido2,flecha2);

}) 



// target    .setAttribute 'src' direcccion de la imagen 

// fototipo1.setAttribute("src", 'imagenes/.webp');
