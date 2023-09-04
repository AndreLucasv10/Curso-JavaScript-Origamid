// Exemplo 1
var nome = "André";
console.log(nome.length);

//Exemplo 2

var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("clicou");
});

btn.classList.add("azul"); // adiciona a classe azul
btn.innerHTML; // 'Clique'
