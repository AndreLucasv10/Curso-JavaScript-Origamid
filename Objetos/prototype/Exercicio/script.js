// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobreNome, idade) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
}
const andre = new Pessoa("Andre", "Lucas", 22);

Pessoa.prototype.NomeCompleto = function () {
  return this.nome + " " + this.sobreNome;
};

console.log(andre.NomeCompleto());
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // Function
li.innerText; //String
li.value; //Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
