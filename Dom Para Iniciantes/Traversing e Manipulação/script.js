const animaisLista = document.querySelector(".animais-descricao");
// Exemplo 1

//const h1 = document.querySelector("h1");

//h1.innerHTML = "<p>Novo titulo</p>";

// TODA TAG HTML É UM ELEMNTO

// console.log(animaisLista.innerText);

//Exemplo 2

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelector("li:last-child"));
console.log(lista.previousSibling);

// Exemplo 3
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");
//animais.appendChild(titulo);

//Exemplo 4

//contato.replaceChild(animaisLista, titulo);
//contato.insertBefore(animais, titulo);

//const novoh1 = document.createElement("h1");

//novoh1.innerText = "Novo título";
//novoh1.classList.add("titulo");

//mapa.appendChild(novoh1);
//console.log(novoh1);

// Exemplo 5

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");
const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);
