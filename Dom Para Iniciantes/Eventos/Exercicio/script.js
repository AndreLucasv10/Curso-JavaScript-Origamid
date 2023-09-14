// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');
console.log(linkInterno);

function handleLinkInterno(event) {
  linkInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.target.classList.toggle("ativo");

  window.addEventListener("click", handleLinkInterno);
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const doom = document.body;

function callback(event) {
  console.log(event.target);
}

doom.addEventListener("click", callback);
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function remove(event) {
  event.target.remove(doom);
}

doom.addEventListener("click", remove);
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-aumentado");
  }
}
window.addEventListener("keydown", handleKeyboard);
