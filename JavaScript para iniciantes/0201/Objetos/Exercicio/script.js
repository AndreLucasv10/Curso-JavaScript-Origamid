// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const pessoa = {
  nome: "André",
  sobrenome: "Lucas",
  idade: 22,
  faculdade: "incompleto",
};
// Crie um método no objeto anterior, que mostre o seu nome completo
function nomeCompleto() {
  return `${pessoa.nome} ${pessoa.sobrenome}`;
}
console.log(nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  idade: 10,
  cor: "preto",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "nada";
    }
  },
};
