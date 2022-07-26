const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");


//Escucha cada evento y cada vez que pase ejecuta el codigo
btn.addEventListener("click", sumarInputVarios);

//Siempre escuchar los eventos


function sumarInputVarios(event) {

    console.log((event));
    event.preventDefault();

    
    const sumaInputs =input1.value + input2.value;
    console.log(input1.value + input2.value);
    pResult.innerText = "resultado:" + sumaInputs; 
}


/*
const h1 = document.querySelector("h1"); //etiquetas, id o clases que queremos seleccionar en HTMl
const p = document.querySelector("p");
const superpar = document.querySelector(".superpar");
const prf = document.querySelector("#prf");
const input = document.querySelector("input");

console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    prf,
    input,
});

/* 
FUNCIONES PARA SELECCIONAR LOS ELEMENTOS QUE TENEMOS
EN HTML PARA UTILIZAR EN JS

querySelectorAll (para seleccionar todos los elementos)
getElementById
getElementsByClass
querySelector permite utilizar la sintaxis de HTMl

Aprenderemos a escribir HTML desde JavaScript
*/

//h1.innerHTML = "Que pasa? <br> hay cambio?"; //Nos permite modificar el html del elemento que estemos indicando
//innerTEXT --> convierte todo a texto.

/*


h1.getAttribute("") para saber si hay atributos en cualquier clase o elemento.
h1.classList.add("rojo") para agregar clases al elemento
h1.classList.remove("rojo") para quitar clases al elemento
h1.classList.contains("") condicional

*/

//input.value = "456"; //cambiar el valor desde JS 

/*
¿Como creamos un elemento desde 0? 
*/

//const img = document.createElement("img");
//img.setAttribute("src", "https://as01.epimg.net/meristation/imagenes/2022/05/08/noticias/1651998508_361943_1652017073_noticia_normal.jpg");

//console.log(img);

//prf.append(img);

