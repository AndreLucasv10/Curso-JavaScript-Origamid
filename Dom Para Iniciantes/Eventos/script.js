//Exemplo 1

const img = document.querySelector("img");

img.addEventListener("click", function () {
  console.log("clicou");
});

//Exemplo 2

// function callback() {
console.log("clicou");
//}

// img.addEventListener("click", callback);

//Exemplo 3 Evento

function callback(event) {
  console.log(event);
}

// Exemplo 4 evento

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
}

animaisLista.addEventListener("click", callbackLista);

// Exemplo 5

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno() {
  event.preventDefault();
  // console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);

//Exemplo 6

const h1 = document.querySelector("h1");

function mouseHandle(Event) {
  // console.log(Event.type, Event);
}

h1.addEventListener("mouseenter", mouseHandle);

window.addEventListener("scroll", callback);

// Exemplo 7

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener("keydown", handleKeyboard);
