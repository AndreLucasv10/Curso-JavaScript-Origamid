function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const andre = new Pessoa("Andre", 22);

Pessoa.prototype.andar = function () {
  return this.nome + " Andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};
//console.log(Pessoa.prototype);

const pais = "Brasil";
const cidade = new String("Rio");
const listaAnimais = ["Cachorro", "Gato", "Passaro", "Cavalo"];

const li = document.querySelectorAll("li");
const listaArray1 = Array.prototype.slice.call(li);
const listaArray2 = Array.from(li);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
