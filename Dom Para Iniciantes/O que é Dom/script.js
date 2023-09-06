// Exemplo 1
// window.alert("Hello world");

// Exemplo 2

const h1 = document.querySelector("h1");

function callbackh1() {
  console.log("Clicou em", h1.innerText);
}

h1.addEventListener("click", callbackh1);
