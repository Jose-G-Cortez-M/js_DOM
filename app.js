/*let elemento = window;
console.log(elemento);*/
/*trabajar con un elemento HTML de forma directa en JS*/

/*let elemento = document.querySelector('h1');
console.log(elemento);*/

/* let elemento = document.links;
console.log(elemento);*/
/*
const elemento = document.getElementById('mensajes');
console.log(elemento);*/

/*const abuelo = document.querySelector('ul.listas-cursos > li.list');
console.log(abuelo.parentElement.parentElement);*/
const hermanos = document.querySelector('ul.listas-cursos > li.list');
console.log(hermanos.nextElementSibling);