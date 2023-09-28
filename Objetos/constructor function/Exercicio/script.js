// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}
const andre = new Pessoa("André", 22);
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 22);
const maria = new Pessoa("Maria", 20);
const Bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
function Dom(seletor) {
  (this.element = function () {
    return document.querySelectorAll(seletor);
  }),
    (this.ativar = function () {
      this.element().forEach((item) => {
        item.classList.add("ativar");
      });
    }),
    (this.remove = function () {
      this.element().forEach((item) => {
        item.classList.remove();
      });
    });
}
const li = new Dom("li");

console.log(li.ativar());
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
