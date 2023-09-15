const animaisLista = document.querySelector(".animais-descricao");
// Exemplo 1

const h1 = document.querySelector("h1");

h1.innerHTML = "<p>Novo titulo</p>";

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
